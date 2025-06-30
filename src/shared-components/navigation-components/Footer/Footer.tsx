'use client';
import { useLanguage } from '@/context/LanguageProvider';
import {
  Box,
  Divider,
  Flex,
  Link,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import useFetch from '@/Utils/Fetch/useFetch';

const Footer = () => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [activeMenu, setActiveMenu] = useState(null);

  const [isMobile] = useMediaQuery('(max-width: 768px)');
  const handleMenuClick = (menuItem: any) => {
    setActiveMenu(menuItem);
    localStorage.setItem('activeMenu', menuItem);
  };

  // Store which contact-form tab should open when navigating to the Contact-Us page
  const setContactFormIndex = (index: number) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('contactFormIndex', index.toString());
    }
  };

  const {
    data: footerData,
    isLoading: isFooterLoading,
    error: footerError,
  } = useFetch<any>('/fetch_dan_Footer', 'GET');
  const {
    data: socialData,
    isLoading: isSocialLoading,
    error: socialError,
  } = useFetch<any>('/fetch_dan_Social_Media', 'GET');
  if (isFooterLoading || isSocialLoading) {
    return <></>;
  }
  return (
    <Flex
      position={'relative'}
      flexDir="column"
      bgColor="#552A0E"
      px={{ base: '1rem', lg: '5rem' }}
      overflow="hidden"
      zIndex={0}
    >
      <Box
        position="absolute"
        right={isRTL ? 'none' : '-2.3rem'}
        left={isRTL ? '-0.5rem' : 'none'}
        width="40%"
        height={'100%'}
        bottom={isRTL ? '1rem' : '1rem'}
      >
        <Image
          src={'/assets/FooterLayer.png'}
          alt=""
          fill
          objectFit="cover"
          quality={50}
          priority
          style={{ transform: isRTL ? 'scaleX(-1)' : 'none', opacity: '0.5' }}
        />
      </Box>
      <Image
        width={100}
        height={100}
        objectFit="contain"
        priority
        src={footerData?.logo}
        style={{
          position: 'absolute',
          top: '0%',
          right: isMobile ? '4%' : isRTL ? '90%' : '4%',
          border: 'none',
          zIndex: 1,
          width: isMobile ? 50 : 70,
          height: isMobile ? 50 : 100,
          background: 'none',
          backgroundColor: 'transparent',
        }}
        alt="1"
      />
      <Flex
        gap={{ base: '2rem', lg: '3rem' }}
        color="white"
        flexDirection={isRTL ? 'row-reverse' : 'row'}
        textTransform="uppercase"
        justify={{ base: 'center', lg: isRTL ? 'end' : 'start' }}
        align="center"
        fontWeight={700}
        fontSize={{ base: '0.9rem', lg: '1rem' }}
        textAlign={isRTL ? 'right' : 'left'}
        mt={3}
        py={'2.5rem'}
        flexWrap={'wrap'}
        zIndex={1}
      >
        <Link
          href={isRTL ? '/ar/media-center' : '/en/media-center'}
          _hover={{ textDecoration: 'none', color: '#E9810B' }}
          onClick={() => handleMenuClick('sustainability')}
          color={activeMenu === 'sustainability' ? '#E9810B' : 'white'}
          textTransform={'capitalize'}
        >
          {isRTL ? 'الشركاء' : 'Media Center'}
        </Link>
        <Link
         href={isRTL ? '/ar/contact-us' : '/en/contact-us'}
          _hover={{ textDecoration: 'none', color: '#E9810B' }}
          onClick={() => {
            setContactFormIndex(2); // Careers tab index in ContactUsDisplayForm
            handleMenuClick('our-business');
          }}
          color={activeMenu === 'our-business' ? '#E9810B' : 'white'}
          textTransform={'capitalize'}
        >
        {isRTL ? 'الموردين' : 'Careers'}
        </Link>
        <Link
          href={isRTL ? '/ar/contact-us' : '/en/contact-us'}
          _hover={{ textDecoration: 'none', color: '#E9810B' }}
          onClick={() => {
            setContactFormIndex(3); // Suppliers tab index
            handleMenuClick('sustainability');
          }}
          color={activeMenu === 'sustainability' ? '#E9810B' : 'white'}
          textTransform={'capitalize'}
        >
         {isRTL ? 'الوظائف' : 'Suppliers'}
        </Link>
        <Link
          href={isRTL ? '/ar/contact-us' : '/en/contact-us'}
          _hover={{ textDecoration: 'none', color: '#E9810B' }}
          onClick={() => {
            setContactFormIndex(1); // Partners (Business Partner) tab index
            handleMenuClick('sustainability');
          }}
          color={activeMenu === 'sustainability' ? '#E9810B' : 'white'}
          textTransform={'capitalize'}
        >
         {isRTL ? 'المركز الإعلامي' : 'Partners'}
        </Link>
        <Link
          href={isRTL ? '/ar/contact-us' : '/en/contact-us'}
          _hover={{ textDecoration: 'none', color: '#E9810B' }}
          onClick={() => handleMenuClick('contact-us')}
          color={activeMenu === 'contact-us' ? '#E9810B' : 'white'}
          textTransform={'capitalize'}
        >
          {isRTL ? 'تواصل عنا' : 'Contact Us'}
        </Link>
      </Flex>
      <Divider color="#FFFFFF99" opacity="0.3" />
      <Flex
        pt={'1.5rem'}
        justify="space-between"
        align={{ base: 'center', lg: 'start' }}
        flexDir={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }}
      >
        <Link href={footerData?.social_media_link} target="_blank">
          <Flex
            h={{ base: '45px', lg: '45px' }}
            position="relative"
            w={{ base: isRTL?'240px':'200px', lg: isRTL?'260px':'230px' }}
          >
            <Image
              src={isRTL ? '/assets/pifAR.png' : footerData?.logo1}
              alt={''}
              layout="responsive"
              width={100}
              height={70}
              objectFit="contain"
              priority
            />
          </Flex>
        </Link>
        <Flex gap={2} mt={2}>
          {socialData?.data?.map(
            (
              {
                social_media_link,
                image,
                status,
              }: {
                social_media_link: string;
                image: string;
                status: string;
              },
              index: number,
            ) => (
              <Flex key={index}>
                {status == '1' && (
                  <Link
                    href={social_media_link && social_media_link}
                    isExternal
                    alignItems="start"
                  >
                    <Box
                      h={{ base: '30px', lg: '70px' }}
                      position="relative"
                      w={{ base: '30px', lg: '30px' }}
                    >
                      {image && image !== '' ? (
                        <Image
                          src={image}
                          alt={''}
                          width={100}
                          height={70}
                          objectFit="contain"
                          priority
                        />
                      ) : null}
                    </Box>
                  </Link>
                )}
              </Flex>
            ),
          )}
        </Flex>
        <Flex
          fontSize="1rem"
          color="white"
          mt={3}
          whiteSpace="nowrap"
          gap={4}
          opacity={0.9}
        >
          <Text>{isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}</Text>
          <Text>{isRTL ? 'الشروط والقوانين' : 'Terms and Conditions'}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
