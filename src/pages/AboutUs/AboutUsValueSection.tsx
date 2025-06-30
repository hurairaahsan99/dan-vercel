'use client';
import ValueSectionComponent from '@/shared-components/ValueSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutUsValueSection = () => {
  const valueData = {
    logo: '/assets/CardSectionHomeLogo2.png',
    heading_en: 'Our Core Values',
    heading_ar: 'قيمنا الأساسية',
    Subheading_en: 'Guiding principles that define us',
    Subheading_ar: 'المبادئ التوجيهية التي تحددنا',
    Icons: [
      {
        icon: '/assets/CardSectionHomeLogo2.png',
        title_en: 'Sustainability',
        title_ar: 'الاستدامة',
        description_en:
          'We are committed to preserving the environment and promoting sustainable tourism.',
        description_ar:
          'نحن ملتزمون بالحفاظ على البيئة وتعزيز السياحة المستدامة.',
      },
      {
        icon: '/assets/CardSectionHomeLogo2.png',
        title_en: 'Innovation',
        title_ar: 'الابتكار',
        description_en:
          'We embrace innovation to create unique and meaningful experiences.',
        description_ar: 'نحن نعتمد على الابتكار لإنشاء تجارب فريدة وذات معنى.',
      },
      {
        icon: '/assets/CardSectionHomeLogo2.png',
        title_en: 'Authenticity',
        title_ar: 'الأصالة',
        description_en:
          'We celebrate the rich heritage and traditions of Saudi Arabia.',
        description_ar: 'نحن نحتفي بالتراث الغني والتقاليد السعودية.',
      },
      {
        icon: '/assets/CardSectionHomeLogo2.png',
        title_en: ' Engagement',
        title_ar: 'مشاركة المجتمع',
        description_en:
          'We foster strong connections with local communities and empower them.',
        description_ar:
          'نحن نعزز الروابط القوية مع المجتمعات المحلية وتمكينها.',
      },
      {
        icon: '/assets/CardSectionHomeLogo1.png',
        title_en: 'Community Engagement',
        title_ar: 'مشاركة المجتمع',
        description_en:
          'We foster strong connections with local communities and empower them.',
        description_ar:
          'نحن نعزز الروابط القوية مع المجتمعات المحلية وتمكينها.',
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_The_Values_Section_About_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    icon: item.image,
    title_en: item.title.en,
    title_ar: item.title.ar,
    description_en: item.description.en,
    description_ar: item.description.ar,
  }));
  return (
    <ValueSectionComponent
      heading_en={data?.name?.en}
      heading_ar={data?.name?.ar}
      logo={data?.bg_image}
      Subheading_ar={data?.sub_name?.ar}
      Subheading_en={data?.sub_name?.en}
      Icons={transformedData}
    />
  );
};

export default AboutUsValueSection;
