'use client';
import IncomeSectionComponent from '@/shared-components/IncomeSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const IncomeSectionOurBusiness = () => {
  const incomeSectionData = {
    heading: {
      en: 'Our Income Streams',
      ar: 'مصادر الدخل',
    },
    bg_image: '/HeroHomeImg1.png',
    data: [
      {
        title: {
          en: 'Salaries',
          ar: 'الرواتب',
        },
        logo: '/DanLogo.png',
      },
      {
        title: {
          en: 'Investments',
          ar: 'الاستثمارات',
        },
        logo: '/DanLogo.png',
      },
      {
        title: {
          en: 'Freelance Work',
          ar: 'العمل الحر',
        },
        logo: '/DanLogo.png',
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Income_Levels_Section_Our_Business',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    logo: item.image,
    title: {
      en: item.title.en,
      ar: item.title.ar,
    },
  }));
  return (
    <IncomeSectionComponent
      heading={{
        en: data?.name?.en,
        ar: data?.name?.ar,
      }}
      bg_image={data?.bg_image}
      data={transformedData}
    />
  );
};

export default IncomeSectionOurBusiness;
