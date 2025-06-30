'use client';
import { useLanguage } from '@/context/LanguageProvider';
import ImagepathGenerator from '@/Utils/ImagepathGenerator';
import {
  Flex,
  Box,
  Button,
  Text,
  HStack,
  CircularProgress,
  CircularProgressLabel,
  Divider,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

interface ProgressDetails {
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  isCompleted: boolean;
}
interface ProgressData {
  bg_img: string;
  logo?: string;
  heading?: {
    en: string;
    ar: string;
  };
  sub_heading?: {
    en: string;
    ar: string;
  };
  progress: ProgressDetails[];
}
interface ProgressProps {
  data: ProgressData[];
}

const ProgressSectionComponent: React.FC<ProgressProps> = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

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
  const MotionFlex = motion(Flex);
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.5,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return data.length > 0 ? (
    <>
      <Flex
        mx={{ base: '1rem', lg: '2rem' }}
        mb={{ base: '1rem', lg: '2rem' }}
        width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
        align="center"
        flexDir={isRTL ? 'row-reverse' : 'row'}
      >
        <Text
          fontSize={{ base: '1.4rem', md: '1.5rem' }}
          fontWeight={700}
          color={'#552A0E'}
          lineHeight="37px"
        >
          {isRTL ? 'تحديثات المشاريع' : 'The Progress on Projects'}
        </Text>
      </Flex>
      <Flex
        mx={{ base: '1rem', lg: '2rem' }}
        width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
        minH={{ base: '35vh', lg: '65vh' }}
        maxH={{ base: '220vh', lg: '83vh' }}
        overflow="hidden"
        justify={{ base: 'center', lg: 'start' }}
        align="center"
        dir={isRTL ? 'rtl' : 'ltr'}
        px={{ base: '1.5rem', lg: '2rem' }}
        flexDir={{ base: 'column', lg: 'row' }}
        gap={{ base: '2rem', lg: '4rem' }}
        position="relative"
        zIndex={0}
      >
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${ImagepathGenerator(
                currentContent?.bg_img,
              )})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(40%)',
              zIndex: -1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          />
        </AnimatePresence>
        <Flex
          justify="center"
          align="center"
          mb={{ base: '0', lg: '0.8rem' }}
          dir={isRTL ? 'rtl' : 'ltr'}
          flexDir="column"
          gap={{ base: '1rem', lg: '3rem' }}
          minW="40vh"
          mt={{ base: '1rem', lg: '0' }}
          zIndex={1}
        >
          <Box h={{ base: '10vh', lg: '12vh' }}>
            {currentContent.heading?.en || currentContent.sub_heading?.ar ? (
              <Flex flexDir="column" align="center" color={'white'}>
                <Text
                  fontWeight={400}
                  fontSize={{ base: '0.9rem', lg: '1rem' }}
                  className="Readex-Light"
                >
                  {isRTL
                    ? currentContent.sub_heading?.ar
                    : currentContent.sub_heading?.en}
                </Text>
                <Text
                  fontWeight={700}
                  fontSize={{ base: '24px', lg: '2.1rem' }}
                >
                  {isRTL
                    ? currentContent.heading?.ar
                    : currentContent.heading?.en}
                </Text>
              </Flex>
            ) : (
              currentContent.logo && (
                <Box w={{ base: '250px', lg: '250px' }}>
                  <Image
                    src={ImagepathGenerator(currentContent.logo)}
                    alt=""
                    layout="responsive"
                    objectFit="contain"
                    width={230}
                    height={50}
                  />
                </Box>
              )
            )}
          </Box>

          <HStack>
            <CircularProgress
              value={currentContent.progress.length * 20}
              size={'150px'}
              color="#F57D00"
              trackColor="transparent"
              thickness="7px"
              capIsRound
            >
              <CircularProgressLabel color="#F57D00">
                {currentContent.progress.length * 20}%
              </CircularProgressLabel>
            </CircularProgress>
          </HStack>

          <Flex gap="1rem" dir={'ltr'}>
            <Button
              bg="white"
              px={{ base: '1rem', lg: '1rem' }}
              py={{ base: '0.7rem', lg: '1.2rem' }}
              fontSize={{ base: '10px', lg: '16px' }}
              fontWeight={600}
              borderRadius={{ base: '2xl', lg: '3xl' }}
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
              border="1px solid white"
              dir={'ltr'}
              mb={{ base: '1.5rem' }}
              onClick={handlePrev}
            >
              <FaCaretLeft color="gray" size="2rem" />
            </Button>
            <Button
              bg="transparent"
              px={{ base: '1rem', lg: '1rem' }}
              py={{ base: '0.7rem', lg: '1.2rem' }}
              fontSize={{ base: '10px', lg: '16px' }}
              fontWeight={600}
              color="white"
              borderRadius={{ base: '2xl', lg: '3xl' }}
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
              border="1px solid white"
              dir={'ltr'}
              mb={{ base: '1.5rem' }}
              onClick={handleNext}
            >
              <FaCaretRight size="2rem" />
            </Button>
          </Flex>
        </Flex>

        <MotionFlex
          flexDir="column"
          minH={{ base: 'auto', lg: '40vh' }}
          minW={{ lg: '80vh' }}
          maxH={{ base: 'auto', lg: '75vh' }}
          overflowY={{ base: 'unset', lg: 'auto' }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          my="3rem"
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          {currentContent?.progress?.map((ques, i) =>
            ques?.title?.en || ques?.description?.en ? (
              <MotionFlex
                key={i}
                variants={itemVariants}
                align="center"
                mb={{ base: '1.5rem', lg: '1rem' }}
              >
                <Flex
                  px="2rem"
                  flexDir="column"
                  align="center"
                  height={{ base: '27vh', lg: '10vh' }}
                >
                  <Box
                    w="2rem"
                    h="2rem"
                    borderRadius="full"
                    p={5}
                    bg={ques.isCompleted ? '#F57D00' : '#9E9E9E'}
                  />
                  {i !== currentContent?.progress?.length - 1 && (
                    <Box
                      width="1px"
                      height="100%"
                      background={`repeating-linear-gradient(
        180deg,
        transparent 0,
        transparent 50%,
        ${ques.isCompleted ? '#F57D00' : '#9E9E9E'} 50%,
        ${ques.isCompleted ? '#F57D00' : '#9E9E9E'} 100%
      )`}
                      backgroundSize="2px 15px"
                    />
                  )}
                </Flex>

                <Flex
                  flexDir="column"
                  w={{ base: '100%', lg: '100%' }}
                  dir={isRTL ? 'rtl' : 'ltr'}
                  textAlign="start"
                  justify="center"
                >
                  <Text
                    fontWeight={600}
                    fontSize={{ base: '0.8rem', lg: '1rem' }}
                    lineHeight={{ base: '1.4rem', lg: '2rem' }}
                    color={ques.isCompleted ? '#F57D00' : '#9E9E9E'}
                  >
                    {isRTL ? ques.title.ar : ques.title.en}
                  </Text>
                  <Text
                    fontWeight={300}
                    fontSize={{ base: '0.8rem', lg: '0.9rem' }}
                    color="white"
                    lineHeight={{ base: '1.4rem', lg: '1.5rem' }}
                    className="Readex-Light"
                  >
                    {isRTL ? ques.description.ar : ques.description.en}
                  </Text>
                </Flex>
              </MotionFlex>
            ) : null,
          )}
        </MotionFlex>
      </Flex>
    </>
  ) : null;
};

export default ProgressSectionComponent;
