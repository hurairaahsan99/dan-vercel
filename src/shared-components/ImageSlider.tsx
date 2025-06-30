'use client';
import React from 'react';
import Image from 'next/image';
import { Flex, Text } from '@chakra-ui/react';
import { useLanguage } from '@/context/LanguageProvider';
import styled from '@emotion/styled';

interface SliderProps {
  heading_en: string;
  heading_ar: string;
  images: string[];
}

const InfiniteScroll = styled.div`
  display: flex;
  animation: scroll 20s linear infinite;
  width: 200%;

  @keyframes scroll {
    0% {
      transform: translateX(-50%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  position: relative;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 50%;
  justify-content: space-around;

  @media (min-width: 1024px) {
    gap: 6rem;
  }
`;

const ImageSlider: React.FC<SliderProps> = ({
  heading_en,
  heading_ar,
  images,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const duplicatedImages = [...images, ...images, ...images,...images, ...images];

  return (
    <Flex
      bg="#F4E0CC"
      flexDir="column"
      justify="center"
      align="center"
      py="1rem"
      position="relative"
    >
      <Text
        fontSize={{ base: '24px', lg: '30px' }}
        fontWeight={700}
        dir={isRTL ? 'rtl' : 'ltr'}
        py="1rem"
        color="#552a0e"
      >
        {isRTL ? heading_ar : heading_en}
      </Text>
      <Wrapper>
        <InfiniteScroll>
          <ContentWrapper>
            {duplicatedImages?.map((res, index) => (
              <Flex
                key={`image-${index}`}
                width={{ base: '250px', lg: '400px' }}
                height={{ base: '75px', lg: '90px' }}
                minWidth="200px"
                position="relative"
                m={{ base: '0.5rem', lg: '1rem' }}
                overflow="hidden"
                bg="#F4E0CC"
                align="center"
                justify="center"
                sx={{
                  '& img': {
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                  },
                }}
              >
                <Image
                  src={res}
                  alt={`Image-${index}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: 'auto',
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                  }}
                />
              </Flex>
            ))}
          </ContentWrapper>
        </InfiniteScroll>
      </Wrapper>
    </Flex>
  );
};
export default ImageSlider;
