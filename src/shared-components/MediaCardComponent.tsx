'use client';
import { Button, Text, Box, Flex, Badge } from '@chakra-ui/react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { mediaCardColors } from '@/constants/colors';

interface JournalData {
  published_date?: {
    en: string;
    ar: string;
  };
  category?: {
    en: string;
    ar: string;
  };
  description?: {
    en: string;
    ar: string;
  };
  image: string;
  isbutton?: boolean;
  bgColor: string[];
}

interface JournalCardComponentProps {
  heading_en: string;
  heading_ar: string;
  noScroll?: boolean;
  noHeading?: boolean;
  isButton?: boolean;
  data: JournalData[];
}

const MediaCardComponent: React.FC<JournalCardComponentProps> = ({
  data = [],
  heading_en,
  heading_ar,
  noScroll,
  noHeading,
  isButton,
}) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showLoadMoreButton, setShowLoadMoreButton] = useState(data.length > 6);

  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const router = useRouter();

  const handleLoadMore = () => {
    const newVisibleCount = visibleCount + 3;
    setVisibleCount(newVisibleCount);
    if (newVisibleCount >= data.length) {
      setShowLoadMoreButton(false);
    }
  };

  const handleReadMore = (blogData: any) => {
    const query = new URLSearchParams({
      id: blogData.id,
    }).toString();
    router.push(
      isRTL ? `/ar/blogDetails?${query}` : `/en/blogDetails?${query}`,
    );
  };

  const visibleData = data?.slice(0, visibleCount) || [];
  const scrollData = !noScroll && isRTL ? [...data].reverse() : data;
  const uniqueCategories = Array.from(
    new Set(visibleData.map((item) => item.category?.en)),
  );
  const displayList = ['all', ...uniqueCategories];
  return (
    <Box
      backgroundSize="cover"
      backgroundPosition="center"
      height={{ base: 'auto', lg: 'auto' }}
      mx={{ base: '0.1rem', lg: '1rem' }}
      width={{ base: 'calc(100% - 0.8rem)', lg: 'calc(100% - 2rem)' }}
      mt={{ base: '2rem', lg: '2rem' }}
      overflow="hidden"
      className="Readex-Light"
    >
      {noHeading ? (
        <Flex
          gap={'1.2rem'}
          mb={'1rem'}
          justify={'center'}
          overflowX={{ base: 'auto', lg: 'visible' }}
          overflowY="hidden"
          flexWrap={{ base: 'nowrap', lg: 'wrap' }}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          {displayList.map((item, index) => (
            <Box
              key={index}
              backgroundColor={
                item === 'all'
                  ? '#552a0e'
                  : visibleData.find((d) => d.category?.en === item)?.bgColor
              }
              p={'0.4rem 1.5rem'}
              borderRadius="full"
            >
              <Text
                fontSize={{ base: '12px', md: '12px', lg: '15px' }}
                color="white"
                textTransform="capitalize"
              >
                {item === 'all'
                  ? isRTL
                    ? 'الكل'
                    : 'All'
                  : isRTL
                  ? visibleData.find((d) => d.category?.en === item)?.category
                      ?.ar
                  : item}
              </Text>
            </Box>
          ))}
        </Flex>
      ) : (
        <Flex
          mx={{ base: '1rem', lg: '1rem' }}
          mb={{ base: '1rem', lg: '2rem' }}
          justify="space-between"
          align="center"
          flexDir={isRTL ? 'row-reverse' : 'row'}
          color="#552a0e"
        >
          <Text fontSize={{ base: '1.4rem', md: '1.9rem' }} fontWeight={700}>
            {isRTL ? heading_ar : heading_en}
          </Text>
          <Link href={isRTL ? '/ar/media-center' : '/en/media-center'}>
            <Text
              fontSize={{ base: '0.9rem', md: '1rem' }}
              fontWeight={400}
              lineHeight="20px"
              textDecoration="underline"
              cursor="pointer"
            >
              {isRTL ? 'كل الأخبار' : 'All News'}
            </Text>
          </Link>
        </Flex>
      )}
      <Flex align="center" justify="center" paddingBottom={8} maxHeight="100%">
        <Box
          display={noScroll ? 'grid' : 'block'}
          gridTemplateColumns={{
            base: noScroll ? '1fr' : 'none',
            lg: noScroll ? '1fr 1fr 1fr' : 'none',
          }}
          rowGap={noScroll ? '30px' : '0'}
          columnGap={noScroll ? '0px' : '0'}
          w="100%"
          overflowX={noScroll ? 'unset' : 'auto'}
          overflowY={noScroll ? 'unset' : 'hidden'}
          whiteSpace="nowrap"
          width="100%"
          dir={isRTL && !noScroll ? 'rtl' : 'ltr'}
          sx={{
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            '-ms-overflow-style': 'none',
            'scrollbar-width': 'none',
          }}
        >
          {(!noScroll ? scrollData : data.slice(0, visibleCount)).map(
            (res, index) => (
              <Box
                key={index}
                display="inline-block"
                verticalAlign="top"
                w={{
                  base: noScroll ? 'calc(100% - 0.8rem)' : '30vh',
                  lg: noScroll ? 'calc(100% - 2rem)' : '55vh',
                }}
                mx={{ base: '10px', lg: '20px' }}
                textAlign={isRTL ? 'right' : 'left'}
                backgroundColor="#F6F6F6"
                pb={'1.5rem'}
                // shadow="0px 25px 20px -15px gray"
              >
                <Box
                  position="relative"
                  width="100%"
                  height={{ base: '180px', lg: '250px' }}
                >
                  <Image
                    src={res.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </Box>
                <Box
                  mt="1rem"
                  px={{ base: '10px', lg: '1.5rem' }}
                  h={{ base: '28vh', lg: '25vh' }}
                >
                  <Flex
                    align={isRTL ? 'start' : 'center'}
                    textAlign={isRTL ? 'start' : 'end'}
                    flexDir={isRTL ? 'row-reverse' : 'row'}
                    justify="space-between"
                    my="0.5rem"
                  >
                    {res.category?.ar || res.category?.en ? (
                      <Box
                        backgroundColor={res?.bgColor}
                        p={'0.2rem 0.9rem'}
                        borderRadius="full"
                      >
                        <Text
                          fontSize={{ base: '12px', md: '12px', lg: '15px' }}
                          color="white"
                          textTransform="capitalize"
                        >
                          {isRTL ? res.category.ar : res.category.en}
                        </Text>
                      </Box>
                    ) : null}
                    {res.published_date?.ar || res.published_date?.en ? (
                      <Text
                        fontSize={{ base: '12px', lg: '15px' }}
                        className={isRTL ? 'medium' : 'montLight'}
                        textTransform="uppercase"
                        color="#552a0e"
                      >
                        {isRTL ? res.published_date.ar : res.published_date.en}
                      </Text>
                    ) : null}
                  </Flex>
                  <Flex
                    textAlign={isRTL ? 'start' : 'end'}
                    flexDir="column"
                    justify="space-between"
                    h="80%"
                  >
                    {res.description?.en ? (
                      <Box
                        overflowX="hidden"
                        overflowY="hidden"
                        whiteSpace="normal"
                        lineHeight="2rem"
                        noOfLines={{ base: 4, lg: 3 }}
                        textAlign="start"
                        dir={isRTL ? 'rtl' : 'ltr'}
                        fontSize={{ base: '1rem', lg: '1.1rem' }}
                        fontWeight={{ base: 500, lg: 700 }}
                        color="#562E15"
                        dangerouslySetInnerHTML={{
                          __html: isRTL
                            ? res.description.ar
                            : res.description.en,
                        }}
                      />
                    ) : null}
                    <Flex alignSelf={isRTL ? 'flex-start' : 'flex-end'}>
                      {res.isbutton ? (
                        <Button
                          dir={isRTL ? 'rtl' : 'ltr'}
                          variant="ghost"
                          color="#562E15"
                          textDecoration="underline"
                          _hover={{ background: 'none' }}
                          fontSize={{ base: '10px', lg: '13px' }}
                          onClick={() => handleReadMore(res)}
                        >
                          {isRTL
                            ? 'متابعة القراءة ...'
                            : 'Complete reading ...'}
                        </Button>
                      ) : null}
                    </Flex>
                  </Flex>
                </Box>
              </Box>
            ),
          )}
        </Box>
      </Flex>
      <Flex justifyContent="center" width="100%">
        {isButton && showLoadMoreButton && (
          <Button
            px={{ base: '2rem', lg: '2rem' }}
            height={12}
            variant="solid"
            onClick={handleLoadMore}
            fontSize={{ base: '10px', lg: '14px' }}
            fontWeight={700}
            bg="#552A0E"
            color="white"
            borderRadius={'3xl'}
            _hover={{ transform: 'scale(1.05)' }}
          >
            {isRTL ? 'اقرأ المزيد' : 'Show More'}
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default MediaCardComponent;
