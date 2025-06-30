'use client'
import { Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AboutSectionHome from './AboutSectionHome';
import CardSectionHome from './CardSectionHome';
import ImageSliderHome from './ImageSliderHome';
import MapSectionHome from './MapSectionHome';
import MediaCenterSection from './MediaCenterSection';
import FaQ from './FaQ';
import useFetch from '@/Utils/Fetch/useFetch';
import Footer from '@/shared-components/navigation-components/Footer/Footer';
import HomeHeroSection from './HomeHeroSection';
import LazySection from '@/Utils/LazySection';

const HomePage = () => {
  const componentMap: Record<string, any> = {
    'Hero Section - Home': HomeHeroSection,
    'About Section - Home': AboutSectionHome,
    'Cards Section - Home': CardSectionHome,
    'Our Partners Section - Home': ImageSliderHome,
    'Interactive Map Section - Home': MapSectionHome,
    'Media Center Section - Home': MediaCenterSection,
    'FAQ Section - Home': FaQ,
  };
  const { data, isLoading, error } = useFetch<any>(
    '/pages_section_get/15',
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

export default HomePage;