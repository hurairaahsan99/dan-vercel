'use client';
import OurMissionComponent from '@/shared-components/OurMissionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutUsOurMission = () => {

  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Features_Section_About_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    logo: item.image,
    heading_en: item.title.en,
    heading_ar: item.title.ar,
    description_en: item.description.en,
    description_ar: item.description.ar,
  }));
  return (
    <OurMissionComponent bg_Img={data?.bg_image} cards={transformedData} />
  );
};

export default AboutUsOurMission;
