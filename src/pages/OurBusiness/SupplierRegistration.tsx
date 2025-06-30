'use client';
import ReusableForm, { FormData } from '@/shared-components/ReusableForm';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const SupplierRegistration = () => {
  const formData: FormData = {
    formTitle: {
      en: 'Supplier Registration',
      ar: 'تسجيل الموردين',
    },
    formFields: [
      {
        id: 'name',
        label: {
          en: 'Legal Entity Name',
          ar: 'اسم الكيان القانوني',
        },
        placeholder: {
          en: 'Enter Legal Entity Name',
          ar: 'أدخل اسم الكيان القانوني',
        },
        type: 'text',
      },
      {
        id: 'activity',
        label: {
          en: 'Activity',
          ar: 'النشاط',
        },
        placeholder: {
          en: 'Enter your Activity',
          ar: 'أدخل نشاطك',
        },
        type: 'text',
      },
      {
        id: 'activityType',
        label: {
          en: 'Type of Business Activity',
          ar: 'نوع النشاط التجاري',
        },
        type: 'radio',
        options: [
          { value: '1', label: { en: 'Factory', ar: 'المصنع' } },
          { value: '2', label: { en: 'Authorized agent', ar: 'وكيل معتمد' } },
          { value: '3', label: { en: 'Merchant', ar: 'تاجر' } },
          {
            value: '4',
            label: { en: 'Consulting Company', ar: 'شركة استشارية' },
          },
          { value: 'others', label: { en: 'Others', ar: 'أخرى' } },
        ],
      },
      {
        id: 'contact',
        label: {
          en: 'Authorized Contact Person',
          ar: 'الشخص المخول للتواصل',
        },
        placeholder: {
          en: 'Enter Authorized Contact Person',
          ar: 'أدخل اسم الشخص المخول للتواصل',
        },
        type: 'text',
      },
      {
        id: 'job',
        label: {
          en: 'Job Title',
          ar: 'المسمى الوظيفي',
        },
        placeholder: {
          en: 'Enter Job Title',
          ar: 'أدخل المسمى الوظيفي',
        },
        type: 'text',
      },
      {
        id: 'email',
        label: {
          en: 'Email',
          ar: 'البريد الإلكتروني',
        },
        placeholder: {
          en: 'Enter your Email',
          ar: 'أدخل بريدك الإلكتروني',
        },
        type: 'email',
      },
      {
        id: 'mobile',
        label: {
          en: 'Mobile Number',
          ar: 'رقم الجوال',
        },
        placeholder: {
          en: 'Enter Mobile Number',
          ar: 'أدخل رقم الجوال',
        },
        type: 'tel',
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Income_Levels_Section_Our_Business',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return (
    <ReusableForm
      formTitle={formData.formTitle}
      formFields={formData.formFields}
      required={[
        'name',
        'activity',
        'activityType',
        'contact',
        'job',
        'email',
        'mobile',
      ]}
    />
  );
};

export default SupplierRegistration;
