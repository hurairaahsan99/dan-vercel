import { Box } from '@chakra-ui/react';
import React from 'react';
import ReusableForm, { FormData } from '../ReusableForm';

const MediaCenterForm = () => {
  const formData: FormData = {
    formTitle: {
      en: 'Media Registration Form',
      ar: 'نموذج تسجيل الإعلاميين',
    },
    formFields: [
      {
        id: 'fullName',
        label: {
          en: 'Full Name',
          ar: 'الاسم الكامل',
        },
        placeholder: {
          en: 'Enter your full name',
          ar: 'أدخل اسمك الكامل',
        },
        type: 'text',
      },
      {
        id: 'companyName',
        label: {
          en: 'Company Name',
          ar: 'اسم الشركة',
        },
        placeholder: {
          en: 'Enter your company name',
          ar: 'أدخل اسم شركتك',
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
        id: 'website',
        label: {
          en: 'Website',
          ar: 'الموقع الإلكتروني',
        },
        placeholder: {
          en: 'Enter your website URL',
          ar: 'أدخل رابط موقعك الإلكتروني',
        },
        type: 'text',
      },
      {
        id: 'message',
        label: {
          en: 'Message',
          ar: 'رسالتك',
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
        bgColor="white"
        required={[
          'fullName',
          'companyName',
          'email',
          'mobile',
          'city',
          'website',
        ]}
      />
    </Box>
  );
};
export default MediaCenterForm;
