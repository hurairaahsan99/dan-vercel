'use client';
import HeroSectionComponent from '@/shared-components/HeroSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutUsHeroSection = () => {
  const Data = {
    bg_Img: '/HeroHomeImg1.png',
    title: {
      en: 'About Dan',
      ar: 'مرحبًا',
    },
    description: {
      en: 'About Dan',
      ar: 'مرحبًا',
    },
  };
  const { data, isLoading, error } = useFetch<any>(
    '/get_Hero_Section_About_Us',
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

export default AboutUsHeroSection;
