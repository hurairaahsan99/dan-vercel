'use client';
import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from '@/shared-components/navigation-components/Footer/Footer';
import useFetch from '@/Utils/Fetch/useFetch';
import LazySection from '@/Utils/LazySection';
import AboutUsBoardMembers from './AboutUsBoardMembers';
import AboutUsDanMeans from './AboutUsDanMeans';
import AboutUsDanSection from './AboutUsDanSection';
import AboutUsExperienceSection from './AboutUsExperienceSection';
import AboutUsHeroSection from './AboutUsHeroSection';
import AboutUsImageFooter from './AboutUsImageFooter';
import AboutUsObjectiveSection from './AboutUsObjectiveSection';
import AboutUsOurMission from './AboutUsOurMission';
import AboutUsTestimonialSection from './AboutUsTestimonialSection';
import AboutUsValueSection from './AboutUsValueSection';

const AboutUs = () => {
  const componentMap: Record<string, any> = {
    'Hero Section - About Us': AboutUsHeroSection,
    'About DAN Section - About Us': AboutUsDanMeans,
    'What Does “Dan” Mean Section - About Us': AboutUsObjectiveSection,
    'Dan Journey Section - About Us': AboutUsExperienceSection,
    'Features Section - About Us': AboutUsOurMission,
    'The Values Section - About Us': AboutUsValueSection,
    'Testimonial Section - About Us': AboutUsTestimonialSection,
    'Board Members Section - About Us': AboutUsBoardMembers,
    'Image Footer Section - About Us': AboutUsImageFooter,
  };

  const { data, isLoading, error } = useFetch<any>(
    '/pages_section_get/16',
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
        gap={8}
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

export default AboutUs;
