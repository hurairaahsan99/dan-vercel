'use client';
import { useLanguage } from '@/context/LanguageProvider';
import { Flex, Box, Text, Grid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface FranchiseOpportunityData {
  logo: string;
  title: {
    en: string;
    ar: string;
  };
}
interface FranchiseOpportunityProps {
  heading: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  last_description: {
    en: string;
    ar: string;
  };
  cards: FranchiseOpportunityData[];
}

const FranchiseOpportunityComponent: React.FC<FranchiseOpportunityProps> = ({
  heading,
  description,
  last_description,
  cards,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const MotionBox = motion(Box);
  const MotionImage = motion(Image);
  return (
    <Flex
      position={'relative'}
      flexDir="column"
      mx={{ base: '1rem', lg: '2rem' }}
      width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
      textAlign={'center'}
      gap={'1rem'}
      mt={'0.5rem'}
      overflow="hidden"
      color={'#552A0E'}
    >
      <Flex justify="center" align="center" mb="0.8rem">
        {(heading.en || heading.ar) && (
          <Text
            fontWeight={500}
            fontSize={{ base: '1.6rem', lg: '1.9rem' }}
            color={'#552a0e'}
          >
            {isRTL ? heading.ar : heading.en}
          </Text>
        )}
      </Flex>
      <Box>
        <Text
          fontWeight={400}
          fontSize={{ base: '0.9rem', lg: '1.1rem' }}
        >
          {isRTL ? description.ar : description.en}
        </Text>
      </Box>
      <Grid
        gap={{ base: '0.8rem', lg: '1rem' }}
        templateRows={{ lg: 'repeat(1, 1fr)' }}
        templateColumns={{ lg: 'repeat(4, 1fr)' }}
        dir={isRTL ? 'rtl' : 'ltr'}
        mx={{ base: '2rem', lg: '0rem' }}
      >
        {cards?.map((res, index) => (
          <Flex
            key={index}
            flexDir="column"
            justify="center"
            align="center"
            gap={{ base: '0.8rem', lg: '1rem' }}
            width={{ base: '100%' }}
            bg="#F4E0CC"
            py="2rem"
          >
            <MotionBox width={{ base: '8vh', lg: '8vh' }} borderRadius="full">
              <MotionImage
                src={res.logo}
                alt=""
                objectFit="contain"
                whileHover={{ scale: 1.1 }}
                width={230}
                height={50}
              />
            </MotionBox>
            <Text
              fontSize={{ base: '1rem', lg: '1.1rem' }}
              fontWeight={400}
            >
              {isRTL ? res.title.ar : res.title.en}
            </Text>
          </Flex>
        ))}
      </Grid>
      <Box>
        <Text
          fontWeight={400}
          fontSize={{ base: '0.9rem', lg: '1rem' }}
        >
          {isRTL ? last_description.ar : last_description.en}
        </Text>
      </Box>
    </Flex>
  );
};

export default FranchiseOpportunityComponent;
