import CardSectionComponent from '@/shared-components/CardSectionComponent'
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const CardSectionHome = () => {
  const data1 = [
    {
      text_en: 'Agritourism',
      text_ar: 'السياحة الريفية',
      logo: '/assets/CardSectionHomeLogo1.png',
      bgImage: '/CardSection1.png',
      description_en:
        'Guests can learn more about traditional and modern farming practices while tasting authentic farm-to-table dishes and high-quality local produce.',
      description_ar:
        'اكتشف جذور المملكة عبر تجارب السياحة الريفية الرائعة، وتعرف على الممارسات الزراعية التقليدية والحديثة.',
    },
    {
      text_en: 'Agritourism',
      text_ar: 'السياحة الريفية',
      logo: '/assets/CardSectionHomeLogo2.png',
      bgImage: '/CardSection2.png',
      description_en:
        'Expertly curated outdoor activities designed to help guests reconnect with nature through exciting adventures across unique destinations.',
      description_ar:
        'نلهمك لإعادة التواصل مع الطبيعة من خلال مغامرات مثيرة في وجهات فريدة تتعرف من خلالها على طبيعة المملكة المتنوعة.',
    },
    {
      text_en: 'Agritourism',
      text_ar: 'السياحة الريفية',
      logo: '/assets/CardSectionHomeLogo3.png',
      bgImage: '/CardSection3.png',
      description_en:
        'Ecotourism escapes provide visitors with the chance to explore Saudi Arabia’s beautiful natural landscapes paired with authentic cuisine.',
      description_ar:
        'استمتع بالحياة اليومية في وجهات استثنائية تحتفي بطبيعة المملكة ومأكولاتها الأصيلة والمميزة.',
    },
  ];
  const { data, isLoading, error } = useFetch<any>(
    '/get_Cards_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    text_en: item.title.en,
    text_ar: item.title.ar,
    logo: item.logo,
    bgImage: item.bg_image,
    description_en: item.sub_title.en,
    description_ar: item.sub_title.ar,
  }));
  return <CardSectionComponent data={transformedData} />;
};

export default CardSectionHome