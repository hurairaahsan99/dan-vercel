'use client';
import { Flex } from '@chakra-ui/react/flex';
import React, { useEffect, useState } from 'react';
import ContactUsHeroSection from './ContactUsHeroSection';
import ContactUsSection from './ContactUsSection';
import AssistFormContactUs from '../../shared-components/ContactUsSectionForms/AssistFormContactUs';
import ContactUsFAQ from './ContactUsFAQ';
import ContactUsFooterSection from './ContactUsFooterSection';
import Footer from '@/shared-components/navigation-components/Footer/Footer';
import useFetch from '@/Utils/Fetch/useFetch';
import ContactUsMap from './ContactUsMap';
import LazySection from '@/Utils/LazySection';

const ContactUs = () => {
  const componentMap: Record<string, React.FC<any>> = {
    'Hero Section - Contact Us': ContactUsHeroSection,
    'Contact Us Section - Contact Us': ContactUsSection,
    'Inquiry Section - Contact Us': AssistFormContactUs,
    'Map Section - Contact Us': ContactUsMap,
    'FAQ Section - Contact Us': ContactUsFAQ,
    'Image Footer Section - Contact Us': ContactUsFooterSection,
  };
  const { data, isLoading, error } = useFetch<any>(
    '/pages_section_get/20',
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

export default ContactUs;
