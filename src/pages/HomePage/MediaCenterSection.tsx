'use client';
import MediaCardComponent from '@/shared-components/MediaCardComponent';
import { generateDarkColorsArray } from '@/Utils/ColorGenerator';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const MediaCenterSection = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Media_Center_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const darkColors = [
    '#07628E',
    '#EC4B46',
     '#74C07C',
    '#552A0E',

  ];
  const uniqueCategories = [
    ...new Set(data?.blogs?.map((item: any) => item.category.en)),
  ];
  const colorMap: { [key: string]: string } = {};
  uniqueCategories.forEach((category: any, index) => {
    colorMap[category] = darkColors[index % darkColors.length];
  });
  const transformedData = data?.blogs?.map((item: any) => ({
    id: item.id,
    published_date: {
      en: item.published_date.en,
      ar: item.published_date.ar,
    },
    category: {
      en: item.category.en,
      ar: item.category.ar,
    },
    description: {
      en: item.description.en,
      ar: item.description.ar,
    },
    image: item.image,
    isbutton: item.isbutton,
    bgColor: colorMap[item.category.en],
  }));
  return (
    <MediaCardComponent
      heading_en={data?.heading?.name?.en}
      heading_ar={data?.heading?.name?.ar}
      data={transformedData}
    />
  );
};

export default MediaCenterSection;
