import React, { useState, useRef, useLayoutEffect } from 'react';
import DynamicModal from '@/shared-components/ContactUsSectionForms/DynamicModal';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Flex, Box, Text, useBreakpointValue } from '@chakra-ui/react';
import { useLanguage } from '@/context/LanguageProvider';

const ContactUsDisplayForm = ({ data }: { data: any }) => {
  const MotionFlex = motion(Flex);
  const tagsRef = useRef<HTMLDivElement>(null);
  const [tagsHeight, setTagsHeight] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // Extract just the colour palette for easier reference
  const bgColors = data?.map((item: any) => item.bg_color) || [];

  // Check if a preferred tab index was stored before navigation (from footer)
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedIdx = localStorage.getItem('contactFormIndex');
      if (storedIdx !== null) {
        const idx = parseInt(storedIdx, 10);
        if (!isNaN(idx) && idx >= 0 && idx < data.length) {
          setSelectedIndex(idx);
        }
        localStorage.removeItem('contactFormIndex');
      }
    }
  }, [data.length]);

  useLayoutEffect(() => {
    if (tagsRef.current) {
      setTagsHeight(tagsRef.current.offsetHeight);
    }
  }, [data.length, isMobile]);

  return (
    <MotionFlex
      position="relative"
      flexDir={'column'}
      gap="1rem"
      mt={{ base: '1rem', lg: '2rem' }}
      mx={{ base: '1rem', lg: '2rem' }}
      width={{ base: 'calc(100% - 2rem)', lg: 'calc(100% - 4rem)' }}
      dir={isRTL ? 'rtl' : 'ltr'}
      zIndex={1}
      borderTop="none"
      borderBottom="none"
      borderRadius="3xl"
      borderLeft="none"
      borderRight="none"
      borderBottomLeftRadius={0}
      w={{ base: '90%', lg: '90%' }}
      overflow={{base:'visible',lg:'hidden'}}
    >
      {/* Desktop-only connecting top border (hide in RTL) */}
      {!isMobile && !isRTL && (
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            height: 0,
            pointerEvents: 'none',
          }}
          animate={{
            top: 0,
            bottom: 'auto',
            width: `${((selectedIndex + 1) / data.length) * 100}%`,
            borderTop:
              selectedIndex === 1 || selectedIndex === 2 || selectedIndex === 3
                ? '0px solid transparent'
                : `4px solid ${bgColors[selectedIndex]}`,
            borderBottom: '0px solid transparent',
          }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
        />
      )}

      <Flex
        w="100%"
        flexDir={{ base: 'column', lg: 'row' }}
        overflow="hidden"
        ref={tagsRef}
      >
        {data.map((res: any, i: number) => {
          const isSelected = i === selectedIndex;
          return (
            <MotionFlex
              key={i}
              align="center"
              flex={1}
              minW={0}
              px="1rem"
              py={{ base: '0.5rem', lg: '1rem' }}
              gap="1rem"
              borderRadius={isMobile ? '3xl' : '3xl'}
              borderBottomLeftRadius={isMobile ? '3xl' : (!isMobile && (i === 1 || i === 2)) ? '3xl' : (!isMobile && i === 0 && (selectedIndex === 3 || (isRTL && selectedIndex === 1) || (isRTL && selectedIndex === 2))) ? '3xl' : (!isMobile && i === 3 && isRTL && (selectedIndex === 0 || selectedIndex === 2)) ? '3xl' : (!isMobile && i === 3 && !isRTL && selectedIndex === 2) ? '3xl' : 0}
              borderBottomRightRadius={isMobile ? '3xl' : (!isMobile && (i === 1 || i === 2)) ? '3xl' : (!isMobile && i === 0 && (selectedIndex === 1 || selectedIndex === 2 || selectedIndex === 3) && !isRTL) ? '3xl' : (!isMobile && i === 3 && isRTL && selectedIndex === 0) ? '3xl' : (!isMobile && i === 3 && isRTL && (selectedIndex === 1 || selectedIndex === 2)) ? '3xl' : (!isMobile && i === 0 && isRTL && selectedIndex === 3) ? '3xl' : (!isMobile && i === 3 && !isRTL && selectedIndex === 2) ? '3xl' : 0}
              cursor="pointer"
              onClick={() => {
                setIsModalOpen(true);
                setSelectedIndex(i);
              }}
              style={{
                borderLeft: '1px solid transparent',
                borderRight: '1px solid transparent',
                borderTop: '1px solid transparent',
                borderBottom: '0px solid transparent',
              }}
              animate={{
                flex: isSelected ? 1.15 : 1,
                opacity: isSelected ? 1 : 0.45,
                borderLeftColor: isSelected
                  ? bgColors[i]
                  : isMobile
                  ? 'transparent'
                  : isRTL
                  ? (i === 0 // First tag left border (RTL)
                    ? (selectedIndex === 1 ? bgColors[1] : 'transparent') // Show second tag's color when second tag is selected
                    : i === 1 // Second tag gets first tag's color on left border (RTL)
                    ? (selectedIndex === 2 ? bgColors[2] : 'transparent') // Show third tag's color when third tag is selected
                    : i === 2 // Third tag gets second tag's color on left border (RTL)
                    ? (selectedIndex === 1 ? bgColors[1] : selectedIndex === 3 ? bgColors[3] : 'transparent') // Show second tag's color when second tag is selected, or fourth tag's color when fourth tag is selected
                    : i === 3 // Fourth tag gets third tag's color on left border (RTL)
                    ? (selectedIndex === 3 ? bgColors[3] : 'transparent') // Only show fourth tag's color when fourth tag is selected
                    : bgColors[i] + '40') // Unselected tags get their own faded color
                  : (i === 0 // First tag left border (LTR)
                    ? 'transparent' // Always transparent when not selected
                    : i === 1 // Second tag gets first tag's color on left border (LTR)
                    ? (selectedIndex === 0 ? bgColors[0] : 'transparent') // Only show when first tag is selected
                    : i === 2 // Third tag gets second tag's color on left border (LTR)
                    ? (selectedIndex === 1 ? bgColors[1] : 'transparent') // Only show when second tag is selected
                    : i === 3 // Fourth tag gets third tag's color on left border (LTR)
                    ? 'transparent' // Always transparent in LTR
                    : bgColors[i] + '40'), // Unselected tags get their own faded color
                borderRightColor: isSelected
                  ? bgColors[i]
                  : isMobile
                  ? 'transparent'
                  : isRTL
                  ? (i === 0 // First tag's right border (RTL)
                    ? (selectedIndex === 0 ? bgColors[0] : 'transparent') // Show first tag's color when first tag is selected
                    : i === 1 // Second tag's right border (RTL)
                    ? (selectedIndex === 0 ? bgColors[0] : selectedIndex === 1 ? bgColors[1] : 'transparent') // Show first tag's color when first tag is selected, or second tag's color when second tag is selected
                    : i === 2 // Third tag's right border (RTL)
                    ? (selectedIndex === 2 ? bgColors[2] : 'transparent') // Show third tag's color when third tag is selected
                    : i === 3 // Fourth tag's right border (RTL)
                    ? (selectedIndex === 3 ? bgColors[3] : 'transparent') // Show fourth tag's color when fourth tag is selected
                    : bgColors[i] + '40') // Unselected tags get their own faded color
                  : (i === 0 // First tag's right border (LTR)
                    ? (selectedIndex === 1 ? bgColors[1] : 'transparent') // Use second tag's color when second tag is selected
                    : i === 1 // Second tag's right border (LTR)
                    ? (selectedIndex === 2 ? bgColors[2] : 'transparent') // Use third tag's color when third tag is selected
                    : i === 2 // Third tag's right border (LTR)
                    ? (selectedIndex === 3 ? bgColors[3] : 'transparent') // Use fourth tag's color when fourth tag is selected
                    : bgColors[i] + '40'), // Unselected tags get their own faded color
                borderTopColor: isSelected
                  ? bgColors[i]
                  : isMobile
                  ? 'transparent'
                  : bgColors[i] + '90', // Faded category color for unselected tags on web
                borderLeftWidth: isMobile ? '4px' : isRTL ? (i === 0 ? (selectedIndex === 1 ? '4px' : '0px') : i === 1 ? (selectedIndex === 2 ? '4px' : '0px') : i === 2 ? (selectedIndex === 1 ? '4px' : selectedIndex === 3 ? '4px' : '0px') : i === 3 ? (selectedIndex === 3 ? '4px' : '0px') : (isSelected ? '4px' : '4px')) : (i === 0 ? (isSelected ? '4px' : '0px') : i === 1 ? (selectedIndex === 0 ? '4px' : '0px') : i === 2 ? (selectedIndex === 1 ? '4px' : '0px') : i === 3 ? '0px' : (isSelected ? '4px' : '4px')),
                borderRightWidth: isMobile ? '4px' : isRTL ? (isSelected ? (i === 0 ? '4px' : '0px') : (i === 0 ? (selectedIndex === 0 ? '4px' : '0px') : i === 1 ? (selectedIndex === 0 ? '4px' : '0px') : i === 2 ? '0px' : i === 3 ? '0px' : '4px')) : (isSelected ? (i === 3 ? '4px' : '0px') : (i === 0 ? (selectedIndex === 1 ? '4px' : '0px') : i === 1 ? (selectedIndex === 2 ? '4px' : '0px') : i === 2 ? (selectedIndex === 3 ? '4px' : '0px') : i === 3 ? (selectedIndex === 2 ? '0px' : '4px') : '4px')),
                borderTopWidth: isSelected ? '4px' : isMobile ? '0px' : '3px', // 2px for unselected tags on web
                borderBottomColor: isMobile && isSelected
                  ? bgColors[i]
                  : !isMobile && !isSelected
                  ? bgColors[selectedIndex] + '90' // Selected tag's color with opacity for unselected tags' bottom border
                  : !isMobile && ((selectedIndex === 1 && i === 0) || (selectedIndex === 2 && i <= 1))
                  ? bgColors[selectedIndex]
                  : 'transparent',
                borderBottomWidth: isMobile && isSelected
                  ? '4px'
                  : !isMobile && !isSelected
                  ? '3px' // Bottom border width for unselected tags on web
                  : !isMobile && ((selectedIndex === 1 && i === 0) || (selectedIndex === 2 && i <= 1))
                  ? '4px'
                  : '0px',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              // whileHover={{
              //   scale: isSelected ? 1 : 0.97,
              //   borderLeftColor: bgColors[i] + '80',
              //   borderRightColor: bgColors[i] + '80',
              //   borderTopColor: bgColors[i] + '80',
              // }}
            >
              {res.logo && (
                <Box
                  width="7vh"
                  bgColor={res.bg_color}
                  p={2}
                  borderRadius="full"
                >
                  <Image
                    src={res.logo}
                    alt=""
                    objectFit="contain"
                    width={230}
                    height={50}
                  />
                </Box>
              )}
              <Text
                flexShrink={1} // also allow text itself to shrink
                wordBreak="break-word"
                fontSize="1.2rem"
                fontWeight={500}
                color={res.bg_color}
              >
                {isRTL ? res.title.ar : res.title.en}
              </Text>
              {isSelected && !isMobile && (
                <Box
                  position="absolute"
                  top="100%"
                  bottom={0}
                  width="4px"
                  bg={bgColors[i]}
                  /* if RTL, first three tags use right side, last three use left */
                  left={(!isRTL && i <= 2) || (isRTL && i >= 3) ? 0 : 'auto'}
                  right={(!isRTL && i >= 3) || (isRTL && i <= 2) ? 0 : 'auto'}
                />
              )}
            </MotionFlex>
          );
        })}
      </Flex>

      {/* Vertical borders starting below tags */}
      {!isMobile && (
        <>
          {/* border for first 3 tags (LTR-left, RTL-right) */}
          {((!isRTL && selectedIndex <= 2) ||
            (isRTL && selectedIndex <= 2)) && (
            <Box
              position="absolute"
              left={!isRTL ? 0 : 'auto'}
              right={isRTL ? 0 : 'auto'}
              top="87px"
              bottom={0}
              borderLeft={
                !isRTL ? `4px solid ${bgColors[selectedIndex]}` : 'none'
              }
              borderRight={
                isRTL ? `4px solid ${bgColors[selectedIndex]}` : 'none'
              }
            />
          )}
          {/* border for last 3 tags (LTR-right, RTL-left) */}
          {((!isRTL && selectedIndex >= 3) ||
            (isRTL && selectedIndex >= 3)) && (
            <Box
              position="absolute"
              right={!isRTL ? 0 : 'auto'}
              left={isRTL ? 0 : 'auto'}
              top="87px"
              bottom={0}
              borderRight={
                !isRTL ? `4px solid ${bgColors[selectedIndex]}` : 'none'
              }
              borderLeft={
                isRTL ? `4px solid ${bgColors[selectedIndex]}` : 'none'
              }
            />
          )}
        </>
      )}

      {data.length > 0 && (
        <DynamicModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          cardTitle={data[selectedIndex].title}
        />
      )}
    </MotionFlex>
  );
};

export default ContactUsDisplayForm;
