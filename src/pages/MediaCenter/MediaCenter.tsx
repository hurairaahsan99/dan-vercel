'use client';
import React, { useEffect, useState } from 'react';
import HeroSectionMediaCenter from './HeroSectionMediaCenter';
import { Flex } from '@chakra-ui/react';
import BlogsMediaCenter from './BlogsMediaCenter';
import ImageGalleryMediaCenter from './ImageGalleryMediaCenter';
import Footer from '@/shared-components/navigation-components/Footer/Footer';
import SocialMedia from '@/shared-components/SocialMedia/SocialMedia';
import MediaCenterImageFooter from './MediaCenterImageFooter';
import useFetch from '@/Utils/Fetch/useFetch';
import LazySection from '@/Utils/LazySection';

const MediaCenter = () => {
  const componentMap: Record<string, React.FC> = {
    'Hero Section - Media Center': HeroSectionMediaCenter,
    'Blogs  Section - Media Center': BlogsMediaCenter,
    'Images Gallery Section - Media Center': ImageGalleryMediaCenter,
    'Social Media Section - Media Center': SocialMedia,
    'Image Footer Section - Media Center': MediaCenterImageFooter,
  };

  const { data, isLoading, error } = useFetch<any>(
    '/pages_section_get/19',
    'GET',
  );
  const mappedData =
    data?.sections?.map((sections: any) => ({
      name: sections.section_name,
      isActive: sections.status == '1',
    })) || [];
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFooter(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Flex
        flexDir="column"
        position="relative"
        gap={10}
        width="100%"
        height="auto"
      >
        {mappedData
          .filter((component: any) => component.isActive)
          .map((component: any, index: number) => {
            const Component = componentMap[component.name];
            return Component ? (
              <LazySection key={index} component={Component} />
            ) : null;
          })}
        {showFooter && <Footer />}
      </Flex>
    </>
  );
};

export default MediaCenter;
