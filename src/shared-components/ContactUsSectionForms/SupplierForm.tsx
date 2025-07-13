'use client';
import ReusableForm, { FormData } from '@/shared-components/ReusableForm';
import { Box } from '@chakra-ui/react';
import React from 'react';

const SupplierForm = () => {
  const formData: FormData = {
    formTitle: {
      en: 'Supplier Registration',
      ar: 'تسجيل المورد',
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
        id: 'businessActivityType',
        label: {
          en: 'Type of Business Activity',
          ar: 'نوع النشاط التجاري',
        },
        type: 'radio',
        options: [
          {
            value: 'manufacturing',
            label: {
              en: 'Manufacturing',
              ar: 'التصنيع',
            },
          },
          {
            value: 'trading',
            label: {
              en: 'Trading',
              ar: 'التجارة',
            },
          },
          {
            value: 'services',
            label: {
              en: 'Services',
              ar: 'الخدمات',
            },
          },
        ],
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
        bgColor="#f7f1eb"
        formFields={formData.formFields}
        formTitle={formData.formTitle}
        required={[
          'legalEntityName',
          'activity',
          'businessActivityType',
          'authorizedContactPerson',
          'jobTitle',
          'email',
          'phone',
        ]}
        inputColor
          TitleSize={{ base: '24px', lg: '42px' }}
      />
    </Box>
  );
};
export default SupplierForm;
