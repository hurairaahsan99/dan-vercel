'use client';
import { useLanguage } from '@/context/LanguageProvider';
import { Box, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

interface CardSectionComponentProps {
  text_en: string;
  text_ar: string;
  description_en: string;
  description_ar: string;
  logo: string;
  bgImage: string;
}

interface Data {
  data: CardSectionComponentProps[];
}

const CardSectionComponent: React.FC<Data> = ({ data }) => {
  const MotionFlex = motion(Flex);
  const MotionBox = motion(Box);
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  // our single source of truth for visible/hidden
  const contentVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0.2, // wait 0.2s, then animate out
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
        delay: 0, // animate in immediately
      },
    },
  };
  const bgVariants: Variants = {
    rest: {
      scale: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0.9,
      },
    },
    hover: {

      transition: {
        duration: 1,
        ease: 'easeInOut',
        delay: 0,
      },
    },
  };

  return (
    <Flex
      mx={{ base: '1rem', lg: '2rem' }}
      width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
      gap={{ base: 1, lg: 2 }}
      flexDir={{ base: 'column', lg: 'row' }}
      height="100%"
      overflow="hidden"
    >
      {data.map((res, index) => (
        <Flex
          key={index}
          width="100%"
          height="40vh"
          position="relative"
          overflow="hidden"
          justify="center"
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          {/* background zoom */}
          <MotionBox
            position="absolute"
            zIndex={0}
            width="100%"
            height="100%"
            backgroundImage={`url(${res.bgImage})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            variants={bgVariants}
            initial="rest"
            animate={hoverIndex === index ? 'hover' : 'rest'}
          />
          {/* overlay content */}
          <Flex
            position="relative"
            zIndex={1}
            flexDir="column"
            align="center"
            justify="center"
            textAlign="center"
            color="#fff"
            pointerEvents="none"
            gap={2}
          >
            {res.logo && (
              <Box width="230px" height="70px">
                <MotionFlex
                  initial={{ y: 0 }}
                  animate={{ y: hoverIndex === index ? -20 : 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  style={{ width: '100%', height: '100%' }}
                >
                  <Image
                    src={res.logo}
                    alt="Center Logo"
                    width={230}
                    height={50}
                    style={{ objectFit: 'contain' }}
                  />
                </MotionFlex>
              </Box>
            )}

            {(res.text_en || res.text_ar) && (
              <MotionFlex
                initial={{ y: 0 }}
                animate={{ y: hoverIndex === index ? -20 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                mt="1rem"
              >
                <Text
                  fontSize={{ base: '18px', lg: '20px' }}
                  fontWeight={500}
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  {isRTL ? res.text_ar : res.text_en}
                </Text>
              </MotionFlex>
            )}

            {/* description with AnimatePresence */}
            <AnimatePresence mode="wait">
              {hoverIndex === index && (
                <MotionFlex
                  key="description"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  fontSize={{ base: '14px', lg: '14px' }}
                  fontWeight={400}
                  dir={isRTL ? 'rtl' : 'ltr'}
                  px="3rem"
                  noOfLines={5}
                  className="Readex-Light"
                >
                  {isRTL ? res.description_ar : res.description_en}
                </MotionFlex>
              )}
            </AnimatePresence>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

export default CardSectionComponent;
