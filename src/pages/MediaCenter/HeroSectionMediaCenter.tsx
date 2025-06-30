'use client';
import HeroSectionComponent from '@/shared-components/HeroSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const HeroSectionMediaCenter = () => {
  const Data = {
    bg_Img: '/HeroHomeImg1.png',
    title: {
      en: 'About Dan',
      ar: 'مرحبًا',
    },
    description: {
      en: 'About Dan',
      ar: 'امرحبًامرحبًامرحبataData',
    },
    button_text: {
      en: 'About Dan media',
      ar: 'مرحبًامرحبًامرحبًا',
    },
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Hero_Section_Media_Center',
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
      button_text={data?.data[0]?.button_text}
      is_button={data?.data[0]?.is_button}
    />
  );
};

export default HeroSectionMediaCenter;
