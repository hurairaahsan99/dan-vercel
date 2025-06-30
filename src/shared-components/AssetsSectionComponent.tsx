'use client';
import { useLanguage } from '@/context/LanguageProvider';
import { Box, Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface AssetsData {
  bg_img: string;
  logo: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}
interface AssetsProps {
  data: AssetsData[];
}
const AssetsSectionComponent: React.FC<AssetsProps> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const MotionBox = motion(Box);
  const MotionFlex = motion(Flex);
  const MotionImage = motion(Image);

  return (
    <Flex
      mx={{ base: '1rem', lg: '2rem' }}
      width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
      gap="2rem"
      flexDir={{ base: 'column', lg: 'row' }}
      mt={{ base: '2rem', lg: '2rem' }}
    >
      {data?.slice(0, 2).map((res, index) => (
        <MotionFlex
          key={index}
          flexDir="column"
          justify="center"
          align="center"
          color="#FFFFFF"
          position="relative"
          textAlign="center"
          width="100%"
          gap="1rem"
          py="1rem"
          bgColor="#F4E0CC"
          initial={{
            x: index === 0 ? '-100%' : '100%',
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            // everything else uses your staggered spring…
            default: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
              duration: 0.8,
              delay: index * 0.7,
            },
            // …but the backgroundColor toggle is immediate
            backgroundColor: {
              duration: 0,
              delay: 0,
            },
          }}
          whileHover={{
            backgroundColor: '#E7C4A0',
            // you can also double‑override here if you want:
            transition: { duration: 0, delay: 0 },
          }}
        >
          {res.bg_img && (
            <MotionBox
              width={{ base: '9vh', lg: '13vh' }}
              bgColor="#E9810B"
              p={{ base: 4, lg: 8 }}
              borderRadius="full"
            >
              <Image
                src={res.bg_img}
                alt=""
                objectFit="contain"
                width={230}
                height={50}
              />
            </MotionBox>
          )}
          {(res.title.en || res.title.ar) && (
            <Flex mt="0.5rem">
              <Text
                fontSize={{ base: '1.2rem', lg: '1.5rem' }}
                dir={isRTL ? 'rtl' : 'ltr'}
                fontWeight={500}
                color="#5A2910"
              >
                {isRTL ? res.title.ar : res.title.en}
              </Text>
            </Flex>
          )}
          <Flex
            fontSize={{ base: '0.8rem', lg: '1rem' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            fontWeight={300}
            justify="center"
            px={{ base: '1.5rem', lg: '4.5rem' }}
            noOfLines={7}
            textAlign="center"
            color="#5A2910"
            className="Readex-Light"
          >
            {isRTL ? res.description.ar : res.description.en}
          </Flex>
          {res.logo && (
            <Flex width={{ base: '15vh', lg: '30vh' }}>
              <Image
                src={res.logo}
                alt="Center Logo"
                layout="responsive"
                objectFit="contain"
                width={230}
                height={50}
              />
            </Flex>
          )}
        </MotionFlex>
      ))}
    </Flex>
  );
};

export default AssetsSectionComponent;
