'use client';
import DiscoverSectionComponent from '@/shared-components/DiscoverSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import { Box } from '@chakra-ui/react';
import React from 'react';

const OurProjectDiscoverSection = () => {
  const discoverSectionData = {
    data: [
      {
        bg_img: '/ImageFooter.png',
        logo: '/assets/CardSectionHomeLogo1.png',
        description: {
          en: `The luxurious "Tawaja" resorts offer unforgettable experiences that take you on a journey to explore breathtaking landscapes, rich culture, and authentic Saudi hospitality. Inspired by our vision, "Tawaja" seamlessly blends sustainability with the Kingdom's ancient traditions, natural beauty, and rich cultural heritage.`,
          ar: 'استمتع بجمال الصحراء مع الجولات الإرشادية وركوب الجمال وغروب الشمس الخلاب.',
        },
        button_text: {
          en: 'Discover More',
          ar: 'اكتشف المزيد',
        },
        is_button: true,
      },
      {
        bg_img: '/CardSection1.png',
        logo: '',
        title: {
          en: 'Cultural Heritage',
          ar: 'التراث الثقافي',
        },
        sub_title: {
          en: 'Step into history',
          ar: 'ادخل إلى التاريخ',
        },
        button_text: {
          en: 'Explore',
          ar: 'استكشف',
        },
        is_button: true,
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Discover_More_Section_Our_Project',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    id: item.id,
    bg_img: item.bg_image,
    logo: item.logo,
    title: {
      en: item.title.en,
      ar: item.title.ar,
    },
    sub_title: {
      en: item.sub_title.en,
      ar: item.sub_title.ar,
    },
    description: {
      en: item.video_url.en,
      ar: item.video_url.ar,
    },
    button_text: {
      en: item.button_text.en,
      ar: item.button_text.ar,
    },
    is_button: item.is_button,
    status: item.status,
  }));
  return <Box
        mx={{base:'1rem',lg:'0rem'}}
        width={{ base: 'calc(100% - 2rem)', lg: 'calc(100%)' }}>
    <DiscoverSectionComponent data={transformedData} />
    </Box>
};

export default OurProjectDiscoverSection;
