'use client';
import React from 'react';
import useFetch from '@/Utils/Fetch/useFetch';
import BlogsTextComponent from '@/shared-components/BlogsTextComponent';

const BlogsText = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Media_Center_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return <BlogsTextComponent data={data} />;
};

export default BlogsText;
