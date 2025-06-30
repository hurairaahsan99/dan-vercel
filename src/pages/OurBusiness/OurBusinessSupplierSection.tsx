'use client';
import SupplierSectionComponent from '@/shared-components/SupplierSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const OurBusinessSupplierSection = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Suppliers_Section_Our_Business',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return (
    <SupplierSectionComponent
      heading={{
        en: data?.name.en,
        ar: data?.name.ar,
      }}
      data={data?.data}
    />
  );
};

export default OurBusinessSupplierSection;
