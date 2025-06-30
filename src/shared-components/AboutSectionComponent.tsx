'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useLanguage } from '../context/LanguageProvider';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';
import DynamicModal from '@/shared-components/ContactUsSectionForms/DynamicModal';

interface AboutSectionComponentProps {
  Heading_en?: string;
  Heading_ar?: string;
  Description_en: string;
  Description_ar: string;
  BgImage?: string;
  Logo?: string;
  cards?: [
    {
      title: {
        en: string;
        ar: string;
      };
      logo: string;
      bg_color?: string;
    },
  ];
}
interface data {
  data: AboutSectionComponentProps;
  titleColor?: string;
  marginX?: string;
  inView: boolean;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};
const childVariants1 = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.5, ease: 'easeOut' },
  },
};
const AboutSectionComponent: React.FC<data> = ({
  data,
  titleColor,
  marginX,
  inView,
}) => {
  const MotionBox = motion(Box);
  const MotionImage = motion(Image);
  const MotionText = motion(Text);
  const { language } = useLanguage();
  const isRTL = language === 'ar';
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
  const controls = useAnimation();
  useEffect(() => {
    const timer = setTimeout(() => {
      controls.start({
        rotate: 180,
        transition: { duration: 2, ease: 'easeInOut' },
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [controls]);
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      style={{
        position: 'relative',
        width: '100%',
        textAlign: 'center',
        overflow: 'hidden',
      }}
      animate={inView ? 'visible' : 'hidden'}
    >
      {data.BgImage && (
        <MotionBox
          position="absolute"
          left={isRTL ? '55rem' : '-2.3rem'}
          width="40%"
          height={'90%'}
          variants={childVariants1}
          top={isRTL ? '1rem' : '2rem'}
          zIndex={0}
        >
          <MotionImage
            src={data.BgImage}
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
      )}
      <MotionBox
        // variants={containerVariants}
        px={{ base: '1.5rem', lg: marginX ? marginX : '5rem' }}
      >
        <Flex justify="center" align="center" mb="0.8rem">
          {data.Heading_en || data.Heading_ar ? (
            <MotionText
              // variants={childVariants}
              fontWeight={700}
              fontSize={{ base: '24px', lg: '30px' }}
              color={titleColor ? titleColor : '#552a0e'}
            >
              {isRTL ? data?.Heading_ar : data?.Heading_en}
            </MotionText>
          ) : (
            data.Logo && (
              <MotionBox
                w={{ base: '50px', lg: '80px' }}
                my={3}
                initial={{ rotate: 0 }}
                animate={controls}
              >
                <Image
                  src={data.Logo}
                  alt=""
                  layout="responsive"
                  width={230}
                  height={50}
                />
              </MotionBox>
            )
          )}
        </Flex>
        <MotionBox
          // variants={childVariants}
          fontWeight={400}
          fontSize={{ base: '1rem', lg: '1.1rem' }}
          dir={isRTL ? 'rtl' : 'ltr'}
          className='Readex-Light'
          dangerouslySetInnerHTML={{
            __html: isRTL ? data?.Description_ar : data?.Description_en,
          }}
          color="#552a0e"
          sx={{
            strong: {
              color: '#552a0e',
            },
          }}
        />
      </MotionBox>
    </motion.div>
  );
};

export default AboutSectionComponent;
