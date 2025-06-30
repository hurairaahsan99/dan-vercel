'use client';
import ImageFooterSection from '@/shared-components/ImageFooterSection';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutUsImageFooter = () => {
  const ImageFooter = {
    bg_Image: '/ImageFooter.png',
    logo_1: '/assets/pifCompany.png',
    logo_2: '/DanLogo.png',
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Image_Footer_Section_About_Us',
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

export default AboutUsImageFooter;
