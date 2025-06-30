'use client';
import { useLanguage } from '@/context/LanguageProvider';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Slider,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';

interface HeroSectionSlide {
  id: number;
  BgVideo: {
    en?: string;
    ar?: string;
  };
  BgImage?: string;
  CenterLogo?: string;
  IsButton?: boolean;
  ButtonText?: {
    en: string;
    ar: string;
  };
  Title?: {
    en: string;
    ar: string;
  };
  SubTitle?: {
    en: string;
    ar: string;
  };
  Logo?: string;
  isFullView?: boolean;
}

interface HomePageHeroSectionData {
  Sliders: HeroSectionSlide[];
}

const HomePageHeroComponent: React.FC<HomePageHeroSectionData> = ({
  Sliders,
}) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const handlePrev = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentSlide((prevIndex) =>
        prevIndex === 0 ? Sliders.length - 1 : prevIndex - 1,
      );
    }, 200);
  };

  const handleNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsAnimating(false);
      setCurrentSlide((prevIndex) => (prevIndex + 1) % Sliders.length);
    }, 200);
  };

  const handlePlay = () => setIsPlaying(true);
  const handleClose = () => setIsPlaying(false);

  const currentContent = Sliders[currentSlide];

  const BackgroundAnimation = (index: number) => {
    if (index === 0) {
      return {
        initial: { opacity: 0, x: 0 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 0 },
      };
    }
    if (index === 1) {
      return {
        initial: { opacity: 0, x: -100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 },
      };
    } else if (index === 2) {
      return {
        initial: { opacity: 0, x: 100 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -100 },
      };
    }
    return {
      initial: { opacity: 0, x: -100 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 100 },
    };
  };
  const getPosition = (index: number) => {
    switch (index) {
      case 0:
        return {
          initial: { x: '-50%', y: '-100%', opacity: 0 },
          animate: { x: '-50%', y: '-50%', opacity: 1 },
        };
      case 1:
        return {
          initial: { x: '-50%', y: '-100%', opacity: 0 },
          animate: { x: '-50%', y: '-50%', opacity: 1 },
        };
      case 2:
        return {
          initial: { x: '-50%', y: '-100%', opacity: 0 },
          animate: { x: '-50%', y: '-50%', opacity: 1 },
        };
      default:
        return {
          initial: { x: '-50%', y: '-100%', opacity: 0 },
          animate: { x: '-50%', y: '-50%', opacity: 1 },
        };
    }
  };
  return (
    <Flex position="relative" justify="center">
      <Image
        src="/assets/HeaderLogo.png"
        alt=""
        objectFit="contain"
        width={120}
        height={60}
        style={{
          position: 'absolute',
          top: '95.5%',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <Box
        position="relative"
        w="100%"
        h={{ base: '40vh', md: '550px', lg: '600px', xl: '652px' }}
        overflow="hidden"
      >
        {Sliders.map(
          (res, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={BackgroundAnimation(index).initial}
                animate={BackgroundAnimation(index).animate}
                exit={BackgroundAnimation(index).exit}
                transition={{ duration: 0.7 }}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  zIndex: 1,
                }}
              >
                {/* Background Layer */}
                <Box position="absolute" w="100%" h="100%" zIndex={1}>
                  {`${process.env.NEXT_PUBLIC_BASE_API_URL}/storage/public/empty` ===
                    res.BgImage || res.BgImage == null
                    ? (res.BgVideo?.en || res.BgVideo?.ar) && (
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            zIndex: 1,
                          }}
                        >
                          <source
                            src={
                              isRTL && res.BgVideo?.ar
                                ? res.BgVideo.ar
                                : res.BgVideo?.en
                            }
                          />
                        </video>
                      )
                    : res.BgImage && (
                        <Image
                          src={res.BgImage}
                          alt=""
                          fill
                          objectFit="cover"
                          priority
                          quality={50}
                        />
                      )}
                </Box>
                <Box position="relative" w="100%" h="100%" zIndex={2}>
                  {!isPlaying && res.isFullView && (
                    <IconButton
                      aria-label="Play video"
                      icon={<FaPlay />}
                      position="absolute"
                      top={{ base: '33%', lg: '35%' }}
                      left="50%"
                      transform="translate(-50%, -50%)"
                      size="lg"
                      color="#FFAAAA"
                      w={{ base: '45px', lg: '50px' }}
                      h={{ base: '45px', lg: '50px' }}
                      borderRadius="full"
                      bg="whiteAlpha.500"
                      _hover={{ bg: 'whiteAlpha.100' }}
                      onClick={handlePlay}
                      zIndex={9}
                      cursor="pointer"
                    />
                  )}

                  {(currentContent.Title ||
                    currentContent.SubTitle ||
                    currentContent.CenterLogo) && (
                    <motion.div
                      key={index}
                      initial={getPosition(index).initial}
                      animate={getPosition(index).animate}
                      transition={{ duration: 1, ease: 'anticipate' }}
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 2,
                        width: '100%',
                      }}
                    >
                      <Flex
                        direction="column"
                        align="center"
                        justify="center"
                        color="white"
                        textAlign="center"
                        gap={{ base: 2, lg: 4 }}
                        px={4}
                      >
                        {currentContent.Title && (
                          <Text
                            fontSize={{ base: '14px', md: '24px', lg: '46px' }}
                            fontWeight={500}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          >
                            {isRTL
                              ? currentContent.Title.ar
                              : currentContent.Title.en}
                          </Text>
                        )}

                        {currentContent.SubTitle && (
                          <Text
                            fontSize={{ base: '12px', md: '16px', lg: '18px' }}
                            fontWeight={500}
                            dir={isRTL ? 'rtl' : 'ltr'}
                          >
                            {isRTL
                              ? currentContent.SubTitle.ar
                              : currentContent.SubTitle.en}
                          </Text>
                        )}

                        {currentContent.CenterLogo && (
                          <Box
                            width={{
                              base: index === 0 ? '140%' : '50%',
                              lg: index === 0 ? '70%' : '20%',
                            }}
                          >
                            <Image
                              src={currentContent.CenterLogo}
                              alt=""
                              layout="responsive"
                              objectFit="fill"
                              width={230}
                              height={50}
                            />
                          </Box>
                        )}
                      </Flex>
                    </motion.div>
                  )}
                </Box>
              </motion.div>
            ),
        )}
        <Box position="relative" width="100%" height="100%" overflow="hidden">
          <Box
            position="absolute"
            top="50%"
            left={{ base: '25px', sm: '70px' }}
            transform="translateY(-50%)"
            zIndex={999}
            onClick={handlePrev}
            cursor="pointer"
          >
            <Box width={{ base: '30px', sm: '40px', md: '45px', lg: '50px' }}>
              <Image
                src={'/assets/left.png'}
                alt=""
                objectFit="contain"
                width={50}
                height={50}
              />
            </Box>
          </Box>
          <Box
            position="absolute"
            top="50%"
            right={{ base: '25px', sm: '70px' }}
            transform="translateY(-50%)"
            zIndex={999}
            onClick={handleNext}
            cursor="pointer"
          >
            <Box width={{ base: '30px', sm: '40px', md: '45px', lg: '50px' }}>
              <Image
                src={'/assets/right.png'}
                alt=""
                objectFit="contain"
                width={50}
                height={50}
              />
            </Box>
          </Box>
        </Box>
        <Flex
          position="absolute"
          bottom={{ base: '20px', md: '40px' }}
          right={{ base: '40px', md: '70px' }}
          zIndex={2}
          gap={2}
        >
          {Sliders.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentSlide(index)}
              w={currentSlide === index ? (isMobile ? '12px' : '20px') : '8px'}
              h={currentSlide === index ? (isMobile ? '8px' : '12px') : '8px'}
              borderRadius="full"
              bg={currentSlide === index ? 'white' : 'gray.400'}
              transition="all 0.3s"
              cursor="pointer"
            />
          ))}
        </Flex>

        {/* Fullscreen Video */}
        {isPlaying && (
          <Box
            position="fixed"
            top={0}
            left={0}
            w="100vw"
            h="100vh"
            bg="blackAlpha.900"
            zIndex={9999}
          >
            <IconButton
              aria-label="Close video"
              icon={<IoIosClose />}
              position="absolute"
              top={8}
              right={8}
              size="lg"
              fontSize="4xl"
              color="white"
              bg="transparent"
              _hover={{ bg: 'whiteAlpha.200' }}
              onClick={handleClose}
              zIndex={9999}
              cursor="pointer"
            />
            <video
              autoPlay
              controls
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                zIndex: 9998,
              }}
            >
              <source
                src={
                  isRTL && currentContent.BgVideo?.ar
                    ? currentContent.BgVideo.ar
                    : currentContent.BgVideo?.en
                }
              />
            </video>
          </Box>
        )}
        {currentContent.IsButton && currentContent.ButtonText && (
          <Box
            position="absolute"
            bottom={{ base: '20px', md: '40px' }}
            left="50%"
            top="65%"
            transform="translateX(-50%)"
            zIndex={2}
          >
            <Button
              as="a"
              href="https://tuaja.com"
              target="_blank"
              bg="white"
              px={{ base: '1rem', lg: '1.7rem' }}
              py="1.5rem"
              fontSize={{ base: '10px', lg: '16px' }}
              fontWeight={600}
              color="#313131"
              borderRadius="xl"
              _hover={{ transform: 'scale(1.05)' }}
              transition="all 0.2s"
              cursor="pointer"
            >
              {isRTL
                ? currentContent.ButtonText.ar
                : currentContent.ButtonText.en}
            </Button>
          </Box>
        )}
      </Box>
    </Flex>
  );
};

export default HomePageHeroComponent;
