'use client';
import AboutSectionComponent from '@/shared-components/AboutSectionComponent';
import ContactUsDisplayForm from '@/shared-components/ContactUsDisplayForm';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const ContactUsSection = ({ inView }: { inView: boolean }) => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Contact_Us_Section_Contact_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const bg_color = ['#F04F4C', '#089F86', '#F77C01', '#07628E'];
  const transformedData = data?.data?.map((item: any, index: number) => ({
    logo: item.image,
    title: {
      en: item.title.en,
      ar: item.title.ar,
    },
    bg_color: bg_color[index % bg_color.length],
  }));
  const ResData = {
    Logo: data?.logo,
    Description_en: data?.name.en,
    Description_ar: data?.name.ar,
    BgImage: data?.bg_image,
    cards: transformedData,
  };
  return (
    <>
      <AboutSectionComponent data={ResData} inView={inView} />
      <ContactUsDisplayForm data={transformedData} />
    </>
  );
};

export default ContactUsSection;
