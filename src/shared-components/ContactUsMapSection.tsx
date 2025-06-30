'use client';
import { Box, Flex, Text } from '@chakra-ui/react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';

interface ContactUsMapSectionData {
  image: string;
  title: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}
interface ContactUsMapSectionProps {
  lat: number;
  lng: number;
  data: ContactUsMapSectionData[];
}

const ContactUsMapSection: React.FC<ContactUsMapSectionProps> = ({
  lat,
  lng,
  data,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  const MotionBox = motion(Box);
  const MotionImage = motion(Image);
  const bg_color = ['#089F86', '#F77C01', '#07628E', '#F04F4C'];
  return (
    <Box
      mx={{ base: '0rem', lg: '2rem' }}
      width={{ base: 'calc(100% - 0rem)', lg: 'calc(100% - 4rem)' }}
      h={{ base: '85vh', lg: '70vh' }}
    >
      <Box
        bg={`linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), black`}
        h="50vh"
      >
        <Map
          latitude={lat ? lat : 23.3}
          longitude={lng ? lng : 48.9}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
          zoom={12}
          style={{
            width: '100%',
            height: '100%',
          }}
          scrollZoom={false}
          doubleClickZoom={false}
          dragPan={false}
        >
          <Marker
            color="red"
            latitude={lat ? lat : 23.3}
            longitude={lng ? lng : 48.9}
          />
        </Map>
        <Flex
          flexDir={{ base: 'column', lg: 'row' }}
          justify="center"
          gap="1rem"
          mt={{ base: '1rem', lg: '2rem' }}
          mx={{ base: '1rem', lg: '2rem' }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          {data?.map((res: any, index: number) => {
            const color = bg_color[index % bg_color.length];
            return (
              <Flex
                key={index}
                align="center"
                px={{ base: '1rem', lg: '2rem' }}
                py="1rem"
                gap="1rem"
                minW={{ base: '200px', lg: '200px' }}
                border={`1px solid ${color}`}
              >
                {res.image && (
                  <MotionBox
                    width={{ base: '5vh', lg: '6vh' }}
                    bgColor={color}
                    p={{ base: 2, lg: 4 }}
                    borderRadius="full"
                    cursor="pointer"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MotionImage
                      src={res.image}
                      alt=""
                      objectFit="contain"
                      whileHover={{ scale: 1.2 }}
                      width={230}
                      height={50}
                    />
                  </MotionBox>
                )}
                <Box>
                  <Text
                    fontSize={{ base: '0.9rem', lg: '1rem' }}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    fontWeight={400}
                    color={color}
                    cursor="pointer"
                  >
                    {isRTL ? res.title.ar : res.title.en}
                  </Text>
                  <Text
                    fontSize={{ base: '1rem', lg: '1.1rem' }}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    fontWeight={400}
                    color={'black'}
                    cursor="pointer"
                  >
                    {isRTL ? res.description.ar : res.description.en}
                  </Text>
                </Box>
              </Flex>
            );
          })}
        </Flex>
      </Box>
    </Box>
  );
};

export default ContactUsMapSection;
