'use client';
import { useLanguage } from '@/context/LanguageProvider';
import { Flex, Text, Box, Button, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import Image from 'next/image';

interface DiscoverSectionProps {
  bg_video: {
    en: string;
    ar: string;
  };
  bg_Image: string;
  title?: {
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
  is_full_view: boolean;
}
interface DiscoverSectionData {
  data: DiscoverSectionProps[];
}

const ProgressSectionComponent2: React.FC<DiscoverSectionData> = ({ data }) => {
  const [isPlay, setIsPlay] = useState(false);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  if (data.length === 0) return null;

  const videoSrc = isRTL ? data[0].bg_video.ar : data[0].bg_video.en;

  return (
    <Flex
      mx={{ base: '0rem', lg: '2rem' }}
      width={{ base: 'calc(100% - 0rem)', lg: 'calc(100% - 4rem)' }}
      maxH={{ base: '35vh', lg: '50vh' }}
      minH={{ base: '35vh', lg: '40vh' }}
      overflow="hidden"
      w="100%"
      flexDir={{ base: 'column', lg: 'row' }}
      textAlign={{ base: 'center', lg: 'start' }}
    >
      <Flex
        w="100%"
        zIndex={1}
        width={{ base: '100%', lg: '80%' }}
        maxH={{ base: '40vh', lg: '50vh' }}
        minH={{ base: '35vh', lg: '40vh' }}
        overflow="hidden"
        justifyContent="center"
        position="relative"
      >
        {!isPlay ? (
          <>
            <Image
              src={data[0].bg_Image}
              alt=""
              fill
              objectFit="cover"
              objectPosition="center center"
              style={{ zIndex: 3 }}
            />
            <IconButton
              aria-label="Play video"
              icon={<FaPlay />}
              position="absolute"
              top={{ base: '33%', lg: '50%' }}
              left="50%"
              transform="translate(-50%, -50%)"
              size="lg"
              color="#FFAAAA"
              w={{ base: '45px', lg: '50px' }}
              h={{ base: '45px', lg: '50px' }}
              borderRadius="full"
              bg="whiteAlpha.500"
              _hover={{ bg: 'whiteAlpha.100' }}
              onClick={() => setIsPlay(true)}
              zIndex={3}
              cursor="pointer"
            />
          </>
        ) : (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: 1,
                filter: 'brightness(100%)',
              }}
            >
              <source src={videoSrc} />
            </video>
            <IconButton
              aria-label="Stop video"
              icon={<FaTimes />}
              position="absolute"
              top={{ base: '2%', lg: '2%' }}
              right={{ base: '2%', lg: '2%' }}
              size="md"
              color="white"
              bg="blackAlpha.600"
              _hover={{ bg: 'blackAlpha.400' }}
              onClick={() => setIsPlay(false)}
              zIndex={3}
            />
          </>
        )}
      </Flex>

      <Flex
        w="100%"
        justify={{ base: 'center', lg: 'center' }}
        dir={isRTL ? 'rtl' : 'ltr'}
        flexDir="column"
        zIndex={0}
        className="Readex-Light"
        align={{ base: 'center', lg: 'start' }}
        px={{ base: '1rem', lg: '2rem' }}
      >
        {data[0].title?.en && (
          <Text
            fontWeight={700}
            fontSize={{ base: '24px', lg: '2.1rem' }}
            color="#552a0e"
            mb="0.8rem"
          >
            {isRTL ? data[0].title.ar : data[0].title.en}
          </Text>
        )}
        {data[0].description && (
          <Box
            color="#552a0e"
            fontWeight={400}
            fontSize={{ base: '0.8rem', lg: '1rem' }}
            lineHeight={{ base: '1.4rem', lg: '2rem' }}
            mb="1rem"
            dangerouslySetInnerHTML={{
              __html: isRTL ? data[0].description.ar : data[0].description.en,
            }}
          />
        )}
        {data[0].is_button && data[0].button_text && (
          <Button
            as="a"
            href={isRTL ? '/ar/about-us' : '/en/about-us'}
            bg="transparent"
            px={{ base: '1rem', lg: '1.7rem' }}
            py={{ base: '0.7rem', lg: '1.5rem' }}
            fontSize={{ base: '10px', lg: '16px' }}
            fontWeight={600}
            color="#552a0e"
            borderRadius={{ base: '2xl', lg: '3xl' }}
            _hover={{ transform: 'scale(1.05)' }}
            transition="all 0.2s"
            border="1px solid #552a0e"
          >
            {isRTL ? data[0].button_text.ar : data[0].button_text.en}
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default ProgressSectionComponent2;
