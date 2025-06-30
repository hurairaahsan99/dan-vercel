'use client';
import HeroSectionComponent from '@/shared-components/HeroSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const OurProjectHeroSection = () => {
  const Data = {
    bg_Img: '/HeroHomeImg1.png',
    title: {
      en: 'Our Projects - Vision of the Future',
      ar: 'مرحبًا',
    },
    description: {
      en: 'As we envision the future of tourism in the Kingdom, our ambitious goals reflect our passion and faith in our capabilities',
      ar: 'مرحبًا',
    },
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Hero_Section_Our_Project',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return (
    <HeroSectionComponent
      bg_Img={data?.data[0]?.bg_image}
      title={data?.data[0]?.title}
      description={data?.data[0]?.sub_title}
    />
  );
};

export default OurProjectHeroSection;
