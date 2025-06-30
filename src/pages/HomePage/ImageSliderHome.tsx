import ImageSlider from '@/shared-components/ImageSlider'
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const ImageSliderHome = () => {
  const dummyData = {
    heading_en: 'Our Partners',
    heading_ar: 'شركاؤنا',
    images: [
      '/DanLogo.png',
      '/assets/CardSectionHomeLogo1.png',
      '/assets/CardSectionHomeLogo2.png',
      '/assets/CardSectionHomeLogo3.png',
      '/DanLogo.png',
      '/DanLogo.png',
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/get_Our_Partners_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const Data = {
    heading_en: data?.sliders[0].title.en,
    heading_ar: data?.sliders[0].title.ar,
    images: data?.sliders[0].images,
  };
  return (
    <ImageSlider
      heading_en={Data.heading_en}
      heading_ar={Data.heading_ar}
      images={Data.images}
    />
  );
};

export default ImageSliderHome