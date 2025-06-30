'use client';
import ContactUsMapSection from '@/shared-components/ContactUsMapSection';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const ContactUsMap = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Map_Section_Contact_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return (
    <ContactUsMapSection lat={data?.lat} lng={data?.lng} data={data?.data} />
  );
};

export default ContactUsMap;
