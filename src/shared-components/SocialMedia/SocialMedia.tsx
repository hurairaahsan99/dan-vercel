'use client';
import SocialMediaComponent from '@/shared-components/SocialMediaComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import useSWR from 'swr';
import React from 'react';
import { Alert, AlertIcon, Spinner } from '@chakra-ui/react';

const SocialMedia = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Social_Media_Section_Media_Center',
    'GET',
  );
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) {
      const error = new Error('Failed to fetch');
      error.message = await res.text();
      throw error;
    }
    return res.json();
  };

  const {
    data: Data1,
    error: error1,
    isLoading: isLoading1,
  } = useSWR('/api/twitter', fetcher, {
    revalidateOnFocus: false,
    refreshInterval: 900_000,
    shouldRetryOnError: true,
    errorRetryCount: 2,
    errorRetryInterval: 5000,
  });
  if (isLoading || isLoading1) {
    <></>;
  }
  const dummy = {
    data: [1, 2, 3, 4],
  };
  return (
    <SocialMediaComponent
      title={data?.name}
      sub_title={data?.sub_name}
      icons={data?.data}
      logo={data?.bg_image}
      SocialPosts={error1 ? dummy : Data1}
    />
  );
};

export default SocialMedia;
