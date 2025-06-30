"use client";
import { useLanguage } from "@/context/LanguageProvider";
import { Box, Flex, Link, Text, IconButton } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import Image from 'next/image';
import '@/app/globals.css';
import MenuDrawer from './Drawer';
import { RxCrossCircled } from 'react-icons/rx';
import { usePathname } from "next/navigation";

const Navbar = () => {
   const { language, toggleLanguage } = useLanguage();
  const isRTL = language === "ar";
  const pathname = usePathname();

  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  // Scroll effect for background
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set active menu from current route path
  useEffect(() => {
    if (!pathname) return;

    if (pathname.includes("about-us")) {
      setActiveMenu("about-us");
    } else if (pathname.includes("our-projects")) {
      setActiveMenu("our-projects");
    } else if (pathname.includes("our-business")) {
      setActiveMenu("our-business");
    } else if (pathname.includes("media-center")) {
      setActiveMenu("media-centre");
    } else if (pathname.includes("contact-us")) {
      setActiveMenu("contact-us");
    } else {
      setActiveMenu(null);
    }
  }, [pathname]);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <Box
      as="header"
      position="fixed"
      width="100%"
      zIndex={99}
      px={4}
      className="container"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: scroll ? '#552a0e' : 'transparent',
        opacity: scroll ? '0.8' : '1',
        zIndex: -1,
      }}
    >
      <Flex align="center" px={8} pt={{ base: 6, md: 2 }} pb={2}>
        <Flex
          align="center"
          justify="space-between"
          flexDirection={isRTL ? 'row-reverse' : 'row'}
          width="100%"
        >
          <Box>
            <Link href={isRTL ? '/ar' : '/en'}>
              <Box
                w={{ base: '50px', lg: '80px' }}
                marginTop={2}
              >
                <Image
                  src="/DanLogo.png"
                  alt="1"
                  layout="responsive"
                  width={230}
                  height={50}
                />
              </Box>
            </Link>
          </Box>
          <Flex
            as="nav"
            gap={8}
            display={{ base: 'none', md: 'flex' }}
            color="white"
            flexDirection={isRTL ? 'row-reverse' : 'row'}
            textTransform="uppercase"
            justify={'center'}
            align="center"
            fontWeight={500}
            fontSize={{ base: '0.75rem', lg: '1rem' }}
            textAlign={isRTL ? 'right' : 'left'}
            mt={3}
            pb={3}
            borderBottom={'1px solid #FFFFFF33'}
          >
            <Flex flexDir={'column'} align="center" justify="center">
              <Link
                href={isRTL ? '/ar/about-us' : '/en/about-us'}
                _hover={{ textDecoration: 'none', color: '#f7f1eb' }}

                textTransform={'capitalize'}
              >
                {isRTL ? 'عن دان' : 'About Dan'}
              </Link>
              {activeMenu === 'about-us' ? (
                <Box
                  p={1}
                  bg="white"
                  borderRadius="full"
                  style={{ position: 'absolute', top: '73%' }}
                />
              ) : (
                <></>
              )}
            </Flex>
            <Flex flexDir={'column'} align="center" justify="center">
              <Link
                href={isRTL ? '/ar/our-projects' : '/en/our-projects'}
                _hover={{ textDecoration: 'none', color: '#f7f1eb' }}

                textTransform={'capitalize'}
              >
                {isRTL ? 'مشاريعنا' : 'Our Projects'}
              </Link>
              {activeMenu === 'our-projects' ? (
                <Box
                  p={1}
                  bg="white"
                  borderRadius="full"
                  style={{ position: 'absolute', top: '73%' }}
                />
              ) : (
                <></>
              )}
            </Flex>
            <Flex flexDir={'column'} align="center" justify="center">
              <Link
                href={isRTL ? '/ar/our-business' : '/en/our-business'}
                _hover={{ textDecoration: 'none', color: '#f7f1eb' }}

                textTransform={'capitalize'}
              >
                {isRTL ? 'أعمالنا' : 'Our Business'}
              </Link>
              {activeMenu === 'our-business' ? (
                <Box
                  p={1}
                  bg="white"
                  borderRadius="full"
                  style={{ position: 'absolute', top: '73%' }}
                />
              ) : (
                <></>
              )}
            </Flex>
            <Flex flexDir={'column'} align="center" justify="center">
              <Link
                href={isRTL ? '/ar/media-center' : '/en/media-center'}
                _hover={{ textDecoration: 'none', color: '#f7f1eb' }}

                textTransform={'capitalize'}
              >
                {isRTL ? 'المركز الإعلامي' : 'Media Center'}
              </Link>
              {activeMenu === 'media-centre' ? (
                <Box
                  p={1}
                  bg="white"
                  borderRadius="full"
                  style={{ position: 'absolute', top: '73%' }}
                />
              ) : (
                <></>
              )}
            </Flex>
            {/* <Flex flexDir={'column'} align="center" justify="center">
              <Link
                href={isRTL ? '/ar/sustainability' : '/en/sustainability'}
                _hover={{ textDecoration: 'none', color: '#f7f1eb' }}
                onClick={() => handleMenuClick('sustainability')}
                textTransform={'capitalize'}
              >
                {isRTL ? 'الإستدامة' : 'Sustainability'}
              </Link>
              {activeMenu === 'sustainability' ? (
                <Box
                  p={1}
                  bg="white"
                  borderRadius="full"
                  style={{ position: 'absolute', top: '73%' }}
                />
              ) : (
                <></>
              )}
            </Flex> */}
            <Flex flexDir={'column'} align="center" justify="center">
              <Link
                href={isRTL ? '/ar/contact-us' : '/en/contact-us'}
                _hover={{ textDecoration: 'none', color: '#f7f1eb' }}

                textTransform={'capitalize'}
              >
                {isRTL ? 'تواصل معنا' : 'Contact Us'}
              </Link>
              {activeMenu === 'contact-us' ? (
                <Box
                  p={1}
                  bg="white"
                  borderRadius="full"
                  style={{ position: 'absolute', top: '73%' }}
                />
              ) : (
                <></>
              )}
            </Flex>
          </Flex>
          <Flex justify="center" align="center" gap={2}>
            {/* <Box
              pl={4}
              border={'1px solid white'}
              borderRadius={'full'}
              _hover={{ cursor: 'pointer' }}
            >
              <IconButton
                icon={<IoReorderThreeOutline size={25} />}
                color="white"
                display={{ base: 'none', md: 'block' }}
                aria-label={''}
                variant="outline"
                border="unset"
                _hover={{ bg: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
                _active={{ bg: 'transparent' }}
                _focusVisible={{ outline: 'none' }}
              />
            </Box> */}
            <Box
              display={{ base: 'none', lg: 'block' }}
              px={{ base: 2, lg: 7 }}
              py={2}
              border={'1px solid white'}
              borderRadius={'2xl'}
              fontWeight={400}
              _hover={{ cursor: 'pointer' }}
              onClick={() => toggleLanguage(isRTL ? 'en' : 'ar')}
            >
              <Text color="white">{isRTL ? 'English' : 'عــربـي'}</Text>
            </Box>
          </Flex>
          {isOpen ? (
            <IconButton
              icon={<RxCrossCircled size={35} />}
              color="white"
              onClick={toggleDrawer}
              display={{ base: 'block', md: 'none' }}
              aria-label={''}
              variant="outline"
              border="unset"
              _hover={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
              _active={{ bg: 'transparent' }}
              _focusVisible={{ outline: 'none' }}
            />
          ) : (
            <IconButton
              icon={<IoReorderThreeOutline size={30} />}
              color="white"
              onClick={toggleDrawer}
              display={{ base: 'block', md: 'none' }}
              aria-label={''}
              variant="outline"
              border="unset"
              _hover={{ bg: 'transparent' }}
              _focus={{ boxShadow: 'none' }}
              _active={{ bg: 'transparent' }}
              _focusVisible={{ outline: 'none' }}
            />
          )}
        </Flex>
      </Flex>
      <MenuDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </Box>
  );
};

export default Navbar;
