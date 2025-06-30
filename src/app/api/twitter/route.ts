import { TwitterApi } from 'twitter-api-v2';
import { NextResponse } from 'next/server';
import cache from 'memory-cache';

const CACHE_KEY = 'tweets';
const CACHE_TTL = 900_000;

export async function GET() {
  try {
    if (
      !process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN ||
      !process.env.NEXT_PUBLIC_TWITTER_USERNAME
    ) {
      console.error('Missing Twitter API credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 },
      );
    }
    const cachedData = cache.get(CACHE_KEY);
    if (cachedData) {
      return NextResponse.json(cachedData);
    }

    const client = new TwitterApi(process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN);

    const user = await Promise.race([
      client.v2.userByUsername(process.env.NEXT_PUBLIC_TWITTER_USERNAME),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('User lookup timeout')), 150000),
      ),
    ]);

    const timeline = await client.v2.userTimeline((user as any).data.id, {
      max_results: 5,
      expansions: ['attachments.media_keys'],
      'tweet.fields': ['created_at', 'text'],
      'media.fields': ['url', 'type'],
    });

    const { data: tweets, includes } = timeline.data;

    const photoMedia =
      includes?.media?.filter((media) => media.type === 'photo') || [];

    const photoMediaKeys = new Set(photoMedia.map((media) => media.media_key));

    const filteredTweets = tweets
      .map((tweet) => {
        if (tweet.attachments?.media_keys) {
          const photoKeys = tweet.attachments.media_keys.filter((key) =>
            photoMediaKeys.has(key),
          );
          if (photoKeys.length > 0) {
            return {
              ...tweet,
              attachments: {
                ...tweet.attachments,
                media_keys: photoKeys,
              },
            };
          }
        }
        return null;
      })
      .filter((tweet) => tweet !== null);

    const responseData = {
      data: filteredTweets,
      includes: {
        media: photoMedia,
      },
    };

    cache.put(CACHE_KEY, responseData, CACHE_TTL);

    return NextResponse.json(responseData, {
      headers: {
        'Cache-Control': 'public, max-age=900',
        'CDN-Cache-Control': 'public, max-age=900',
      },
    });
  } catch (error: any) {
    console.error('API Error Details:', {
      message: error.message,
      stack: error.stack,
      rateLimit: error.rateLimit,
    });
    if (error.rateLimit && error.rateLimit.remaining === 0) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.' },
        { status: 429 },
      );
    }
    return NextResponse.json(
      { error: 'Failed to fetch tweets. Please try again later.' },
      { status: 500 },
    );
  }
}
