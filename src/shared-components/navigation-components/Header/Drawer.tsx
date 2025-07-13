"use client";
import { useLanguage } from "@/context/LanguageProvider";
import {
  Drawer as ChakraDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Text,
  Box,
  Flex,
  Link,
  useMediaQuery,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const MenuDrawer: React.FC<{ isOpen: boolean; toggleDrawer: () => void }> = ({
  isOpen,
  toggleDrawer,
}) => {
  const { language, toggleLanguage } = useLanguage();
  const isRTL = language === 'ar';
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    const storedActiveMenu = localStorage.getItem('activeMenu');
    if (storedActiveMenu) {
      setActiveMenu(storedActiveMenu as any);
    }
  }, []);
  const handleMenuClick = (menuItem: any) => {
    setActiveMenu(menuItem);
    localStorage.setItem('activeMenu', menuItem);
  };
  return (
    <ChakraDrawer isOpen={isOpen} placement="top" onClose={toggleDrawer}>
      <DrawerOverlay>
        <DrawerContent mt={'5rem'} width="100%" bg="#FFFFFF">
          <DrawerBody>
            <Flex>
              <Flex flexDirection={isRTL ? 'row-reverse' : 'row'} width="100%">
                <Flex
                  as="nav"
                  gap={2}
                  display={{ base: 'flex', sm: 'none' }}
                  flexDirection={'column'}
                  textTransform="uppercase"
                  justify={'center'}
                  align="center"
                  fontWeight={500}
                  fontSize={{ base: '0.75rem', lg: '1rem' }}
                  textAlign={isRTL ? 'right' : 'left'}
                  py={3}
                  w="100%"
                >
                  <Link
                    href={isRTL ? '/ar/about-us' : '/en/about-us'}
                    _hover={{ textDecoration: 'none' }}
                    onClick={() => handleMenuClick('about-us')}
                    textTransform={'capitalize'}
                    bgColor={activeMenu === 'about-us' ? '#552A0E' : '#F7F1EB'}
                    color={activeMenu === 'about-us' ? 'white' : 'black'}
                    w="full"
                    py={'0.8rem'}
                    px={'0.8rem'}
                  >
                    {isRTL ? 'عن دان' : 'About Dan'}
                  </Link>

                  <Link
                    href={isRTL ? '/ar/our-projects' : '/en/our-projects'}
                    _hover={{ textDecoration: 'none', color: '#f7f1eb' }}
                    onClick={() => handleMenuClick('our-projects')}
                    textTransform={'capitalize'}
                    bgColor={
                      activeMenu === 'our-projects' ? '#552A0E' : '#F7F1EB'
                    }
                    color={activeMenu === 'our-projects' ? 'white' : 'black'}
                    w="full"
                    py={'0.8rem'}
                    px={'0.8rem'}
                  >
                    {isRTL ? 'مشاريعنا' : 'Our Projects'}
                  </Link>
                  <Link
                    href={isRTL ? '/ar/our-business' : '/en/our-business'}
                    _hover={{ textDecoration: 'none', color: '#f7f1eb' }}
                    onClick={() => handleMenuClick('our-business')}
                    textTransform={'capitalize'}
                    bgColor={
                      activeMenu === 'our-business' ? '#552A0E' : '#F7F1EB'
                    }
                    color={activeMenu === 'our-business' ? 'white' : 'black'}
                    w="full"
                    py={'0.8rem'}
                    px={'0.8rem'}
                  >
                    {isRTL ? 'أعمالنا' : 'Our Business'}
                  </Link>
                  <Link
                    href={isRTL ? '/ar/media-center' : '/en/media-center'}
                    _hover={{ textDecoration: 'none', color: '#f7f1eb' }}
                    onClick={() => handleMenuClick('media-centre')}
                    textTransform={'capitalize'}
                    bgColor={
                      activeMenu === 'media-centre' ? '#552A0E' : '#F7F1EB'
                    }
                    color={activeMenu === 'media-centre' ? 'white' : 'black'}
                    w="full"
                    py={'0.8rem'}
                    px={'0.8rem'}
                  >
                    {isRTL ? 'المركز الإعلامي' : 'Media Center'}
                  </Link>
                  {/* <Link
                    href={isRTL ? '/ar/sustainability' : '/en/sustainability'}
                    _hover={{ textDecoration: 'none', color: '#f7f1eb' }}
                    onClick={() => handleMenuClick('sustainability')}
                    textTransform={'capitalize'}
                    bgColor={
                      activeMenu === 'sustainability' ? '#552A0E' : '#F7F1EB'
                    }
                    color={activeMenu === 'sustainability' ? 'white' : 'black'}
                    w="full"
                    py={'0.8rem'}
                    px={'0.8rem'}
                  >
                    {isRTL ? 'الإستدامة' : 'Sustainability'}
                  </Link> */}
                  <Link
                    href={isRTL ? '/ar/contact-us' : '/en/contact-us'}
                    _hover={{ textDecoration: 'none', color: '#f7f1eb' }}
                    onClick={() => handleMenuClick('contact-us')}
                    textTransform={'capitalize'}
                    bgColor={
                      activeMenu === 'contact-us' ? '#552A0E' : '#F7F1EB'
                    }
                    color={activeMenu === 'contact-us' ? 'white' : 'black'}
                    w="full"
                    py={'0.8rem'}
                    px={'0.8rem'}
                  >
                    {isRTL ? 'تواصل معنا' : 'Contact Us'}
                  </Link>
                  <Box
                    display={{ base: 'block', sm: 'none' }}
                    mt={'0.5rem'}
                    px={{ base: 6, lg: 7 }}
                    py={2}
                    border={'1px solid black'}
                    borderRadius={'2xl'}
                    _hover={{ cursor: 'pointer' }}
                    fontWeight={400}
                    fontSize={{ base: '0.75rem', lg: '1rem' }}
                    onClick={() => toggleLanguage(isRTL ? 'en' : 'ar')}
                  >
                    <Text color="black">{isRTL ? 'English' : 'عــربـي'}</Text>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </ChakraDrawer>
  );
};

export default MenuDrawer;
