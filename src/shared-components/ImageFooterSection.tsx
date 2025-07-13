'use client';
import { Box, Flex, Link } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';

interface ImageFooterProps {
  bg_Image: string;
  logo_1: string;
  logo_2: string;
}
const ImageFooterSection: React.FC<ImageFooterProps> = ({
  bg_Image,
  logo_1,
  logo_2,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  return (
    <Flex
      mx={{ base: '1rem', lg: '2rem' }}
      width={{ base: '"calc(100% - 2rem)"', lg: 'calc(100% - 4rem)' }}
      height={{ base: '25vh', lg: '35vh' }}
      backgroundImage={`url(${bg_Image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
      justify="space-between"
      align="flex-end"
      p={4}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <Link href="https://www.pif.gov.sa/" target="_blank">
           <Flex width={{ base: '55%', lg: '22vh' }}>
          <Image
            src={isRTL ? '/assets/PifCompanyAr.png' : logo_1}
            alt=""
            layout="responsive"
            objectFit="contain"
            width={230}
            height={50}
          />
        </Flex>
      </Link>
      <Flex width={{ base: '10%', lg: '4%' }}>
        <Image
          src={logo_2}
          alt=""
          layout="responsive"
          objectFit="contain"
          width={230}
          height={50}
        />
      </Flex>
      </Flex>
  );
};

export default ImageFooterSection;
