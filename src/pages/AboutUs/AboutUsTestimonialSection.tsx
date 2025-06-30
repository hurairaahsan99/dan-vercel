'use client';
import React from 'react';
import TestimonialSectionComponent from '@/shared-components/TestimonialSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';

const AboutUsTestimonialSection = () => {
  const TestimonialData = {
    image_url: '/person.png',
    name_en: 'John Doe',
    name_ar: 'جون دو',
    designation_en: 'CEO, Green Ventures',
    designation_ar: 'الرئيس التنفيذي، المشاريع الخضراء',
    description_en:
      'Dan has truly revolutionized eco-tourism in Saudi Arabia. Their commitment to sustainability and innovation is remarkable.',
    description_ar:
      'لقد أحدثت دان ثورة حقيقية في السياحة البيئية في المملكة العربية السعودية. التزامهم بالاستدامة والابتكار مذهل.',
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Testimonial_Section_About_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return (
    <TestimonialSectionComponent
      image_url={data?.data[0]?.bg_image}
      name_en={data?.data[0]?.name?.en}
      name_ar={data?.data[0]?.name?.ar}
      designation_en={data?.data[0]?.sub_name?.en}
      designation_ar={data?.data[0]?.sub_name?.ar}
      description_en={data?.data[0]?.description?.en}
      description_ar={data?.data[0]?.description?.ar}
    />
  );
};

export default AboutUsTestimonialSection;
