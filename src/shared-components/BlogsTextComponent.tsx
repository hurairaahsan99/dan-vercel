'use client';
import React from 'react';
import { Box } from '@chakra-ui/react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';

const BlogsTextComponent: React.FC<any> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const searchParams = useSearchParams();
  const id = searchParams?.get('id');

  const transformedData = data?.blogs.filter(
    (item: any) => item.id.toString() === id,
  );
  return (
    <Box mx={'2rem'}>
      <Box position="relative" height={{ base: '50vh', lg: '500px' }}>
        {transformedData[0]?.image && (
          <Image
            src={transformedData[0]?.image}
            alt=""
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
            style={{ filter: 'brightness(50%)' }}
          />
        )}
      </Box>
      {transformedData[0]?.description && (
        <Box
          mt="2rem"
          mx={{ base: '10px', lg: '10px' }}
          dir={isRTL ? 'rtl' : 'ltr'}
          textAlign={isRTL ? 'right' : 'left'}
          color="#626262"
          className="Readex-Light"
          fontSize={{ base: '0.9rem', lg: '1.1rem' }}
          fontWeight={400}
          dangerouslySetInnerHTML={{
            __html: isRTL
              ? transformedData[0]?.description?.ar
              : transformedData[0]?.description?.en,
          }}
          sx={{
            strong: {
              color: '#552a0e',
            },
          }}
        />
      )}
    </Box>
  );
};

export default BlogsTextComponent;
