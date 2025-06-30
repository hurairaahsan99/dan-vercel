'use client';
import { useLanguage } from '@/context/LanguageProvider';
import {
  Box,
  Grid,
  FormControl,
  Input,
  Textarea,
  Button,
  Text,
  Radio,
  HStack,
  RadioGroup,
  Select,
  Flex,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { ChevronDownIcon } from '@chakra-ui/icons';

export interface FormField {
  id: string;
  label: {
    en: string;
    ar: string;
  };
  placeholder?: {
    en: string;
    ar: string;
  };
  type: 'text' | 'email' | 'tel' | 'number' | 'textarea' | 'radio' | 'file' | 'dropdown';
  options?: Array<{
    value: string;
    label: {
      en: string;
      ar: string;
    };
  }>;
}

export interface FormData {
  formTitle?: {
    en: string;
    ar: string;
  };
  formFields: FormField[];
  bgColor?: string;
  required?: string[];
  TitleSize?: any;
  TitleCenter?: any;
  inputColor?: boolean;
}

const ReusableForm: React.FC<FormData> = ({
  formTitle,
  formFields,
  bgColor,
  required,
  TitleSize,
  TitleCenter,
  inputColor,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const initialValues = formFields.reduce((acc, field) => {
    acc[field.id] = '';
    return acc;
  }, {} as Record<string, string>);

  const [formValues, setFormValues] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleChange = (id: string, value: string) => {
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ formValues, formTitle }),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setFormValues(initialValues);
      } else {
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      zIndex={0}
      h="auto"
      mx={{ base: '0rem', lg: '2rem' }}
      width={{ base: '100%', lg: 'calc(100% - 4rem)' }}
      bgColor={bgColor ?? '#f7f1eb'}
      display="flex"
      justifyContent="center"
      paddingBottom="2rem"
      dir={isRTL ? 'rtl' : 'ltr'}
      border={{
        base: 'none',
        lg: `1.5px solid ${bgColor ?? '#552A0E4D'}`,
      }}
      borderRadius="2px"
    >
      <Box
        h="100%"
        mx={{ base: '1rem', lg: '2rem' }}
        width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
        textAlign={isRTL ? 'right' : 'left'}
      >
        {formTitle && (
          <Text
            paddingTop="3rem"
            color="#552A0E"
            fontSize={TitleSize ?? { base: '24px', lg: '24px' }}
            fontWeight={700}
            textAlign={{
              base: 'center',
              lg: TitleCenter ?? (isRTL ? 'right' : 'left'),
            }}
          >
            {isRTL ? formTitle.ar : formTitle.en}
          </Text>
        )}
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
        >
          <Grid
            templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
            gap={4}
            mt={{ base: 0, lg: '2rem' }}
          >
            {formFields.map((field) => {
              const isFullWidth =
                field.type === 'textarea' || field.type === 'radio';

              return (
                <FormControl
                  id={field.id}
                  isRequired={required?.includes(field.id)}
                  key={field.id}
                  gridColumn={isFullWidth ? '1 / -1' : 'auto'}
                >
                  <Text
                    fontSize={{ base: '1rem', lg: '1.1rem' }}
                    fontWeight={500}
                    color="#552a0e"
                     py="0.5rem"
                  >
                    {isRTL ? field.label.ar : field.label.en}
                    {required?.includes(field.id) && (
                      <Text as="span" color="red" ml="0.2rem">
                        *
                      </Text>
                    )}
                  </Text>
                  {field.type === 'textarea' ? (
                    <Textarea
                      value={formValues[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder={
                        isRTL ? field.placeholder?.ar : field.placeholder?.en
                      }
                      w="100%"
                      p="25px"
                      mt={{ base: '1rem', lg: 0 }}
                      rows={5}
                      resize="none"
                      _focus={{
                        boxShadow: 'none',
                        border: '2px solid #552A0E',
                      }}
                      _hover={{
                        boxShadow: 'none',
                        border: '2px solid #552A0E4D',
                      }}
                      border="1px solid #552A0E4D"
                      borderRadius={6}
                      bg={inputColor ? '#f7f1eb' : '#faf7f3'}
                      color="#552A0E"
                      _placeholder={{ color: '#C0C0C0' }}
                    />
                  ) : field.type === 'radio' ? (
                    <RadioGroup
                      value={formValues[field.id]}
                      onChange={(v) => handleChange(field.id, v)}
                    >
                      <HStack
                        wrap={{ base: 'wrap', lg: 'nowrap' }}
                        gap={6}
                        w="100%"
                      >
                        {field.options?.map((opt) => (
                          <Radio
                            key={opt.value}
                            value={opt.value}
                            _checked={{
                              bg: '#59260A',
                              borderColor: '#59260A',
                              color: 'white',
                            }}
                          >
                            {isRTL ? opt.label.ar : opt.label.en}
                          </Radio>
                        ))}
                        {(() => {
                          const otherOpt = field.options?.find((o) => o.value.toLowerCase().includes('others'));
                          return formValues[field.id] === otherOpt?.value ? (
                            <Input
                              type="text"
                              w={{ base: '100%', lg: 'auto' }}
                              placeholder={isRTL ? 'أدخل النص' : 'Other...'}
                              value={formValues[`${field.id}_other`] || ''}
                              onChange={(e) => handleChange(`${field.id}_other`, e.target.value)}
                              _focus={{ boxShadow: 'none', border: '2px solid #552A0E4D' }}
                              _hover={{ boxShadow: 'none', border: '2px solid #552A0E4D' }}
                              border="1px solid #552A0E4D"
                              borderRadius={6}
                              bg={inputColor ? '#f7f1eb' : '#faf7f3'}
                              color="#552A0E"
                               py="1.5rem"
                            />
                          ) : null;
                        })()}
                      </HStack>
                    </RadioGroup>
                  ) : field.type === 'dropdown' ? (
                    <Select
                      value={formValues[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder={
                        isRTL ? field.placeholder?.ar : field.placeholder?.en
                      }
                      w="100%"
                      mt={{ base: '1rem', lg: 0 }}
                      _focus={{
                        boxShadow: 'none',
                        border: '2px solid #552A0E4D',
                      }}
                      _hover={{
                        boxShadow: 'none',
                        border: '2px solid #552A0E4D',
                      }}
                      border="1px solid #552A0E4D"
                      borderRadius={6}
                      bg={inputColor ? '#f7f1eb' : '#faf7f3'}
                      color="#552A0E"
                      _placeholder={{ color: '#C0C0C0' }}
                      {...(isRTL ? { pr: '2.5rem', pl: '0.5rem' } : {})}
                      icon={isRTL ? <ChevronDownIcon /> : undefined}
                    >
                      {field.options?.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {isRTL ? opt.label.ar : opt.label.en}
                        </option>
                      ))}
                    </Select>
                  ) : field.type === 'tel' ? (
                    <Flex w="100%" mt={{ base: '1rem', lg: 0 }} gap={2} >
                      <Select
                        w={{ base: '35%', lg: '25%' }}
                        value={'+966'}
                        isDisabled
                        _focus={{ boxShadow: 'none', border: '2px solid #552A0E4D' }}
                        _hover={{ boxShadow: 'none', border: '2px solid #552A0E4D' }}
                        border="1px solid #552A0E4D"
                        borderRadius={6}
                        bg={inputColor ? '#f7f1eb' : '#faf7f3'}
                        color="#552A0E"
                        {...(isRTL ? { pr: '2.5rem', pl: '0.5rem' } : {})}
                        icon={isRTL ? <ChevronDownIcon /> : undefined}
                      >
                        <option value="+966">+966</option>
                      </Select>
                      <Input
                        type="tel"
                        w={{ base: '65%', lg: '75%' }}
                        value={formValues[field.id]}
                        onChange={(e) => handleChange(field.id, e.target.value)}
                        placeholder={isRTL ? field.placeholder?.ar : field.placeholder?.en}
                        _focus={{ boxShadow: 'none', border: '2px solid #552A0E' }}
                        _hover={{ boxShadow: 'none', border: '2px solid #552A0E4D' }}
                        border="1px solid #552A0E4D"
                        borderRadius={6}
                        bg={inputColor ? '#f7f1eb' : '#faf7f3'}
                              color="#552A0E"
                               py="1.5rem"
                        _placeholder={{ color: '#C0C0C0' }}
                      />
                    </Flex>
                  ) : field.type === 'file' ? (
                    <InputGroup w="100%" mt={{ base: '1rem', lg: 0 }}>
                      <Input
                        type="text"
                        value={formValues[field.id] || ''}
                                isReadOnly
                                 py="1.5rem"
                        placeholder={isRTL ? field.placeholder?.ar : field.placeholder?.en}
                        _focus={{ boxShadow: 'none', border: '2px solid #552A0E4D' }}
                        _hover={{ boxShadow: 'none', border: '2px solid #552A0E4D' }}
                        border="1px solid #552A0E4D"
                        borderRadius={6}
                        bg={inputColor ? '#f7f1eb' : '#faf7f3'}
                        color="#552A0E"
                        pr={!isRTL ? '6rem' : undefined}
                        pl={isRTL ? '6rem' : undefined}
                      />
                      {isRTL ? (
                        <InputLeftElement width="6rem" height="100%" ml="-1px">
                          <Button
                            as="label"
                            bg="#59260A"
                            color="white"
                            w="100%"
                            h="100%"
                            borderRightRadius={0}
                            _hover={{ bg: '#4a1f08' }}
                            cursor="pointer"
                            fontSize="sm"
                          >
                            {'اختر الملف'}
                            <Input
                              type="file"
                              display="none"
                              onChange={(e) => {
                                const value = e.target.files?.[0]?.name || '';
                                handleChange(field.id, value);
                              }}
                            />
                          </Button>
                        </InputLeftElement>
                      ) : (
                        <InputRightElement width="6rem" height="100%" mr="-1px">
                          <Button
                            as="label"
                            bg="#59260A"
                            color="white"
                            w="100%"
                            h="100%"
                            borderLeftRadius={0}
                            _hover={{ bg: '#4a1f08' }}
                            cursor="pointer"
                            fontSize="sm"
                          >
                            {'choose file'}
                            <Input
                              type="file"
                              display="none"

                              onChange={(e) => {
                                const value = e.target.files?.[0]?.name || '';
                                handleChange(field.id, value);
                              }}
                            />
                          </Button>
                        </InputRightElement>
                      )}
                    </InputGroup>
                  ) : (
                    <Input
                      type={field.type}
                      value={formValues[field.id]}
                      onChange={(e) => handleChange(field.id, e.target.value)}
                      placeholder={
                        isRTL ? field.placeholder?.ar : field.placeholder?.en
                      }
                      w="100%"
                      py="1.5rem"
                      mt={{ base: '1rem', lg: 0 }}
                      _focus={{
                        boxShadow: 'none',
                        border: '2px solid #552A0E4D',
                      }}
                      _hover={{
                        boxShadow: 'none',
                        border: '2px solid #552A0E4D',
                      }}
                      border="1px solid #552A0E4D"
                      borderRadius={6}
                      bg={inputColor ? '#f7f1eb' : '#faf7f3'}
                      color="#552A0E"
                      _placeholder={{ color: '#C0C0C0' }}
                    />
                  )}
                </FormControl>
              );
            })}
          </Grid>
          <Button
            type="submit"
            bgColor="#552A0E"
            fontWeight={600}
            color="white"
            borderRadius={{ base: '2xl', lg: '3xl' }}
            _hover={{ transform: 'scale(1.05)' }}
            transition="0.2s"
            alignSelf="flex-end"
            mt="1.5rem"
            py={{ base: '1.5rem', lg: '2rem' }}
            px="3rem"
          >
            {loading
              ? isRTL
                ? 'جاري التحميل...'
                : 'loading...'
              : isRTL
              ? 'جاري الارسال'
              : 'Send'}
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ReusableForm;
