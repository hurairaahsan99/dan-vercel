'use client';
import HeroSectionComponent from '@/shared-components/HeroSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const ContactUsHeroSection = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Hero_Section_Contact_Us',
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

export default ContactUsHeroSection;
