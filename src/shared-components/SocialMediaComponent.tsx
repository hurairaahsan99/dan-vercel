'use client';
import {
  Flex,
  Box,
  Text,
  useMediaQuery,
  Link,
  Button,
  Card,
  Avatar,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface SocialIcons {
  image: string;
  status: number;
  social_media_link: string;
}
interface SocialMediaData {
  logo: string;
  icons: SocialIcons[];
  title: {
    en: string;
    ar: string;
  };
  sub_title: {
    en: string;
    ar: string;
  };
  SocialPosts?: any;
}

const SocialMediaComponent: React.FC<SocialMediaData> = ({
  logo,
  icons,
  title,
  sub_title,
  SocialPosts,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = currentScroll + scrollAmount;

      // Use requestAnimationFrame for smoother scrolling on Safari iOS
      const animateScroll = (start: number, end: number, duration: number) => {
        const startTime = performance.now();

        const step = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          const easedProgress = easeInOutQuad(progress);

          if (scrollRef.current) {
            scrollRef.current.scrollLeft = start + (end - start) * easedProgress;
          }

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      };

      animateScroll(currentScroll, targetScroll, 300);
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth;
      const currentScroll = scrollRef.current.scrollLeft;
      const targetScroll = currentScroll - scrollAmount;

      // Use requestAnimationFrame for smoother scrolling on Safari iOS
      const animateScroll = (start: number, end: number, duration: number) => {
        const startTime = performance.now();

        const step = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Easing function for smooth animation
          const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          const easedProgress = easeInOutQuad(progress);

          if (scrollRef.current) {
            scrollRef.current.scrollLeft = start + (end - start) * easedProgress;
          }

          if (progress < 1) {
            requestAnimationFrame(step);
          }
        };

        requestAnimationFrame(step);
      };

      animateScroll(currentScroll, targetScroll, 300);
    }
  };

  return (
    <Flex
      position={'relative'}
      w="100%"
      h={{ base: '670px', lg: '500px' }}
      textAlign={'center'}
      gap={{ base: '2rem', lg: '10rem' }}
      mt={'0.5rem'}
      overflow="hidden"
      bg={'#592F14'}
      align={{ base: 'start', lg: 'center' }}
      justify="flex-start"
      flexDir={{ base: 'column', lg: 'row' }}
      pl={{ base: '1rem', lg: !isRTL ? '2rem' : '0px' }}
      pr={{ base: '1rem', lg: isRTL ? '2rem' : 'px' }}
      dir={isRTL ? 'rtl' : 'ltr'}
      py={{ base: 8, lg: 2 }}
    >
      {/* full background layer graphic */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bgImage="/assets/Layer_.png"
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        zIndex={0}
        opacity={0.5}
      />
      <Flex flexDir="column" gap="2rem">
        <Box w={{ base: '180px', lg: '250px' }}>
          {logo && logo !== '' ? (
            <Image
              src={logo}
              alt={''}
              layout="responsive"
              objectFit="contain"
              width={10}
              height={10}
              priority
            />
          ) : null}
        </Box>
        <Flex
          flexDir="column"
          zIndex={1}
          transform="translateY(-50%)"
          textAlign={isRTL ? 'right' : 'left'}
          color="white"
          fontWeight={500}
          gap={isMobile ? 0 : 0}
          mt={{ base: 8, lg: '2rem' }}
          mb={{ base: -8, lg: '-4rem' }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <Text
            fontSize={{ base: '1.4rem', lg: '1.8rem' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            fontWeight={700}
            color="#F57D00"
          >
            {isRTL ? title?.ar : title?.en}
          </Text>
          <Text
            fontSize={{ base: '1rem', lg: '1.1rem' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            className="Readex-Light"
          >
            {isRTL ? sub_title?.ar : sub_title?.en}
          </Text>
        </Flex>
        <Flex gap={2}>
          {icons?.map((res, index) => (
            <Flex key={index}>
              {res.status === 1 && (
                <Link
                  href={res.social_media_link && res.social_media_link}
                  isExternal
                  alignItems="start"
                >
                  <Box
                    h={{ base: '30px', lg: '70px' }}
                    position="relative"
                    w={{ base: '30px', lg: '30px' }}
                  >
                    {res.image && res.image !== '' ? (
                      <Image
                        src={res.image}
                        alt={''}
                        width={100}
                        height={70}
                        objectFit="contain"
                        priority
                      />
                    ) : null}
                  </Box>
                </Link>
              )}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Flex flexDir="column" width="full" maxW="100%">
        <Flex
          width="full"
          overflowX={{ base: 'auto', lg: 'auto' }}
          overflowY="auto"
          maxW="100%"
          gap={{ base: '0.9rem', lg: '1.5rem' }}
          flexWrap="nowrap"
          ref={scrollRef}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
            // Safari iOS specific improvements
            '-webkit-overflow-scrolling': 'touch',
            'scroll-behavior': 'auto',
            'overscroll-behavior': 'contain',
          }}
        >
          {SocialPosts?.data?.map((tweet: any, index: any) => (
            <Flex
              key={index}
              zIndex={1}
              display={'flex'}
              width={{ base: '80vw', lg: '25%' }}
              height={{ base: '40vh', lg: '35vh' }}
              overflow="hidden"
              justifyContent="center"
              position="relative"
              flexShrink={{ base: '0', lg: '0' }}
              bg="white"
            >
              {tweet.attachments?.media_keys?.map((mediaKey: string) => {
                const media = SocialPosts?.includes?.media?.find(
                  (m: any) => m.media_key === mediaKey,
                );
                return media?.url ? (
                  <Flex bg="white">
                    <Image
                      src={media.url}
                      alt="Card image"
                     fill
                      objectFit="cover"
                      objectPosition="-6px 0px"
                      style={{ padding: '0.9rem', paddingBottom: '3.7rem' }}
                    />
                    <Flex
                      bg="white"
                      position="absolute"
                      bottom={1}
                      left={3}
                      borderRadius="full"
                      pb={1}
                    >
                      <Avatar
                        border="1px solid #592F14"
                        p={1}
                        size={'md'}
                        background="white"
                        src="/assets/DanBrownLogo.png"
                        name="Dan"
                      />
                    </Flex>
                    <Flex
                      flexDir="column"
                      position="absolute"
                      bottom={'2%'}
                      left={'23%'}
                      zIndex={1}
                      textAlign={'left'}
                      color="white"
                      fontWeight={500}
                      dir={isRTL ? 'rtl' : 'ltr'}
                    >
                      <Text
                        fontSize={{ base: '1rem', lg: '1rem' }}
                        dir={'ltr'}
                        fontWeight={600}
                        color="#552A0E"
                      >
                        {isRTL ? 'Dan' : 'Dan'}
                      </Text>
                      <Text
                        fontSize={{ base: '0.7rem', lg: '0.8rem' }}
                        dir={isRTL ? 'rtl' : 'ltr'}
                        className="Readex-Light"
                        fontWeight={400}
                        color="#552A0E"
                      >
                        {'@DanCompanySA'}
                      </Text>
                    </Flex>
                  </Flex>
                ) : null;
              })}
            </Flex>
          ))}
        </Flex>
        <Flex
          gap="2rem"
          dir={isRTL ? 'rtl' : 'ltr'}
          mt={{ base: '1rem', lg: '1rem' }}
          zIndex={999}
          align="center"
        >
          <Button
            bg={isRTL ? "transparent" : "white"}
            px={{ base: '1rem', lg: '1rem' }}
            py={{ base: '0.7rem', lg: '1.2rem' }}
            fontSize={{ base: '10px', lg: '16px' }}
            fontWeight={600}
            borderRadius={{ base: '2xl', lg: '3xl' }}
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
            border="1px solid white"
            mb={{ base: '1.5rem' }}
            onClick={isRTL ? handleNext : handlePrev}
          >
            {isRTL ? (
              <FaCaretRight color="white" size="2rem" />
            ) : (
            <FaCaretLeft color="gray" size="2rem" />
            )}
          </Button>
          <Button
            bg={isRTL ? "white" : "transparent"}
            px={{ base: '1rem', lg: '1rem' }}
            py={{ base: '0.7rem', lg: '1.2rem' }}
            fontSize={{ base: '10px', lg: '16px' }}
            fontWeight={600}
            color="white"
            borderRadius={{ base: '2xl', lg: '3xl' }}
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
            border="1px solid white"
            mb={{ base: '1.3rem' }}
            onClick={isRTL ? handlePrev : handleNext}
          >
            {isRTL ? (
              <FaCaretLeft color="grey" size="2rem" />
            ) : (
              <FaCaretRight color="white" size="2rem" />
            )}
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SocialMediaComponent;
