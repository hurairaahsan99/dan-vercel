'use client';
import HeroBlogsDetails from '@/shared-components/HeroBlogsDetails';
import HeroSectionComponent from '@/shared-components/HeroSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import { useSearchParams } from 'next/navigation';
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
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Media_Center_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.blogs.filter(
    (item: any) => item.id.toString() === id,
  );
  return (
    <HeroBlogsDetails
      bg_Img={transformedData[0]?.image}
      description={transformedData[0]?.description}
      title={transformedData[0]?.published_date}
      button_text={transformedData[0]?.category}
      is_button={true}
      back
    />
  );
};

export default HeroSectionMediaCenter;
