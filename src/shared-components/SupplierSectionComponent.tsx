'use client';
import { useLanguage } from '@/context/LanguageProvider';
import { Flex, Text, Grid, Box } from '@chakra-ui/react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

interface SupplierData {
  logo?: string;
  title?: {
    en: string;
    ar: string;
  };
  image?: string;
}
interface SupplierProps {
  heading: {
    en: string;
    ar: string;
  };
  data: SupplierData[];
}
const SupplierSectionComponent: React.FC<SupplierProps> = ({
  heading,
  data,
}) => {
  const [isHover, setIsHover] = useState<number | null>(null);
  const MotionFlex = motion(Flex);
  const MotionImage = motion(Image);
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const variants = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };
  return (
    <MotionFlex
      flexDir="column"
      my="2rem"
      backgroundImage={isHover !== null ? `url(${data[isHover]?.image})` : ''}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      overflow="hidden"
      variants={variants}
      initial="hidden"
      animate="visible"
    >
      <Flex justify="center" align="center" mt={{ base: '1rem', lg: '3rem' }}>
        {heading.en && (
          <Text
            fontWeight={700}
            fontSize={{ base: '24px', lg: '30px' }}
            color={isHover ? '#F57D00' : '#552a0e'}
          >
            {isRTL ? heading.ar : heading.en}
          </Text>
        )}
      </Flex>
      <Flex
        justify="space-evenly"
        gap={{ base: '0.8rem', lg: isHover ? '1.3rem' : '1rem' }}
        flexWrap="wrap"
        flexDir={{ base: 'row', lg: 'row' }}
        dir={isRTL ? 'rtl' : 'ltr'}
        align="center"
        my={{ base: '2rem', lg: '4rem' }}
      >
        {data?.map((res, index) => (
          <MotionFlex
            key={index}
            flexDir="column"
            minW={{ base: '14vh', lg: '28vh' }}
            maxW={{ base: '16vh', lg: '30vh' }}
            minH={{ base: '14vh', lg: '28vh' }}
            maxH={{ base: '16vh', lg: '30vh' }}
            borderRadius="full"
            justify="center"
            align="center"
            gap={{ base: '0.2rem', lg: '1rem' }}
            mx={{ base: '10px', lg: '1%' }}
            initial={{
              border: '3px solid transparent',
              backgroundColor: '#59260A',
              color: 'white',
              opacity: 1,
            }}
            animate={
              isHover === index
                ? {
                    border: '3px solid #F57D00',
                    backgroundColor: 'transparent',
                    color: '#F57D00',
                    opacity: 1,
                  }
                : isHover !== null
                ? {
                    border: '3px solid transparent',
                    backgroundColor: '#59260A',
                    color: 'white',
                    opacity: 0.2,
                  }
                : {
                    border: '3px solid transparent',
                    backgroundColor: '#59260A',
                    color: 'white',
                    opacity: 1,
                  }
            }
            transition={{
              duration: 0.3,
              ease: 'circInOut',
            }}
            onMouseOver={() => setIsHover(index)}
            onMouseLeave={() => setIsHover(null)}
          >
            <MotionFlex
              minW={{ base: '4vh', lg: '10vh' }}
              maxW={{ base: '6vh', lg: '12vh' }}
              whileHover={{ scale: 1.1 }}
              width="100%"
            >
              <MotionImage
                src={res.logo}
                alt=""
                width={230}
                height={50}
                objectFit="contain"
                style={{
                  filter:
                    isHover === index
                      ? 'invert(49%) sepia(60%) saturate(1394%) hue-rotate(3deg) brightness(90%) contrast(108%)'
                      : '',
                }}
              />
            </MotionFlex>
            <Text
              textAlign="center"
              fontSize={{ base: '0.8rem', lg: '1.1rem' }}
              fontWeight={500}
              lineHeight="1.2rem"
              whiteSpace="normal"
              wordBreak="break-word"
              px={6}
            >
              {isRTL ? res.title?.ar : res.title?.en}
            </Text>
          </MotionFlex>
        ))}
      </Flex>
    </MotionFlex>
  );
};

export default SupplierSectionComponent;
