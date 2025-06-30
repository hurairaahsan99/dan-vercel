'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';

interface IncomeSectionData {
  title: {
    en: string;
    ar: string;
  };
  logo: string;
}
interface IncomeSectionProps {
  heading: {
    en: string;
    ar: string;
  };
  bg_image: string;
  data: IncomeSectionData[];
}
const IncomeSectionComponent: React.FC<IncomeSectionProps> = ({
  data,
  bg_image,
  heading,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  return (
    <Flex
      mx={{ base: '1rem', lg: '2rem' }}
      width={{ base: '"calc(100% - 2rem)"', lg: 'calc(100% - 4rem)' }}
      height={{ base: 'auto', lg: '30vh' }}
      backgroundImage={`linear-gradient(rgba(89,38,10,0.5), rgba(89,38,10,0.5)), url(${bg_image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
      align="center"
      flexDir={'column'}
      gap="2rem"
      p={4}
      my="1rem"
      pb={{ base: '2rem', lg: '0.5rem' }}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {(heading.en || heading.ar) && (
        <Flex mt="0.5rem">
          <Text
            fontSize={{ base: '1.4rem', lg: '1.5rem' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            fontWeight={500}
            color="white"
          >
            {isRTL ? heading.ar : heading.en}
          </Text>
        </Flex>
      )}
      <Flex flexDir={{ base: 'column', lg: 'row' }} gap="3rem">
        {data.map((res, index) => (
          <Flex
            key={index}
            align="center"
            px={{ base: '1rem', lg: '4rem' }}
            py={'1rem'}
            bgColor="white"
            gap="2rem"
          >
            <Flex width={{ base: '12%', lg: '5vh' }}>
              <Image
                src={res.logo}
                alt="Center Logo"
                layout="responsive"
                objectFit="contain"
                width={230}
                height={50}
              />
            </Flex>
            <Text
              fontSize={{ base: '1.2rem', lg: '1.2rem' }}
              dir={isRTL ? 'rtl' : 'ltr'}
              fontWeight={500}
              color="#000"
              w={'100%'}
            >
              {isRTL ? res.title.ar : res.title.en}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default IncomeSectionComponent;
