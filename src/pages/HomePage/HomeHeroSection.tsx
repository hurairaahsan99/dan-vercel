'use client';
import HomePageHeroComponent from '@/shared-components/HomePageHeroComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import { Stack, Skeleton, Box } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

const HomeHeroSection = () => {
  const HomePageHeroSectionData = {
    Sliders: [
      {
        id: 1,
        BgVideo: {
          en: '/HeroVideo1.mp4',
          ar: '/BgVideo2.mp4',
        },
        BgImage: '/HeroHomeImg1.png',
        CenterLogo: '/HeroHomeLogo1.png',
        IsButton: false,
        ButtonText: {
          en: '',
          ar: '',
        },
        Title: {
          en: '',
          ar: '',
        },
        SubTitle: {
          en: '',
          ar: '',
        },
        Logo: '',
        BigLogo: true,
      },
      {
        id: 2,
        BgVideo: {
          en: '/HeroVideo1.mp4',
          ar: '/HeroVideo1.mp4',
        },
        BgImage: '',
        CenterLogo: '',
        IsButton: false,
        ButtonText: {
          en: '',
          ar: '',
        },
        Title: {
          ar: 'قيادة السياحة البيئية',
          en: 'button button',
        },
        SubTitle: {
          en: 'heading 1',
          ar: ' للمستقبل في المملكة',
        },
        Logo: '/LogoArray.png',
        BigLogo: false,
      },
      {
        id: 3,
        BgVideo: {
          en: '/BgVideo2.mp4',
          ar: '/BgVideo2.mp4',
        },
        BgImage: '',
        CenterLogo: '/HeroTuajaLogo.png',
        IsButton: true,
        ButtonText: {
          en: ' button text',
          ar: 'إكـتــشــــف أكثـــــر',
        },
        Title: {
          en: '',
          ar: '',
        },
        SubTitle: {
          en: '',
          ar: '',
        },
        Logos: '',
        BigLogo: false,
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/get_Hero_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <Box style={{ marginTop: '40vh', visibility: 'hidden' }} />;
  }
  if (error) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    id: item.id,
    BgVideo: {
      en: item.video_url.en,
      ar: item.video_url.ar,
    },
    BgImage: item.bg_image,
    CenterLogo: item.logo,
    IsButton: item.is_button,
    ButtonText: {
      en: item.button_text.en,
      ar: item.button_text.ar,
    },
    Title: {
      en: item.title.en,
      ar: item.title.ar,
    },
    SubTitle: {
      en: item.sub_title.en,
      ar: item.sub_title.ar,
    },
    isFullView: item.is_full_view,
  }));
  return <HomePageHeroComponent Sliders={transformedData} />;
};

export default HomeHeroSection;
