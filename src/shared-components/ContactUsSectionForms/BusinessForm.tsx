'use client';
import ReusableForm, { FormData } from '@/shared-components/ReusableForm';
import { Box } from '@chakra-ui/react';
import React from 'react';

const BusinessForm = () => {
  const formData: FormData = {
    formTitle: {
      en: 'Business Partner',
      ar: 'شريك الأعمال',
    },
    formFields: [
      {
        id: 'legalEntityName',
        label: {
          en: 'Legal Entity Name',
          ar: 'الاسم القانوني للكيان',
        },
        placeholder: {
          en: 'Enter legal entity name',
          ar: 'أدخل الاسم القانوني للكيان',
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
          en: 'Enter activity',
          ar: 'أدخل النشاط',
        },
        type: 'text',
      },
      {
        id: 'location',
        label: {
          en: 'Location',
          ar: 'الموقع',
        },
        placeholder: {
          en: 'Enter location',
          ar: 'أدخل الموقع',
        },
        type: 'text',
      },
      {
        id: 'website',
        label: {
          en: 'Website (Optional)',
          ar: 'الموقع الإلكتروني (اختياري)',
        },
        placeholder: {
          en: 'Enter website URL',
          ar: 'أدخل رابط الموقع الإلكتروني',
        },
        type: 'text',
      },
      {
        id: 'authorizedContactPerson',
        label: {
          en: 'Authorized Contact Person',
          ar: 'الشخص المخول للاتصال',
        },
        placeholder: {
          en: 'Enter contact person’s name',
          ar: 'أدخل اسم الشخص المخول للاتصال',
        },
        type: 'text',
      },
      {
        id: 'jobTitle',
        label: {
          en: 'Job Title',
          ar: 'المسمى الوظيفي',
        },
        placeholder: {
          en: 'Enter job title',
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
          en: 'Enter email',
          ar: 'أدخل البريد الإلكتروني',
        },
        type: 'email',
      },
      {
        id: 'phone',
        label: {
          en: 'Phone',
          ar: 'رقم الهاتف',
        },
        placeholder: {
          en: 'Enter phone number',
          ar: 'أدخل رقم الهاتف',
        },
        type: 'tel',
      },
    ],
  };

  return (
    <Box mt="2rem">
      <ReusableForm
        formFields={formData.formFields}
        formTitle={formData.formTitle}
        bgColor="#f7f1eb"
        required={[
          'legalEntityName',
          'activity',
          'location',
          'authorizedContactPerson',
          'jobTitle',
          'email',
          'phone',
        ]}
        inputColor
      />
    </Box>
  );
};

export default BusinessForm;
