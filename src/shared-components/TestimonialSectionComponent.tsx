'use client';
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import { motion } from 'framer-motion';

interface TestimonialSectionProps {
  image_url: string;
  name_en: string;
  name_ar: string;
  designation_en: string;
  designation_ar: string;
  description_en: string;
  description_ar: string;
}
const TestimonialSectionComponent: React.FC<TestimonialSectionProps> = ({
  image_url,
  name_ar,
  name_en,
  description_ar,
  description_en,
  designation_ar,
  designation_en,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [selectedIcon, setSelectedIcon] = useState<any>(null);
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleIconClick = (icon: any) => {
    setSelectedIcon(icon);
    onOpen();
  };
  const MotionBox = motion(Box);
  return (
    <>
      <Flex
        sx={{
          clipPath: 'inset(-90px 0px 0px 0px)',
        }}
        h={{ base: 'auto', lg: '60vh' }}
      >
        <Flex
          mx={{ base: '1rem', lg: '2rem' }}
          width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
          bgColor="#F4E0CC"
          overflow="visible"
          position="relative"
          mt={{ base: '8rem', lg: 0 }}
          minH={{ base: '55vh' }}
        >
          {image_url && (
            <Flex
              width={{ base: '100%', lg: '40%' }}
              h={{ base: '30vh', lg: '100vh' }}
              minH={{ base: '20vh' }}
              minW={{ base: '20vh' }}
              position="relative"
              top={{ base: '-10%', lg: '0%' }}
              left={{ base: '25%', lg: '0px' }}
              order={{ lg: isRTL ? 2 : 1 }}
              zIndex={isMobile ? 0 : 1}
              overflow={{ base: 'hidden', lg: 'visible' }}
              sx={{
                aspectRatio: '3/4',
                transform: 'translateY(-10%)',
              }}
            >
              <Image
                src={image_url}
                alt=""
                fill
                objectFit="contain"
                style={{
                  objectPosition: 'top center',
                  transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
                }}
              />
            </Flex>
          )}
          <Flex
            background={{
              base: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.05) 128.45%)',
              lg: isRTL
                ? 'linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0.05) 100%)'
                : 'linear-gradient(270deg, #FFFFFF 0%, rgba(255, 255, 255, 0.05) 100%)',
            }}
            flexDir="column"
            my={{ base: 0, lg: '4rem' }}
            mx={{ base: '0rem', lg: 0 }}
            mt={{ base: '5rem' }}
            w={{ base: '100%', lg: '0' }}
            minW={{ base: '90%', lg: 'auto' }}
            h={{ base: '77%', lg: 'auto' }}
            order={{ lg: isRTL ? 1 : 2 }}
            flex="1"
            mr={{ lg: isRTL ? 0 : '4rem' }}
            ml={{ lg: isRTL ? '4rem' : 0 }}
            zIndex={1}
            position="relative"
            right={{ base: '18vh', lg: '0vh' }}
          >
            <Flex
              width={{ base: '50%', lg: '10vh' }}
              height={{ base: '15vh', lg: '30vh' }}
              justifyContent="center"
              position="absolute"
              top={{ base: '35vh', lg: '7vh' }}
              right={{ base: '28%', lg: isRTL ? '95%' : '-5%' }}
              zIndex={1}
              overflow="visible"
            >
              <Image
                src={isMobile?'/assets/qqq.png':'/assets/DanLogoLong.png'}
                alt=""
                fill
                objectFit="contain"
                style={{
                  rotate: isMobile ? '0deg' : '0deg',
                }}
              />
            </Flex>
            <Flex
              flexDir={'column'}
              maxWidth={{ base: '100%', lg: '100%' }}
              overflow={'hidden'}
              gap={'2.5rem'}
            >
              <Flex
                align={{
                  base: isRTL ? 'flex-start' : 'flex-end',
                  lg: isRTL ? 'flex-end' : 'flex-start',
                }}
                flexDir={'column'}
                h="30vh"
              >
                <Box
                  maxWidth={{ base: '100%', lg: '90%' }}
                  h={{ base: '28vh', lg: '25vh' }}
                  fontSize={{ base: '0.9rem', lg: '1.1rem' }}
                  fontWeight={{ base: 600, lg: 700 }}
                  color="#959595"
                  overflow={'hidden'}
                  position="relative"
                  mb={{ base: 0, lg: '1rem' }}
                  mt={{ base: 0, lg: '1.5rem' }}
                  lineHeight={{ base: '26px', lg: '42px' }}
                  p={{ base: '2rem', lg: '0' }}
                  textAlign="start"
                  dir={isRTL ? 'rtl' : 'ltr'}
                  onClick={() =>
                    handleIconClick({
                      image_url,
                      name_ar,
                      name_en,
                      designation_ar,
                      designation_en,
                      description_ar,
                      description_en,
                    })
                  }
                >
                  <MotionBox
                    className='Readex-Light'
                    dir={isRTL ? 'rtl' : 'ltr'}
                    noOfLines={10}
                    whileHover={{ scale: 0.9 }}
                    lineHeight="2rem"
                    cursor="pointer"
                    color="#422916"
                    fontWeight={300}
                    fontSize={{ base: '0.9rem', lg: '1.1rem' }}
                    dangerouslySetInnerHTML={{
                      __html: isRTL ? description_ar : description_en,
                    }}
                    sx={{
                      strong: {
                        color: '#552a0e',
                      },
                    }}
                  />
                </Box>
              </Flex>
              <Box>
                <Box
                  mt={{ base: '0rem', lg: '-1rem', xl: '0rem' }}
                  fontSize={{ base: '1.1rem', lg: '1.2rem' }}
                  fontWeight={700}
                  color="#552A0E"
                  px={{ base: '2rem', lg: '0' }}
                  dir={isRTL ? 'rtl' : 'ltr'}
                >
                  {isRTL ? name_ar : name_en}
                </Box>
                <Box
                  fontSize={{ base: '1rem', lg: '1.2rem' }}
                  fontWeight={400}
                  px={{ base: '2rem', lg: '0' }}
                  pb={{ base: '2rem', lg: '1rem' }}
                  dir={isRTL ? 'rtl' : 'ltr'}
                  color="#552A0E"
                >
                  {isRTL ? designation_ar : designation_en}
                </Box>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay h="100vh" />
        <ModalContent
          maxW={{ base: '90vw', lg: '70vw' }}
          w={{ base: '90vw', lg: '80vw' }}
          position="relative"
          mt={{ base: '5rem' }}
        >
          <ModalCloseButton
            position="absolute"
            top="-40px"
            right="-2px"
            color="#E55A52"
            fontSize="1rem"
            p={3}
            bg="white"
            borderRadius="full"
            zIndex={1}
          />
          <ModalBody>
            {selectedIcon && (
              <Flex
                flexDir={{
                  base: 'column',
                  lg: isRTL ? 'row-reverse' : 'row',
                }}
                gap={5}
                pb="7rem"
              >
                <Box>
                  <Flex width={{ lg: '40vh' }} mt={4}>
                    <Image
                      src={selectedIcon.image_url}
                      alt=""
                      layout="responsive"
                      objectFit="cover"
                      width={200}
                      height={200}
                      style={{
                        transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)',
                      }}
                    />
                  </Flex>
                  <Flex
                    flexDir={'row'}
                    justify="space-between"
                    px={{ base: '0.5rem', lg: '1.5rem' }}
                    py={{ base: '0.3rem', lg: '1.4rem' }}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    align="center"
                    bgColor="#552A0E"
                  >
                    <Flex
                      flexDir="column"
                      alignItems="start"
                      justify="start"
                      gap={'0.1rem'}
                      color="#FFFFFF"
                      textAlign="start"
                    >
                      <Text
                        fontSize={{ base: '1rem', lg: '1.2rem' }}
                        fontWeight={600}
                      >
                        {isRTL ? selectedIcon.name_ar : selectedIcon.name_en}
                      </Text>
                      <Text
                        fontSize={{ base: '0.8rem', lg: '0.9rem' }}
                        fontWeight={400}
                      >
                        {isRTL
                          ? selectedIcon.designation_ar
                          : selectedIcon.designation_en}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
                <Box>
                  <Box
                    fontSize={{ base: '0.8rem', lg: '0.9rem' }}
                    fontWeight={300}
                    lineHeight="26px"
                    dir={isRTL ? 'rtl' : 'ltr'}
                    mt={{ base: '2rem', lg: '4rem' }}
                    dangerouslySetInnerHTML={{
                      __html: isRTL
                        ? selectedIcon.description_ar
                        : selectedIcon.description_en,
                    }}
                    color="black"
                    sx={{
                      strong: {
                        color: '#552a0e',
                      },
                    }}
                  />
                </Box>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TestimonialSectionComponent;
