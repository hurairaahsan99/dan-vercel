'use client';
import { useLanguage } from '@/context/LanguageProvider';
import { Box, Button, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';

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

const HeroBlogsDetails: React.FC<BackgroundSliderData> = ({
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

  return (
    <Box
      position="relative"
      width="100%"
      height={{ base: '50vh', lg: '400px' }}
      zIndex={1}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={1}
      >
        {bg_Img && (
          <Image
            src={bg_Img}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        )}
      </Box>
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={2}
        style={{
          background: `linear-gradient(rgba(40,15,3,0.9), rgba(40,15,3,0.9))`,
        }}
      />
      {/* {back && (
        <Button
          position="absolute"
          top={{ base: '45%', lg: '45%' }}
          left={{
            base: isRTL ? '19rem' : '20px',
            sm: isRTL ? '73rem' : '65px',
          }}
          transform="translateY(-50%)"
          zIndex={3}
          bg="transparent"
          px={{ base: '1rem', lg: '1rem' }}
          py={{ base: '0.7rem', lg: '1.2rem' }}
          fontSize={{ base: '10px', lg: '16px' }}
          fontWeight={600}
          color="white"
          borderRadius={{ base: '2xl', lg: '3xl' }}
          _hover={{ transform: 'translateY(-50%) scale(1.1)' }}
          transition="all 0.2s"
          border="1px solid white"
          dir={'ltr'}
          mb={{ base: '1.5rem' }}
          onClick={() => router.back()}
        >
          {isRTL ? <FaCaretRight size="2rem" /> : <FaCaretLeft size="2rem" />}
        </Button>
      )} */}
      <Flex
        flexDir={{ base: 'column', lg: 'row' }}
        flexWrap="wrap"
        position="absolute"
        top={'65%'}
        transform="translateY(-50%)"
        textAlign={isRTL ? 'right' : 'left'}
        color="white"
        fontSize={{ base: '12px', lg: '24px' }}
        textTransform="capitalize"
        fontWeight={500}
        gap={isMobile ? 2 : 6}
        dir={isRTL ? 'rtl' : 'ltr'}
        w="100%"
        px={{ base: '1rem', lg: '4rem' }}
        overflow="hidden"
        justify="space-between"
        align={{ base: 'flex-end', lg: 'flex-start' }}
        zIndex={3}
      >
        <Flex
          flexDir="column"
          gap={2}
          flex="1"
          maxWidth={{ base: '100%', lg: '65%' }}
          mb="0.5rem"
        >
          <Box
            fontSize={fontSizeL ? fontSizeL : { base: '2.1rem', lg: '2.8rem' }}
            dir={isRTL ? 'rtl' : 'ltr'}
            lineHeight={{ base: '40px', lg: '50px' }}
            overflow="hidden"
            h={{ base: '9vh', lg: '12vh' }}
            dangerouslySetInnerHTML={{
              __html: isRTL ? description?.ar : description?.en,
            }}
            color="white"
          />
        </Flex>
        {is_button && button_text && (
          <Button
            mt={1}
            as="a"
            href="#"
            target="_blank"
            bg="white"
            w={{ base: '12vh', lg: '14vh' }}
            py={{ base: '1rem', lg: '1rem' }}
            fontSize={{ base: '10px', lg: '16px' }}
            fontWeight={600}
            color="#313131"
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
  );
};

export default HeroBlogsDetails;
