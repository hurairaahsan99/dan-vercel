'use client';
import FaQComponent from '@/shared-components/FaQComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const ContactUsFAQ = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_FAQ_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return <FaQComponent data={data} />;
};

export default ContactUsFAQ;
