'use client';
import FranchiseOpportunityComponent from '@/shared-components/FranchiseOpportunityComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const FranchiseOpportunity = () => {
  const franchiseOpportunityData = {
    heading: {
      en: 'Franchise Opportunity',
      ar: 'فرصة الامتياز',
    },
    description: {
      en: 'Discover how you can join our growing franchise network and start your own successful business.',
      ar: 'اكتشف كيف يمكنك الانضمام إلى شبكة الامتياز المتنامية لدينا وبدء عمل تجاري ناجح.',
    },
    last_description: {
      en: 'Join us today and take the first step towards a rewarding business journey.',
      ar: 'انضم إلينا اليوم واتخذ الخطوة الأولى نحو رحلة عمل مجزية.',
    },
    cards: [
      {
        logo: '/DanLogo.png',
        title: {
          en: 'Guidelines for Construction and Design Standards',
          ar: 'امتياز الوجبات السريعة',
        },
      },
      {
        logo: '/DanLogo.png',
        title: {
          en: 'Coffee Shop Franchise',
          ar: 'امتياز المقاهي',
        },
      },
      {
        logo: '/DanLogo.png',
        title: {
          en: 'Retail Franchise',
          ar: 'امتياز التجزئة',
        },
      },
      {
        logo: '/DanLogo.png',
        title: {
          en: 'Retail Franchise',
          ar: 'امتياز التجزئة',
        },
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Franchise_Oppurtunities_Section_Our_Business',
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
    <FranchiseOpportunityComponent
      heading={data?.name}
      description={data?.description}
      last_description={data?.sub_name}
      cards={transformedData}
    />
  );
};

export default FranchiseOpportunity;
