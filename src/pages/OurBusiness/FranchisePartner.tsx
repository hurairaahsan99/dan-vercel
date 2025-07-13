'use client';
import ReusableForm, { FormData } from '@/shared-components/ReusableForm';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const FranchisePartner = () => {
  const formData: FormData = {
    formTitle: {
      en: 'Franchise Partner',
      ar: 'شريك الامتياز التجاري',
    },
    formFields: [
      {
        id: 'firstName',
        label: {
          en: 'First name',
          ar: 'الاسم الأول',
        },
        placeholder: {
          en: 'Enter your first name',
          ar: 'أدخل اسمك الأول',
        },
        type: 'text',
      },
      {
        id: 'lastName',
        label: {
          en: 'Last name',
          ar: 'اسم العائلة',
        },
        placeholder: {
          en: 'Enter your last name',
          ar: 'أدخل اسم عائلتك',
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
          en: 'Enter your email',
          ar: 'أدخل بريدك الإلكتروني',
        },
        type: 'email',
      },
      {
        id: 'mobile',
        label: {
          en: 'Mobile Number',
          ar: 'رقم الهاتف',
        },
        placeholder: {
          en: 'Enter your mobile number',
          ar: 'أدخل رقم جوالك',
        },
        type: 'tel',
      },
      {
        id: 'city',
        label: {
          en: 'City',
          ar: 'المدينة',
        },
        placeholder: {
          en: 'Enter your city',
          ar: 'أدخل مدينتك',
        },
        type: 'text',
      },
      {
        id: 'farm',
        label: {
          en: 'Farm Size (Square Meters)',
          ar: 'حجم المزرعة (بالمتر المربع)',
        },
        placeholder: {
          en: 'Enter farm size in square meters',
          ar: 'أدخل حجم المزرعة بالمتر المربع',
        },
        type: 'text',
      },
      {
        id: 'message',
        label: {
          en: 'Farm Description',
          ar: 'وصف المزرعة',
        },
        placeholder: {
          en: 'Enter description here',
          ar: 'أدخل الوصف هنا',
        },
        type: 'textarea',
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
        'firstName',
        'lastName',
        'email',
        'mobile',
        'city',
        'farm',
        'message',
      ]}
    />
  );
};

export default FranchisePartner;
