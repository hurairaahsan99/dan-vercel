'use client';
import ReusableForm, { FormData } from '@/shared-components/ReusableForm';
import useFetch from '@/Utils/Fetch/useFetch';
import { Box } from '@chakra-ui/react';
import React from 'react';

const AssistFormContactUs = () => {
  const formData: FormData = {
    formFields: [
      {
        id: 'last',
        label: {
          en: 'Subject',
          ar: 'اسم العائلة',
        },
        placeholder: {
          en: 'Subject',
          ar: 'أدخل اسم عائلتك',
        },
        type: 'dropdown',
    options: [
      { value: 'ex 1', label: { en: 'Support', ar: 'الدعم' } },
      { value: 'ex 2',   label: { en: 'Sales',   ar: 'المبيعات' } },
      { value: 'other',   label: { en: 'Other',   ar: 'أخرى' } },
    ],
      },
      {
        id: 'first',
        label: {
          en: 'Full name',
          ar: 'الاسم الأول',
        },
        placeholder: {
          en: 'Enter your full name',
          ar: 'أدخل اسمك الأول',
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
        type: 'email', // Recognized as "email"
      },
      {
        id: 'mobile',
        label: {
          en: 'Mobile Number',
          ar: 'رقم الجوال',
        },
        placeholder: {
          en: 'Enter your mobile number',
          ar: 'أدخل رقم جوالك',
        },
        type: 'tel', // Recognized as "number"
      },
      {
        id: 'message',
        label: {
          en: 'Message',
          ar: 'وصف المزرعة',
        },
        placeholder: {
          en: 'Enter message here',
          ar: 'أضف نص الرسالة',
        },
        type: 'textarea',
      },
    ],
  };
  return (
    <Box mt="2rem">
      <ReusableForm
        formFields={formData.formFields}
        formTitle={{
          en: 'I would like to inquire about',
          ar: 'أرغب في التواصل حول',
        }}
        TitleSize={{ base: '20px', lg: '30px' }}
        TitleCenter="center"
        required={['last', 'first', 'email', 'mobile']}
        inputColor
      />
    </Box>
  );
};

export default AssistFormContactUs;
