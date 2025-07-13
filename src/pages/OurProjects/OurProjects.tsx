'use client';
import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from '@/shared-components/navigation-components/Footer/Footer';
import useFetch from '@/Utils/Fetch/useFetch';
import LazySection from '@/Utils/LazySection';
import OurProjectAboutSection from './OurProjectAboutSection';
import OurProjectDiscoverSection from './OurProjectDiscoverSection';
import OurProjectImageFooter from './OurProjectFooterSection';
import OurProjectHeroSection from './OurProjectHeroSection';
import OurProjectMapSection from './OurProjectMapSection';
import OurProjectProgressSection2 from './OurProjectProgressSection2';

const OurProjects = () => {
  const componentMap: Record<string, React.FC<any>> = {
    'Hero Section - Our Project': OurProjectHeroSection,
    'About Section - Our Project': OurProjectAboutSection,
    'Interactive Map Section - Our Project': OurProjectMapSection,
    'Discover More Section - Our Project': OurProjectDiscoverSection,
    'The Progress Section - Our Project': OurProjectProgressSection2,
    'Image Footer Section - Our Project': OurProjectImageFooter,
  };

  const { data, isLoading, error } = useFetch<any>(
    '/pages_section_get/17',
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

export default OurProjects;
