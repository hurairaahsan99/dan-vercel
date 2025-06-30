'use client';
import { Box, Flex, Text, useMediaQuery } from '@chakra-ui/react';
import { useLanguage } from '../context/LanguageProvider';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ExperienceSectionComponentProps {
  title_en: string;
  title_ar: string;
  Description_en: string;
  Description_ar: string;
  Image_url: string;
}

const DanMeansComponent: React.FC<ExperienceSectionComponentProps> = ({
  title_en,
  title_ar,
  Description_en,
  Description_ar,
  Image_url,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const MotionBox = motion(Box);
  const MotionImage = motion(Image);
  const childVariants1 = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: 'easeOut' },
    },
  };
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Flex
      flexDir={{ base: 'column-reverse', lg: 'row' }}
      justify="start"
      mx={{ base: '1rem', lg: '2rem' }}
      width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
      align={{ base: 'center', lg: 'center' }}
      mt={{ base: 0, lg: '1.6rem' }}
      textAlign={{ base: 'center', lg: 'start' }}
      gap={{ base: 4, lg: 1 }}
      minH={'25vh'}
      dir={isRTL ? 'rtl' : 'ltr'}
      position="relative"
      zIndex={1}
    >
      <MotionBox
        position="absolute"
        left={isRTL ? 'none' : '-0.3rem'}
        width="40%"
        height={'90%'}
        variants={childVariants1}
        initial="hidden"
        animate="visible"
        top={isRTL ? '1rem' : '2rem'}
        zIndex={0}
      >
        <MotionImage
          src={'/assets/AboutLayerBg.png'}
          alt=""
          fill
          variants={childVariants1}
          objectFit="cover"
          quality={50}
          priority
          style={{
            transform: isRTL ? 'none' : 'scaleX(-1)',
            filter: scroll ? 'saturate(400%) brightness(510%)' : '',
          }}
        />
      </MotionBox>
      <Flex
        flexDir="column"
        gap={5}
        fontSize={{ base: '1.4rem', lg: '1.9rem' }}
        fontWeight={700}
        color="#552A0E"
      >
        <Text pb={'1rem'}>{isRTL ? title_ar : title_en}</Text>
        <Box
          fontWeight={400}
           className='Readex-Light'
          fontSize={isMobile ? '1rem' : '1.1rem'}
          w={{ base: '100%', lg: '100%' }}
          dangerouslySetInnerHTML={{
            __html: isRTL ? Description_ar : Description_en,
          }}
          color="#552a0e"
          lineHeight="35px"
          sx={{
            strong: {
              color: '#F57D00',
            },
            // h1: {
            //   fontSize: isMobile ? '1.3rem' : '2rem',
            //   fontWeight: 400,
            // },
            // h2: {
            //   fontSize: isMobile ? '1.3rem' : '2rem',
            //   fontWeight: 400,
            // },
          }}
        />
      </Flex>
      {Image_url && (
        <Flex
          width={{ base: '100%', lg: '175vh' }}
          height={{ base: '15vh', lg: '35vh' }}
          overflow="hidden"
          justifyContent="center"
          position="relative"
        >
          <Image src={Image_url} alt="" fill objectFit="contain" />
        </Flex>
      )}
    </Flex>
  );
};

export default DanMeansComponent;
