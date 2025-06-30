'use client';
import AssetsSectionComponent from '@/shared-components/AssetsSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AssetsSectionOurBusiness = () => {
  const assetsData = {
    data: [
      {
        bg_img: '/DanLogo.png',
        logo: '/LogoArray.png',
        title: {
          en: 'Asset One',
          ar: 'الأصل الأول',
        },
        description: {
          en: 'Our initial goal is to establish upscale company-owned resorts in rural tourism, eco-tourism, and recreational tourism, in partnership with leading global hospitality groups and restaurants eager to expand their presence in Saudi Arabia.',
          ar: 'هذا هو الوصف للأصل الأول باللغة العربية. يقدم نظرة عامة على الأصل.',
        },
      },
      {
        bg_img: '/DanLogo.png',
        logo: '/LogoArray.png',
        title: {
          en: 'Asset Two',
          ar: 'الأصل الثاني',
        },
        description: {
          en: 'This is the description for asset two in English. It contains more detailed information.',
          ar: 'هذا هو الوصف للأصل الثاني باللغة العربية. يحتوي على معلومات أكثر تفصيلاً.',
        },
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Assets_Section_Our_Business',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    bg_img: item.bg_image,
    logo: item.logo,
    title: {
      en: item.title.en,
      ar: item.title.ar,
    },
    description: {
      en: item.sub_title.en,
      ar: item.sub_title.ar,
    },
  }));

  return <AssetsSectionComponent data={transformedData} />;
};

export default AssetsSectionOurBusiness;
