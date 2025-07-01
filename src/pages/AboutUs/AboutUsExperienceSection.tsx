'use client';
import ExperienceSectionComponent from '@/shared-components/ExperienceSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutUsExperienceSection = () => {
  const experienceData = {
    Heading_en: 'Our Experience',
    Heading_ar: 'خبرتنا',
    data: [
      {
        Title_en: 'Luxury Resorts',
        Title_ar: 'المنتجعات الفاخرة',
        Description_en:
          'Experience world-class luxury resorts that blend nature with comfort, offering unparalleled services.',
        Description_ar:
          'استمتع بالمنتجعات الفاخرة ذات المستوى العالمي التي تمزج بين الطبيعة والراحة، وتوفر خدمات لا مثيل لها.',
        Image: '/HeroHomeImg1.png',
        bg_color: '#EDEDED',
      },
      {
        Title_en: 'Eco-Tourism',
        Title_ar: 'السياحة البيئية',
        Description_en:
          'Connecting people with nature through eco-friendly tourism, promoting sustainability and adventure.',
        Description_ar:
          'ربط الناس بالطبيعة من خلال السياحة الصديقة للبيئة، وتعزيز الاستدامة والمغامرة.',
        Image: '/HeroHomeImg1.png',
        bg_color: '#DFF6DD',
      },
      {
        Title_en: 'Agricultural Experiences',
        Title_ar: 'التجارب الزراعية',
        Description_en:
          'Discover the rich agricultural heritage of Saudi Arabia with hands-on farming and organic produce.',
        Description_ar:
          'اكتشف التراث الزراعي الغني في المملكة العربية السعودية من خلال الزراعة العملية والمنتجات العضوية.',
        Image: '/HeroHomeImg1.png',
        bg_color: '#FFF5D1',
      },
    ],
  };

  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Dan_Journey_Section_About_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.blogs?.map((item: any) => ({
    Title_en: item.subtitle.en,
    Title_ar: item.subtitle.ar,
    Sub_Title_en: item.title.en,
    Sub_Title_ar: item.title.ar,
    Description_en: item.description.en,
    Description_ar: item.description.ar,
    Image: item.image,
    bg_color: item.color,
  }));
  return (
    <ExperienceSectionComponent
      Heading_en={data?.heading?.name?.en}
      Heading_ar={data?.heading?.name?.ar}
      data={transformedData}
    />
  );
};

export default AboutUsExperienceSection;
