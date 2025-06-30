'use client';
import React from 'react';
import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react';
import { useLanguage } from '@/context/LanguageProvider';
import ValueSliderSection from './ValueSliderSection/ValueSliderSection';

interface ValueIconsProps {
  id: number;
  icon: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
}

interface ValueDataProps {
  logo: string;
  heading_en: string;
  heading_ar: string;
  Subheading_en?: string;
  Subheading_ar?: string;
  Icons: ValueIconsProps[];
}

const ValueSectionComponent: React.FC<ValueDataProps> = ({
  logo,
  heading_ar,
  heading_en,
  Subheading_ar,
  Subheading_en,
  Icons,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  return (
    <>
      <Flex
        flexDir="column"
        mt="2rem"
        mb="2rem"
        w="100%"
        justify="center"
        overflow="hidden"
      >
        <Flex flexDir="column" alignItems="center" color={'#552A0E'} justify="start" gap="0.8rem">
          <Flex width={{ base: '12%', lg: '4%' }}>
            <Image
              src={logo}
              alt="Logo"
              layout="responsive"
              objectFit="contain"
              width={230}
              height={50}
            />
          </Flex>
          <Text
            fontSize={{ base: '1.4rem', lg: '1.9rem' }}
            textAlign="center"
            fontWeight={700}
          >
            {isRTL ? heading_ar : heading_en}
          </Text>
          <Text
            fontSize={{ base: '1rem', lg: '1.1rem' }}
            textAlign="center"
            fontWeight={400}
          >
            {isRTL ? Subheading_ar : Subheading_en}
          </Text>
        </Flex>
      </Flex>
      <ValueSliderSection data={Icons} />
    </>
  );
};

export default ValueSectionComponent;
