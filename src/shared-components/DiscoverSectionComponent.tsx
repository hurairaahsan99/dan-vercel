'use client';
import { useLanguage } from '@/context/LanguageProvider';
import { Flex, Text, Box, Button } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';

interface DiscoverSectionProps {
  bg_img: string;
  logo?: string;
  title?: {
    en: string;
    ar: string;
  };
  sub_title?: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
  button_text?: {
    en: string;
    ar: string;
  };
  is_button?: boolean;
  status: boolean;
}
interface DiscoverSectionData {
  data: DiscoverSectionProps[];
}
const DiscoverSectionComponent: React.FC<DiscoverSectionData> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  return data.length > 0 ? (
    data.map((res, index) =>
      res.status ? (
        <Flex
          key={index}
          mb={{ base: '2rem', lg: index === 0 ? '5rem' : '0rem' }}
          mx={{ base: '0rem', lg: '2rem' }}
          width={{ base: 'calc(100% - 0rem)', lg: 'calc(100% - 4rem)' }}
          maxH={{ base: '55vh', lg: '50vh' }}
          minH={{ base: '35vh', lg: '30vh' }}
          overflow="hidden"
          w="100%"
          flexDir={{ base: 'column', lg: index === 0 ? 'row' : 'row-reverse' }}
          textAlign={{ base: 'center', lg: 'start' }}
        >
          <Flex
            w="100%"
            justify={{ base: 'center', lg: 'center' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            flexDir={{ base: 'column', lg: 'column' }}
            zIndex={0}
            className="Readex-Light"
            align={{ base: 'center', lg: 'start' }}
          >
            <Flex
              justify="start"
              align="start"
              mb="0.8rem"
              dir={isRTL ? 'rtl' : 'ltr'}
              px={{ base: '0px', lg: '2rem' }}
            >
              {res.title?.en && res.sub_title?.ar ? (
                <Flex flexDir="column" color={'#552a0e'} mt={2}>
                  <Text
                    fontWeight={400}
                    fontSize={{ base: '0.9rem', lg: '1rem' }}
                  >
                    {isRTL ? res.sub_title?.ar : res.sub_title?.en}
                  </Text>
                  <Text
                    fontWeight={700}
                    fontSize={{ base: '24px', lg: '2.1rem' }}
                  >
                    {isRTL ? res.title?.ar : res.title?.en}
                  </Text>
                </Flex>
              ) : (
                res.logo && (
                  <Box
                    position="relative"
                    h={{ base: '50px', lg: '100px' }}
                    w={{ base: '200px', lg: '400px' }}
                  >
                    <Box
                      position="relative"
                      w={{ base: '200px', lg: '300px' }}
                      my={2}
                      bgImage="/assets/AboutLayerBg.png"
                      bgSize="cover"
                      bgPos="center"
                      bgRepeat="no-repeat"
                    >
                      <Image
                        src={res.logo}
                        alt=""
                        layout="responsive"
                        width={230}
                        height={50}
                        style={{ objectFit: 'contain' }}
                      />
                    </Box>
                  </Box>
                )
              )}
            </Flex>
            {(res?.description?.ar || res?.description?.en) && (
              <Box
                dir={isRTL ? 'rtl' : 'ltr'}
                mb={{ base: '1rem', lg: '1rem' }}
                color={'#552a0e'}
                px={{ base: '1rem', lg: '2rem' }}
              >
                <Text
                  fontWeight={400}
                  fontSize={{ base: '0.8rem', lg: '1rem' }}
                  lineHeight={{ base: '1.4rem', lg: '2rem' }}
                >
                  {isRTL ? res?.description?.ar : res?.description?.en}
                </Text>
              </Box>
            )}
            {res.is_button && res.button_text && (
              <Box
                w={{ base: '100%', lg: '100%' }}
                px={{ base: '1rem', lg: '2rem' }}
                alignSelf="center"
                justifySelf="center"
              >
                <Button
                  as="a"
                  href={isRTL ? '/ar/about-us' : '/en/about-us'}
                  bg="transparent"
                  px={{ base: '1rem', lg: '1.7rem' }}
                  py={{ base: '0.7rem', lg: '1.5rem' }}
                  fontSize={{ base: '10px', lg: '16px' }}
                  fontWeight={600}
                  color={'#552a0e'}
                  borderRadius={{ base: '2xl', lg: '3xl' }}
                  _hover={{ transform: 'scale(1.05)' }}
                  transition="all 0.2s"
                  border="1px solid #552a0e"
                  dir={isRTL ? 'rtl' : 'ltr'}
                  mb={{ base: '1rem' }}
                >
                  {isRTL ? res.button_text.ar : res.button_text.en}
                </Button>
              </Box>
            )}
          </Flex>
          <Flex
            w="100%"
            key={index}
            zIndex={1}
            width={{ base: '100%', lg: '95%' }}
            minH={{ base: '35vh', lg: '40vh' }}
            maxH={{ base: '40vh', lg: '50vh' }}
            overflow="hidden"
            justifyContent="center"
            position="relative"
          >
            <Image
              src={res?.bg_img}
              alt=""
              fill
              objectFit="cover"
              objectPosition="center center"
              style={{ filter: 'brightness(40%)' }}
            />
          </Flex>
        </Flex>
      ) : (
        <></>
      ),
    )
  ) : (
    <></>
  );
};

export default DiscoverSectionComponent;
