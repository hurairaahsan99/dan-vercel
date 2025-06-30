'use client';
import AboutSectionComponent from '@/shared-components/AboutSectionComponent';
import DanMeansRevamped from '@/shared-components/DanMeansRevamped';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutUsObjectiveSection = ({ inView }: { inView: boolean }) => {

  const { data, isLoading, error } = useFetch<any>(
    '/fetch_What_Does_Dan_Mean_Section_About_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }

  const ResData = {
    description: data?.data[0]?.sub_title,
    BgImage: data?.data[0]?.bg_image,
    Logo: [
      '/assets/CardSectionHomeLogo4.png',
      '/assets/CardSectionHomeLogo2.png',
      '/assets/CardSectionHomeLogo3.png',
      '/assets/CardSectionHomeLogo1.png',
    ],
  };

  return (
    <DanMeansRevamped
      description={{
        en: ResData?.description?.en,
        ar: ResData?.description?.ar,
      }}
      BgImage={ResData?.BgImage}
      Logo={ResData?.Logo}
    />
  );
};

export default AboutUsObjectiveSection;
