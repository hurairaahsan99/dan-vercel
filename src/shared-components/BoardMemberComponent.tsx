'use client';
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import Link from 'next/link';

interface BoardMemberProps {
  id: number;
  logo: string;
  title_en: string;
  title_ar: string;
  subTitle_en: string;
  subTitle_ar: string;
  bg_image: string;
  social_Icon: string;
  social_Link: string;
  description_en: string;
  description_ar: string;
  status: string;
}
interface BoardMemberDataProps {
  heading_en: string;
  heading_ar: string;
  cards: BoardMemberProps[];
}
const BoardMemberComponent: React.FC<BoardMemberDataProps> = ({
  heading_ar,
  heading_en,
  cards,
}) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedIcon, setSelectedIcon] = useState<BoardMemberProps | null>(
    null,
  );
  const handleIconClick = (icon: BoardMemberProps) => {
    setSelectedIcon(icon);
    onOpen();
  };
  return (
    <>
      <Flex
        flexDir="column"
        mt="2rem"
        mx={{ base: '1rem', lg: '2rem' }}
        width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
        justify="center"
        overflow="hidden"
      >
        <Flex alignItems="center" justifyContent="center" justify="start">
          <Text color={'#552A0E'} fontSize={{ base: '1.4rem', lg: '1.9rem' }} fontWeight={500}>
            {isRTL ? heading_ar : heading_en}
          </Text>
        </Flex>
        <Flex
          wrap="wrap"
          justify="center"
          columnGap={{ base: 1, lg: 5 }}
          rowGap={{ base: 1, lg: 5 }}
          width="100%"
          style={{ direction: isRTL ? 'rtl' : 'ltr' }}
        >
          {cards?.map((res, index) => (
            <Box
              key={index}
              mt="1rem"
              bgColor="#F7F7F7"
              display="flex"
              flexDir="column"
              justifyContent="space-between"
              width={{ base: '48%', lg: '32%' }}
            >
              <Flex
                flexDir={'row'}
                justify="space-between"
                px={{ base: '0.5rem', lg: '1.5rem' }}
                pt={{ base: '0.3rem', lg: '1rem' }}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <Flex
                  flexDir="column"
                  alignItems="start"
                  justify="start"
                  gap={'0.1rem'}
                  color="#552A0E"
                  textAlign="start"
                >
                  <Text
                    fontSize={{ base: '1rem', lg: '1.2rem' }}
                    fontWeight={600}
                  >
                    {isRTL ? res.title_ar : res.title_en}
                  </Text>
                  <Text
                    fontSize={{ base: '0.8rem', lg: '0.9rem' }}
                    fontWeight={400}
                    className="Readex-Light"
                  >
                    {isRTL ? res.subTitle_ar : res.subTitle_en}
                  </Text>
                  <Flex
                    display={{ base: 'none', lg: 'flex' }}
                    width={{ base: '50px', lg: '110px' }}
                    mt="1rem"
                  >
                    <Image
                      src={res.logo}
                      alt=""
                      layout="responsive"
                      objectFit="contain"
                      width={230}
                      height={50}
                    />
                  </Flex>
                </Flex>
                {res.status ? (
                  <Link href={res.social_Link} target="_blank">
                    <Box width={{ base: '18px', lg: '25px' }} mt={2}>
                      <Image
                        src={res.social_Icon}
                        alt=""
                        layout="responsive"
                        objectFit="contain"
                        width={230}
                        height={50}
                      />
                    </Box>
                  </Link>
                ) : (
                  ''
                )}
              </Flex>
              <Flex
                width={{ base: '20vh', lg: '42vh' }}
                h={{ base: '20vh', lg: '40vh' }}
                mt={4}
                onClick={() => handleIconClick(res)}
                cursor="pointer"
                position="relative"
              >
                <Image
                  src={res.bg_image}
                  alt=""
                  fill
                  objectFit="cover"
                  objectPosition={res.id == 30 ? 'center left' : 'initial'}
                  style={{ transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)' }}
                />
              </Flex>
            </Box>
          ))}
        </Flex>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay h="100vh" />
        <ModalContent
          maxW={{ base: '90vw', lg: '70vw' }}
          w={{ base: '90vw', lg: '80vw' }}
          position="relative"
          mt={{ base: '5rem' }}
        >
          <ModalCloseButton
            position="absolute"
            top="-40px"
            right="-2px"
            color="#E55A52"
            fontSize="1rem"
            p={3}
            bg="white"
            borderRadius="full"
            zIndex={1}
          />
          <ModalBody>
            {selectedIcon && (
              <Flex
                flexDir={{ base: 'column', lg: isRTL ? 'row-reverse' : 'row' }}
                gap={5}
                pb="7rem"
              >
                <Box>
                  <Flex width={{ lg: '40vh' }} mt={4}>
                    <Image
                      src={selectedIcon.bg_image}
                      alt=""
                      layout="responsive"
                      objectFit="cover"
                      width={200}
                      height={200}
                      style={{ transform: isRTL ? 'scaleX(-1)' : 'scaleX(1)' }}
                    />
                  </Flex>
                  <Flex
                    flexDir={'row'}
                    justify="space-between"
                    px={{ base: '0.5rem', lg: '1.5rem' }}
                    py={{ base: '0.3rem', lg: '1.4rem' }}
                    dir={isRTL ? 'rtl' : 'ltr'}
                    align="center"
                    bgColor="#552A0E"
                  >
                    <Flex
                      flexDir="column"
                      alignItems="start"
                      justify="start"
                      gap={'0.1rem'}
                      color="#FFFFFF"
                      textAlign="start"
                    >
                      <Text
                        fontSize={{ base: '1rem', lg: '1.2rem' }}
                        fontWeight={600}
                      >
                        {isRTL ? selectedIcon.title_ar : selectedIcon.title_en}
                      </Text>
                      <Text
                        fontSize={{ base: '0.8rem', lg: '0.9rem' }}
                        fontWeight={400}
                      >
                        {isRTL
                          ? selectedIcon.subTitle_ar
                          : selectedIcon.subTitle_en}
                      </Text>
                      <Flex
                        display={{ base: 'none', lg: 'flex' }}
                        width={{ base: '50px', lg: '105px' }}
                        mt="1rem"
                      >
                        <Image
                          src={selectedIcon.logo}
                          alt=""
                          layout="responsive"
                          objectFit="contain"
                          width={230}
                          height={50}
                        />
                      </Flex>
                    </Flex>
                    <Box width={{ base: '20px', lg: '40px' }} mt={2}>
                      <Image
                        src={selectedIcon.social_Icon}
                        alt=""
                        layout="responsive"
                        objectFit="contain"
                        width={230}
                        height={50}
                      />
                    </Box>
                  </Flex>
                </Box>
                <Box flex={1}>
                  <Box
                    fontSize={{ base: '0.8rem', lg: '0.9rem' }}
                    fontWeight={300}
                    lineHeight="26px"
                    dir={isRTL ? 'rtl' : 'ltr'}
                    dangerouslySetInnerHTML={{
                      __html: isRTL
                        ? selectedIcon.description_ar
                        : selectedIcon.description_en,
                    }}
                    color="black"
                    sx={{
                      strong: {
                        color: '#552a0e',
                      },
                    }}
                  />
                </Box>
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default BoardMemberComponent;
