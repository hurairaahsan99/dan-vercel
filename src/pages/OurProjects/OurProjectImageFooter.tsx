'use client';
import ImageFooterSection from '@/shared-components/ImageFooterSection';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const OurProjectImageFooter = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Image_Footer_Section_Our_Project',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return (
    <ImageFooterSection
      bg_Image={data?.bg_image}
      logo_1={data?.logo}
      logo_2={data?.logo1}
    />
  );
};

export default OurProjectImageFooter;
