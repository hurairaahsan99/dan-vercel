import { Box, Flex } from '@chakra-ui/react';
import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import { motion, AnimatePresence } from 'framer-motion';

interface DanMeansRevampedProps {
  description: { en: string; ar: string };
  BgImage: string[];
  Logo: string[];
  stickyHeight?: number;
  scrollHeight?: number;
}

const variants = {
  enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 1 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir < 0 ? 300 : -300, opacity: 1 }),
};

const DanMeansRevamped: React.FC<DanMeansRevampedProps> = ({
  BgImage,
  description,
  Logo,
  stickyHeight = 700,
  scrollHeight = 250,
}) => {
  const [{ imageIndex, direction }, setImage] = useState({
    imageIndex: 0,
    direction: 0,
  });
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const containerRef = useRef<HTMLDivElement>(null);
  const totalHeight =
    typeof window !== 'undefined'
      ? stickyHeight + BgImage.length * scrollHeight
      : 0;

  useEffect(() => {
    const onScroll = () => {
      if (!containerRef.current) return;
      const { top } = containerRef.current.getBoundingClientRect();
      const raw = Math.min(
        Math.max(-top / (BgImage.length * scrollHeight), 0),
        1,
      );
      const newIndex = Math.min(
        Math.floor(raw * BgImage.length),
        BgImage.length - 1,
      );
      if (newIndex !== imageIndex) {
        setImage({
          imageIndex: newIndex,
          direction: newIndex > imageIndex ? 1 : -1,
        });
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [BgImage.length, imageIndex, scrollHeight]);

  return (
    <Box
      ref={containerRef}
      position="relative"
      height={`${totalHeight}px`}
      width="100%"
    >
      <Box
        position="sticky"
        top={'20%'}
        height={`${stickyHeight}px`}
        width="100%"
      >
        <AnimatePresence mode="sync" custom={direction} initial={false}>
          <motion.div
            key={imageIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.7 }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${BgImage[imageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 0,
            }}
          />
        </AnimatePresence>

        <Flex
          flexDir={{ base: 'column-reverse', lg: 'row' }}
          position="relative"
          zIndex={1}
          width="100%"
          height="100%"
          px={{ base: '1rem', lg: '3rem' }}
          justify="space-between"
          align="center"
          gap={{ base: '4rem', lg: 0 }}
        >
          <Box
            dir={isRTL ? 'rtl' : 'ltr'}
             className='Readex-Light'
            fontWeight={400}
            fontSize={{ base: '1rem', lg: '1.1rem' }}
            lineHeight="34px"
            color="white"
            dangerouslySetInnerHTML={{
              __html: isRTL ? description.ar : description.en,
            }}
            sx={{
              strong: {
                fontSize: { base: '1.4rem', lg: '1.8rem' },
                fontWeight: 700,
              }
            }}
          />

          <Flex
            direction={{ base: 'row', lg: 'column' }}
            gap="1rem"
            align="end"
            justify="center"
            w="100%"
            h="100%"
          >
            {Logo.slice(0, 4).map((src, i) => {
              const isActive = i === imageIndex;
              return (
                <Box
                  key={i}
                  w={{base:'40px',lg:"60px"}}
                  h={{base:'40px',lg:"60px"}}
                  position="relative"
                  filter={isActive ? 'none' : 'grayscale(100%)'}
                  opacity={isActive ? 1 : 0.5}
                  transition="filter 0.3s, opacity 0.3s"
                >
                  <Image
                    src={src}
                    alt={`Logo ${i + 1}`}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </Box>
              );
            })}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default DanMeansRevamped;
