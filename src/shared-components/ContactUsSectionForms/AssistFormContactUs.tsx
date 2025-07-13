'use client';
import React, { useMemo } from 'react';
import { Box, useBreakpointValue } from '@chakra-ui/react';
import ReusableForm, {
  FormData,
  FormField,
} from '@/shared-components/ReusableForm';

const AssistFormContactUs: React.FC = () => {
  const baseFields: FormField[] = [
    {
      id: 'last',
      label: { en: 'Subject', ar: 'الموضوع' },
      placeholder: { en: 'Subject', ar: 'اقتراح' },
      type: 'dropdown',
      options: [
        { value: 'ex 1', label: { en: 'Support', ar: 'الدعم' } },
        { value: 'ex 2', label: { en: 'Sales', ar: 'المبيعات' } },
        { value: 'other', label: { en: 'Other', ar: 'أخرى' } },
      ],
    },
    {
      id: 'first',
      label: { en: 'Full name', ar: 'الاسم الكامل' },
      placeholder: { en: 'Enter your full name', ar: 'أدخل اسمك الكامل' },
      type: 'text',
    },
    {
      id: 'email',
      label: { en: 'Email', ar: 'البريد الإلكتروني' },
      placeholder: { en: 'Enter your email', ar: 'أدخل بريدك الإلكتروني' },
      type: 'email',
    },
    {
      id: 'mobile',
      label: { en: 'Mobile Number', ar: 'رقم الجوال' },
      placeholder: { en: 'Enter your mobile number', ar: 'أدخل رقم جوالك' },
      type: 'tel',
    },
    {
      id: 'message',
      label: { en: 'Message', ar: 'وصف المزرعة' },
      placeholder: { en: 'Enter message here', ar: 'أضف نص الرسالة' },
      type: 'textarea',
    },
  ];

  // detect mobile vs desktop
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // reorder array on mobile: full name first, then subject, then the rest
  const formFields = useMemo(() => {
    if (isMobile) {
      const firstField = baseFields.find((f) => f.id === 'first');
      const lastField = baseFields.find((f) => f.id === 'last');
      const others = baseFields.filter(
        (f) => f.id !== 'first' && f.id !== 'last',
      );
      return [firstField, lastField, ...others].filter(Boolean) as FormField[];
    }
    return baseFields;
  }, [isMobile]);

  const formData: FormData = {
    formFields,
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
