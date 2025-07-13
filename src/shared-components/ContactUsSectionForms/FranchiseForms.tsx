'use client';
import { Box } from '@chakra-ui/react';
import React from 'react';
import ReusableForm, { FormData } from '@/shared-components/ReusableForm';

const FranchiseForm = () => {
  const formData: FormData = {
    formTitle: {
      en: 'Franchise Partnership',
      ar: 'الإمتياز التجاري'
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
          ar: 'الإسم الأخير',
        },
        type: 'text',
      },
      {
        id: 'lastName',
        label: {
          en: 'Last Name',
          ar:  'الإسم الأخير',
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
        id: 'farmSize',
        label: {
          en: 'Farm Size (Square Meters)',
          ar: 'حجم المزرعة (بالمتر المربع)',
        },
        placeholder: {
          en: 'Enter farm size in square meters',
          ar: 'أدخل حجم المزرعة بالمتر المربع',
        },
        type: 'number',
      },
      {
        id: 'farmDescription',
        label: {
          en: 'Farm Description',
          ar: 'وصف المزرعة',
        },
        placeholder: {
          en: 'Enter farm description',
          ar: 'أدخل وصف المزرعة',
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
        required={[
          'firstName',
          'lastName',
          'email',
          'mobile',
          'city',
          'farmSize',
          'farmDescription',
        ]}
        inputColor
          TitleSize={{ base: '24px', lg: '42px' }}
      />
    </Box>
  );
};
export default FranchiseForm;
