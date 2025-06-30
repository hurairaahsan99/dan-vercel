'use client';
import ImageGalleryComponent from '@/shared-components/ImageGalleryComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const ImageGalleryMediaCenter = () => {
  const dummyImageGalleryData = {
    data: [
      {
        bg_image: '/HeroHomeImg1.png',
        text: {
          en: 'Discover the beauty of nature in our serene landscapes.',
          ar: 'اكتشف جمال الطبيعة في مناظرنا الخلابة الهادئة.',
        },
      },
      {
        bg_image: '/HeroHomeImg1.png',
        text: {
          en: 'Experience the vibrant culture and history of the region.',
          ar: 'اختبر الثقافة النابضة بالحياة وتاريخ المنطقة.',
        },
      },
      {
        bg_image: '/CardSection1.png',
        text: {
          en: 'A journey through the modern and the traditional.',
          ar: 'رحلة بين الحداثة والتقليد.',
        },
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Images_Gallery_Section_Media_Center',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return <ImageGalleryComponent data={data?.data} heading={data?.name} />;
};

export default ImageGalleryMediaCenter;
