'use client';
import ReusableForm, { FormData } from '@/shared-components/ReusableForm';
import { Box } from '@chakra-ui/react';
import React from 'react';

const CareerForm = () => {
  const formData: FormData = {
    formTitle: {
      en: 'Join Dan Team',
      ar: 'انضم إلى فريق دان',
    },
    formFields: [
      {
        id: 'firstName',
        label: {
          en: 'First Name',
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
          en: 'Last Name',
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
          ar: 'رقم الجوال',
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
        id: 'cv',
        label: {
          en: 'CV',
          ar: 'السيرة الذاتية',
        },
        placeholder: {
          en: 'Upload your CV',
          ar: 'قم برفع سيرتك الذاتية',
        },
        type: 'file',
      },
      {
        id: 'message',
        label: {
          en: 'Message',
          ar: 'رسالة',
        },
        placeholder: {
          en: 'Enter your message',
          ar: 'أدخل رسالتك',
        },
        type: 'textarea',
      },
    ],
  };

  return (
    <Box mt="2rem">
      <ReusableForm
        formFields={formData.formFields}
        formTitle={formData.formTitle}
        bgColor="#f7f1eb"
        required={['firstName', 'lastName', 'email', 'mobile', 'city', 'cv']}
        inputColor
      />
    </Box>
  );
};
export default CareerForm;
