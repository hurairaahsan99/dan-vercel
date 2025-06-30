'use client'
import { useLanguage } from "@/context/LanguageProvider";
import { Box, Button, Collapse, Text, Flex } from "@chakra-ui/react";
import Image from "next/image";
import { useState } from 'react';

interface FAQProps {
  question?: {
    en: string;
    ar: string;
  };
  answer?: {
    en: string;
    ar: string;
  };
}
interface FAQData {
  data: FAQProps[];
}
const FaQComponent: React.FC<FAQData> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <Box
      mx={{ base: '1rem', lg: '2rem' }}
      gap={{ base: 1, lg: 2 }}
      width={{ base: '"calc(100% - 2rem)"', lg: 'calc(100% - 4rem)' }}
      mb={'2rem'}
      color="#552a0e"
    >
      <Text
        mb={{ base: '1rem', lg: '1.5rem' }}
        fontSize={{ base: '1.4rem', lg: '1.9rem' }}
        fontWeight={500}
        textAlign={'start'}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {isRTL ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
      </Text>
      {data?.map((res, index) => (
        <Box key={index} bg={openIndex === index ? 'white' : 'initials'}>
          <Button
            bg={openIndex === index ? 'white' : '#F5E7D5'}
            _hover={{ backgroundColor: '#f0e2d1', cursor: 'pointer' }}
            onClick={() => handleToggle(index)}
            w="full"
            textAlign={'start'}
            dir={isRTL ? 'rtl' : 'ltr'}
            justifyContent="flex-start"
            gap={6}
            pl={6}
            fontSize={{ base: '0.8rem', lg: '1rem' }}
            fontWeight={600}
            py={'1.5rem'}
            cursor={'pointer'}
            mb="0.4rem"
            borderRadius={'1px'}
            whiteSpace="wrap"
            color="#552a0e"
          >
            <Image
              objectFit="contain"
              width={15}
              height={5}
              src={
                openIndex === index ? '/assets/minus.png' : '/assets/plus.png'
              }
              alt=""
            />
            {isRTL ? res.question?.ar : res.question?.en}
          </Button>
          <Collapse
            in={openIndex === index}
            unmountOnExit
            style={{ backgroundColor: 'white' }}
          >
            <Flex
              padding="4"
              align={isRTL ? 'end' : 'start'}
              justify={isRTL ? 'start' : 'end'}
              fontSize={{ base: '0.7rem', lg: '0.9rem' }}
              fontWeight={400}
              textAlign={'start'}
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <Box
                borderLeft={!isRTL ? '2px solid red' : ''}
                borderRight={isRTL ? '2px solid red' : ''}
                pl={!isRTL ? 2 : 0}
                pr={isRTL ? 2 : 0}
                borderRadius="2px"
                width="100%"
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                {isRTL ? res.answer?.ar : res.answer?.en}
              </Box>
            </Flex>
          </Collapse>
        </Box>
      ))}
    </Box>
  );
};

export default FaQComponent;
