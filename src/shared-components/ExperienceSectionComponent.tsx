'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useLanguage } from '../context/LanguageProvider';
import Image from 'next/image';
import { useRef, useEffect } from 'react';

interface ExperienceSectionComponentProps {
  Title_en?: string;
  Title_ar?: string;
  Sub_Title_en: string;
  Sub_Title_ar: string;
  Description_en: string;
  Description_ar: string;
  Image: string;
  bg_color: string;
}
interface data {
  Heading_en: string;
  Heading_ar: string;
  data: ExperienceSectionComponentProps[];
  titleColor?: string;
}
const ExperienceSectionComponent: React.FC<data> = ({
  data,
  titleColor,
  Heading_en,
  Heading_ar,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY !== 0) {
        container.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <Flex
      position={'relative'}
      flexDir="column"
      w="100%"
      mt={{ base: '1rem', lg: '1.9rem' }}
      pl={{ base: '1.5rem', lg: '2rem' }}
      pr={{ base: '1.5rem', lg: '0' }}
      textAlign={'center'}
      gap={'1rem'}
      maxHeight="100%"
    >
      {(Heading_ar || Heading_en) && (
        <Text
          fontWeight={700}
          fontSize={{ base: '1.1rem', lg: '1.9rem' }}
          color={titleColor ? titleColor : '#552a0e'}
          textAlign={'center'}
          mb={{ base: '0.5rem', lg: '0.9rem' }}
        >
          {isRTL ? Heading_ar : Heading_en}
        </Text>
      )}
      <Flex
        flexDir={{ base: 'row', lg: 'row' }}
        ref={scrollRef}
        width="full"
        overflowX={{ base: 'auto', lg: 'auto' }}
        overflowY="hidden"
        maxW="100%"
        gap={{ base: '0.9rem', lg: '1.5rem' }}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        }}
      >
        {data?.map((res, index) => (
          <Flex
            key={index}
            p={'2rem'}
            zIndex={index}
            flexShrink={{ base: 'unset', lg: '0' }}
            minW={{ base: '85vw', lg: '20%' }}
            boxShadow="lg"
            w={{ base: '100%', lg: '17vw' }}
            backgroundImage={`url(${res.Image})`}
            backgroundSize="cover"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            overflow="hidden"
          >
            <Flex
              flexDir="column"
              justify="end"
              align={{ base: 'center', lg: 'start' }}
              width={{ base: '100%', lg: '100%' }}
              mt={{ base: 0, lg: '1.6rem' }}
              textAlign={{ base: 'center', lg: 'start' }}
              gap={{ base: 2, lg: 2 }}
              minH={'25vh'}
              minW={'25px'}
              dir={isRTL ? 'rtl' : 'ltr'}
              color="white"
            >
              <Box
                fontWeight={300}
                fontSize={{ base: '0.9rem', lg: '0.9rem' }}
                w={{ base: '100%', lg: '100%' }}
                dangerouslySetInnerHTML={{
                  __html: isRTL ? res?.Sub_Title_ar : res?.Sub_Title_en,
                }}
                sx={{
                  strong: {
                    color: '#552a0e',
                  },
                }}
              />
              {(res.Title_ar || res.Title_en) && (
                <Text
                  fontWeight={700}
                  fontSize={{ base: '1.4rem', lg: '1.4rem' }}
                >
                  {isRTL ? res.Title_ar : res.Title_en}
                </Text>
              )}
              <Box
                fontWeight={300}
                fontSize={{ base: '0.9rem', lg: '0.9rem' }}
                w={{ base: '100%', lg: '100%' }}
                dangerouslySetInnerHTML={{
                  __html: isRTL ? res?.Description_ar : res?.Description_en,
                }}
                sx={{
                  strong: {
                    color: '#552a0e',
                  },
                }}
              />
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
};

export default ExperienceSectionComponent;
