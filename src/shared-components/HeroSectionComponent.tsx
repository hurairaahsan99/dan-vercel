'use client';
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageProvider';
import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
import DynamicModal from './ContactUsSectionForms/DynamicModal';

interface BackgroundSliderData {
  bg_Img: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  button_text?: {
    en: string;
    ar: string;
  };
  is_button?: boolean;
  fontSizeL?: {};
  fontSizeS?: {};
  back?: boolean;
}

const HeroSectionComponent: React.FC<BackgroundSliderData> = ({
  bg_Img,
  title,
  description,
  button_text,
  is_button,
  fontSizeL,
  fontSizeS,
  back,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: '50vh', md: '550px', lg: '600px', xl: '652px' }}
    >
      <Image
        src="/assets/HeaderLogo.png"
        alt=""
        objectFit="contain"
        width={120}
        height={60}
        style={{
          position: 'absolute',
          top: '95.3%',
          right: isMobile ? (isRTL ? '70%' : '5%') : isRTL ? '90%' : '5%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <Box
        transition="opacity 1s ease-in-out"
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
      >
        <Box position="absolute" width="100%" height="100%">
          {bg_Img && (
            <Image
              src={bg_Img}
              alt=""
              layout="fill"
              objectFit="cover"
              quality={100}
              priority
              style={{ filter: 'brightness(50%)' }}
            />
          )}
        </Box>
        {back && (
          <Button
            position="absolute"
            top="35%"
            left={{ base: '25px', sm: isRTL ? '80rem' : '100px' }}
            transform="translateY(-50%)"
            zIndex={2}
            bg="transparent"
            px={{ base: '1rem', lg: '1rem' }}
            py={{ base: '0.7rem', lg: '1.2rem' }}
            fontSize={{ base: '10px', lg: '16px' }}
            fontWeight={600}
            color="white"
            borderRadius={{ base: '2xl', lg: '3xl' }}
            _hover={{ transform: 'scale(1.2)' }}
            transition="all 0.2s"
            border="1px solid white"
            dir={'ltr'}
            mb={{ base: '1.5rem' }}
            onClick={() => router.back()}
          >
            {isRTL ? <FaCaretRight size="2rem" /> : <FaCaretLeft size="2rem" />}
          </Button>
        )}
        <Flex
          flexDir="column"
          zIndex={10}
          position="absolute"
          left={isRTL ? 'auto' : { base: '5%', lg: '7%' }}
          right={isRTL ? { base: '12%', lg: '7%' } : 'auto'}
          top={isMobile ? '65%' : '55%'}
          transform="translateY(-50%)"
          textAlign={isRTL ? 'right' : 'left'}
          color="white"
          fontSize={{ base: '12px', lg: '24px' }}
          fontWeight={500}
          gap={isMobile ? 2 : 6}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <Text
            fontSize={fontSizeS ? fontSizeS : { base: '2.1rem', lg: '2.8rem' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            lineHeight="30px"
            textTransform="initial"
          >
            {isRTL ? title?.ar : title?.en}
          </Text>
          <Box
            fontSize={fontSizeL ? fontSizeL : { base: '1rem', lg: '1.1rem' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            lineHeight="37.5px"
            w={'100%'}
            overflow="hidden"
            fontWeight={{base:300,lg:500}}
            className="Readex-Light"
            dangerouslySetInnerHTML={{
              __html: isRTL ? description?.ar : description?.en,
            }}
            color="white"
            sx={{
              h2: {
                fontWeight: 500,
                fontSize: { base: '1.2rem', lg: '1.9rem' },
              }
            }}
          />
          {is_button && button_text && (
            <Button
              as="a"
              onClick={() => setIsModalOpen(true)}
              target="_blank"
              bg="white"
              w={{ base: '10rem', lg: isRTL ? '80%' : '70%' }}
              py={{ base: '1rem', lg: '1.7rem' }}
              fontSize={{ base: '10px', lg: '16px' }}
              fontWeight={600}
              color="#552A0E"
              borderRadius="3xl"
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
              cursor="pointer"
            >
              {isRTL ? button_text.ar : button_text.en}
            </Button>
          )}
        </Flex>
      </Box>
      <DynamicModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cardTitle={{
          en: 'Media Registration Form',
          ar: 'استمارة تسجيل وسائل الإعلام',
        }}
        media
      />
    </Box>
  );
};

export default HeroSectionComponent;

