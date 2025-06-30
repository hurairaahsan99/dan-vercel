'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import { motion } from 'framer-motion';

interface MissionCardProps {
  logo: string;
  heading_en: string;
  heading_ar: string;
  description_en: string;
  description_ar: string;
}
interface MissionDataProps {
  bg_Img: string;
  cards: MissionCardProps[];
}
const OurMissionComponent: React.FC<MissionDataProps> = ({ bg_Img, cards }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const MotionFlex = motion(Flex);
  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      backgroundImage={`url(${bg_Img})`}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      px={{ base: '1rem', lg: '13rem' }}
      py={{ base: '1rem', lg: '5rem' }}
      gap={4}
    >
      {cards?.slice(0, 2).map((res, index) => (
        <MotionFlex
          key={index}
          flexDir="column"
          justify="center"
          align="center"
          color={'#FFFFFF'}
          position="relative"
          textAlign="center"
          width="100%"
          gap={2}
          border={'2px solid #FFFFFF'}
          py="2rem"
          initial={{
            x: index === 0 ? '-100%' : '100%',
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            // everything else still gets your indexed delay …
            default: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
              duration: 0.8,
              delay: index * 0.7,
            },
            background: {
              duration: 0.2,
              ease: 'easeInOut',
              delay: 0,
            },
          }}
          whileHover={{
            background: '#FFFFFF1A',
          }}
        >
          {res.logo && (
            <Flex width={{ base: '12%', lg: '12%' }}>
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
          {(res.heading_ar || res.heading_en) && (
            <Flex mt="0.5rem">
              <Text
                fontSize={{ base: '1.2rem', lg: '1.5rem' }}
                dir={isRTL ? 'rtl' : 'ltr'}
                fontWeight={700}
              >
                {isRTL ? res.heading_ar : res.heading_en}
              </Text>
            </Flex>
          )}
          <Flex
            fontSize={{ base: '0.8rem', lg: '0.9rem' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            fontWeight={400}
            justify="center"
            px={'3rem'}
            noOfLines={4}
            textAlign="center"
            className="Readex-Light"
          >
            {isRTL ? res.description_ar : res.description_en}
          </Flex>
        </MotionFlex>
      ))}
    </Flex>
  );
};

export default OurMissionComponent;
