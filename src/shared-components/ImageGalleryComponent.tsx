'use client';
import { useLanguage } from '@/context/LanguageProvider';
import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface ImageGallery {
  image: string;
  title: {
    en: string;
    ar: string;
  };
}
interface ImageGalleryProps {
  data: ImageGallery[];
  heading: {
    en: string;
    ar: string;
  };
}

const MotionBox = motion(Box);

const ImageGalleryComponent: React.FC<ImageGalleryProps> = ({
  data,
  heading,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentSlide((prevIndex) =>
        prevIndex === 0 ? data.length - 1 : prevIndex - 1,
      );
    }, 200);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentSlide((prevIndex) => (prevIndex + 1) % data.length);
    }, 200);
  };

  const currentContent = data[currentSlide];
  const backgroundVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };
  return (
    <Box
      position="relative"
      mx={{ base: '1rem', lg: '2rem' }}
      width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
      h={{ base: '40vh', md: '400px', lg: '500px', xl: '550px' }}
      overflow="hidden"
    >
      <Flex
        mx={{ base: '1rem', lg: '1rem' }}
        mb={{ base: '1rem', lg: '2rem' }}
        justify="space-between"
        align="center"
        flexDir={isRTL ? 'row-reverse' : 'row'}
      >
        <Text
          fontSize={{ base: '1.2rem', md: '1.5rem' }}
          fontWeight={700}
          lineHeight="37px"
          color="#552A0E"
        >
          {isRTL ? heading?.ar : heading?.en}
        </Text>
        <Text
          fontSize={{ base: '0.9rem', md: '1rem' }}
          fontWeight={400}
          lineHeight="20px"
          textDecoration="underline"
          display="none"
        >
          {isRTL ? 'كل الأخبار' : 'All News'}
        </Text>
      </Flex>
      <MotionBox
        key={currentSlide}
        initial={backgroundVariants.initial}
        animate={backgroundVariants.animate}
        exit={backgroundVariants.exit}
        transition={{ duration: 0.6 }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
        }}
      >
        <Box position="absolute" w="100%" h="100%" zIndex={1}>
          {currentContent.image && (
            <Image
              src={currentContent.image}
              alt=""
              fill
              objectFit="cover"
              objectPosition="center 20%"
              priority
              quality={50}
              style={{ transform: 'brightness(50%)' }}
            />
          )}
        </Box>
        <motion.div
          initial={{ x: '-50%', y: '-100%', opacity: 0 }}
          animate={{ x: '-50%', y: '-50%', opacity: 1 }}
          transition={{ duration: 1, ease: 'anticipate' }}
          style={{
            position: 'absolute',
            top: '80%',
            left: isMobile ? (isRTL ? '48%' : '52%') : isRTL ? '45%' : '55%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            width: '100%',
            textAlign: 'start',
            paddingBottom: '1rem',
          }}
        >
          {currentContent.title && (
            <Text
              fontSize={{ base: '1.2rem', lg: '2.1rem' }}
              fontWeight={600}
              dir={isRTL ? 'rtl' : 'ltr'}
              textTransform="capitalize"
              color="white"
              whiteSpace="wrap"
            >
              {isRTL ? currentContent.title.ar : currentContent.title.en}
            </Text>
          )}
        </motion.div>
      </MotionBox>
      <Flex
        gap="1rem"
        dir={isRTL ? 'rtl' : 'ltr'}
        position="absolute"
        width="100%"
        height="100%"
        overflow="hidden"
      >
        <Button
          position="absolute"
          top="50%"
          left={{ base: '25px', sm: '70px' }}
          transform="translateY(-50%)"
          zIndex={2}
          bg={isRTL ? 'white' : 'transparent'}
          px={{ base: '1rem', lg: '1rem' }}
          py={{ base: '0.7rem', lg: '1.2rem' }}
          fontSize={{ base: '10px', lg: '16px' }}
          fontWeight={600}
          borderRadius={{ base: '2xl', lg: '3xl' }}
          _hover={{ transform: 'translateY(-50%) scale(1.1)' }}
          transition="all 0.2s"
          border="1px solid white"
          color="white"
          dir={'ltr'}
          onClick={handlePrev}
        >
          <FaCaretLeft color={isRTL ? 'gray' : 'white'} size="2rem" />
        </Button>
        <Button
          position="absolute"
          top="50%"
          right={{ base: '25px', sm: '70px' }}
          transform="translateY(-50%)"
          zIndex={2}
          bg={isRTL ? 'transparent' : 'white'}
          px={{ base: '1rem', lg: '1rem' }}
          py={{ base: '0.7rem', lg: '1.2rem' }}
          fontSize={{ base: '10px', lg: '16px' }}
          fontWeight={600}
          borderRadius={{ base: '2xl', lg: '3xl' }}
          _hover={{ transform: 'translateY(-50%) scale(1.1)' }}
          transition="all 0.2s"
          border="1px solid white"
          dir={'ltr'}
          mb={{ base: '1.5rem' }}
          onClick={handleNext}
        >
          <FaCaretRight color={isRTL ? 'white' : 'gray'} size="2rem" />
        </Button>
      </Flex>
    </Box>
  );
};

export default ImageGalleryComponent;
