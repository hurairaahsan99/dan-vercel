'use client';
import React, { useEffect, useRef, useState } from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import ImagepathGenerator from '@/Utils/ImagepathGenerator';

interface Cards {
  logo: string;
  time_en: string;
  time_ar: string;
  route_en: string;
  route_ar: string;
}

interface Coordinate {
  lat: number;
  lng: number;
}

interface DataItem {
  title_en?: string;
  title_ar?: string;
  heading_en?: string;
  heading_ar?: string;
  desc_en: string;
  desc_ar: string;
  Logo?: string;
  lat?: number;
  lng?: number;
  cards?: Cards[];
  coordinates?: Coordinate[];
}
interface Data {
  Data: DataItem[];
}
const MapComponent: React.FC<Data> = ({ Data }) => {
  const [isMapInteractive, setIsMapInteractive] = useState(false);
  const [viewState, setViewState] = useState({
    longitude: 49.6,
    latitude: 25.38,
    zoom: 7,
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const [isMobile] = useMediaQuery('(max-width: 768px)');

  const handlePrev = () => {
    setIsAnimating((prev) => !prev);
    setViewState({
      ...viewState,
      longitude: 48.8,
      latitude: 24.38,
      zoom: 7,
    });
    setCurrentSlide((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1,
    );
  };
  const handleNext = () => {
    setIsAnimating((prev) => !prev);
    setViewState({ ...viewState, longitude: 48.8, latitude: 24.38, zoom: 9 });
    setCurrentSlide((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1,
    );
  };
  const currentContent = Data[currentSlide];
  const getLatitude = () => {
    const lat =
      currentContent?.coordinates?.[0]?.lat ?? currentContent?.lat ?? null;
    if (lat === null) return isMobile ? 23.38 : 48.9;
    const parsedLat = Number(lat);
    return isMobile ? parsedLat - 4 : parsedLat;
  };

  const getLongitude = () => {
    const lng =
      currentContent?.coordinates?.[0]?.lng ?? currentContent?.lng ?? null;
    if (lng === null) return 48.9;
    const parsedLng = Number(lng);
    return isRTL ? parsedLng + 4 : parsedLng - 2;
  };
  const latitude = getLatitude();
  const longitude = getLongitude();
  return (
    <Flex
      mx={{ base: '0rem', lg: '2rem' }}
      width={{ base: '"calc(100% - 2rem)"', lg: 'calc(100% - 4rem)' }}
      height={{ base: '200vh', lg: '780px' }}
      position="relative"
      overflow="hidden"
      flexDir={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }}
    >
      <Box
        position="absolute"
        top="0"
        left="0"
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.3)"
        zIndex={10}
        pointerEvents="none"
        overflow="hidden"
      />
      <Flex
        bg="#f7f1eb"
        height={{ base: '100%', lg: '780px' }}
        width={{ base: '100%', lg: '100%' }}
        zIndex={11}
        minW={{ lg: '510px' }}
        overflow="hidden"
        px={{ base: '1rem', lg: '2rem' }}
        py={{ base: '', lg: '1rem' }}
      >
        <Flex
          flexDir="column"
          width="100%"
          dir={isRTL ? 'rtl' : 'ltr'}
          zIndex={111}
          overflow="hidden"
        >
          <Text
            lineHeight={'20px'}
            color={'#552A0E'}
            textAlign={'start'}
            dir={isRTL ? 'rtl' : 'ltr'}
            fontSize={{ base: '0.8rem', lg: '1rem' }}
            fontWeight={300}
            whiteSpace="nowrap"
          >
            {isRTL ? currentContent?.title_ar : currentContent?.title_en}
          </Text>
          <Text
            lineHeight={'40px'}
            mb={'0.5rem'}
            color="#EE0D0D"
            fontSize={{ base: '1.4rem', lg: '2.4rem' }}
            fontWeight={400}
            whiteSpace="nowrap"
          >
            {isRTL ? currentContent?.heading_ar : currentContent?.heading_en}
          </Text>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
            gap={{ base: 1, lg: 4 }}
            alignItems="center"
            justifyContent="center"
            textAlign="start"
          >
            {currentContent?.cards?.map((re, index) => (
              <GridItem
                key={index}
                display="flex"
                flexDirection="row"
                alignItems="center"
              >
                <Box
                  width={{ base: '35px', lg: '45px' }}
                  height={{ base: '50px', lg: '50px' }}
                  marginRight="0.3rem"
                  position="relative"
                >
                  <Image
                    src={ImagepathGenerator(re?.logo)}
                    alt=""
                    fill
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                      position: 'absolute',
                    }}
                  />
                </Box>
                <Box>
                  <Text
                    color="#F57D00"
                    fontSize={{ base: '0.8rem', lg: '0.8rem' }}
                    fontWeight={700}
                    whiteSpace="wrap"
                  >
                    {isRTL ? re?.time_ar : re?.time_en}
                  </Text>
                  <Text
                    color="black"
                    fontSize={{ base: '0.7rem', lg: '0.8rem' }}
                    fontWeight={300}
                    whiteSpace="wrap"
                  >
                    {isRTL ? re?.route_ar : re?.route_en}
                  </Text>
                </Box>
              </GridItem>
            ))}
          </Grid>
          {currentContent?.Logo && (
            <Box width={{ base: '10%', lg: '12%' }} marginRight="1rem">
              <Image
                src={currentContent?.Logo}
                alt=""
                layout="responsive"
                objectFit="fill"
                width={100}
                height={100}
              />
            </Box>
          )}
          <Flex
            mt="1rem"
            gap={1}
            flexDir="column"
            textAlign="start"
            fontSize={{ base: '0.9rem', lg: '1rem' }}
            dangerouslySetInnerHTML={{
              __html: isRTL ? currentContent?.desc_ar : currentContent?.desc_en,
            }}
            color="black"
            sx={{
              h3: {
                color: '#F57D00',
              },
              h2: {
                color: '#F57D00',
              },
              ul: {
                marginLeft: '0.8rem',
              },
            }}
          />
          {Data.length > 0 ? (
            <Flex
              justify="start"
              flexDir={isRTL ? 'row-reverse' : 'row'}
              mt={{ base: '1rem', lg: '2rem' }}
            >
              <Box
                width={{ base: '4vh', lg: '6vh' }}
                height="auto"
                marginRight="1rem"
                cursor="pointer"
                onClick={handlePrev}
              >
                <Image
                  src={'/assets/MapLeft.png'}
                  alt=""
                  layout="responsive"
                  objectFit="fill"
                  width={100}
                  height={100}
                />
              </Box>
              <Box
                width={{ base: '4vh', lg: '6vh' }}
                marginRight="1rem"
                cursor="pointer"
                onClick={handleNext}
              >
                <Image
                  src={'/assets/MapRight.png'}
                  alt=""
                  layout="responsive"
                  objectFit="fill"
                  width={100}
                  height={100}
                />
              </Box>
            </Flex>
          ) : (
            <></>
          )}
        </Flex>
      </Flex>
      <Box
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: isMapInteractive ? 'auto' : 'none',
          // maxHeight: '400px',
        }}
        onMouseEnter={() => setIsMapInteractive(true)}
        onMouseLeave={() => setIsMapInteractive(false)}
        onTouchStart={() => setIsMapInteractive(true)}
        onTouchEnd={() => setIsMapInteractive(false)}
      >
        <Map
          latitude={latitude}
          longitude={longitude}
          mapStyle="mapbox://styles/hurairahsan99/cm63iriel008j01s72kly3y2q"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          attributionControl={true}
          // dragRotate={false}
          // doubleClickZoom={false}
          scrollZoom={true}
          // touchZoomRotate={false}
          // keyboard={false}

          zoom={isAnimating ? 7 : 6}
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <NavigationControl showZoom={true} showCompass={true} />
          {currentContent?.lat && currentContent?.lng ? (
            <Marker
              longitude={currentContent.lng}
              latitude={currentContent.lat}
              color="red"
              anchor="bottom"
            >
              <Box
                style={{
                  position: 'relative',
                  width: '20rem',
                  height: '20rem',
                }}
              >
                <Image
                  src="/assets/mapArea.png"
                  alt=""
                  objectFit="contain"
                  width={100}
                  height={100}
                  style={{
                    width: isMobile ? '50%' : '100%',
                    height: isMobile ? '100%' : '200%',
                    position: 'absolute',
                    top: isMobile ? 260 : 0,
                    left: isMobile ? -80 : 50,
                    zIndex: 1,
                  }}
                />
                <Text
                  lineHeight={'40px'}
                  mb={'0.5rem'}
                  color="white"
                  fontSize={{ base: '1.4rem', lg: '1.4rem' }}
                  fontWeight={700}
                  whiteSpace="nowrap"
                  style={{
                    width: '32px',
                    height: '32px',
                    position: 'absolute',
                    bottom: '-7%',
                    left: isMobile ? '-10%' : '55%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    filter: 'brightness(8.5)',
                    direction: isRTL ? 'ltr' : 'ltr',
                  }}
                >
                  {isRTL
                    ? currentContent?.heading_ar
                    : currentContent?.heading_en}
                </Text>
                <Image
                  src="/assets/mapMarker1.png"
                  alt=""
                  objectFit="contain"
                  width={100}
                  height={100}
                  style={{
                    width: '32px',
                    height: '32px',
                    position: 'absolute',
                    bottom: '-15%',
                    left: isMobile ? '-10%' : '60%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    cursor: 'pointer',
                    filter: 'contrast(3.5)',
                  }}
                />
              </Box>
            </Marker>
          ) : (
            currentContent?.coordinates?.map((res, index) => (
              <Marker
                key={index}
                longitude={res.lng}
                latitude={res.lat}
                color="red"
              />
            ))
          )}
        </Map>
      </Box>
    </Flex>
  );
};

export default MapComponent;