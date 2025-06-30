'use client';
import React, { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import Footer from '@/shared-components/navigation-components/Footer/Footer';
import useFetch from '@/Utils/Fetch/useFetch';
import LazySection from '@/Utils/LazySection';
import AssetsSectionOurBusiness from './AssetsSectionOurBusiness';
import FranchiseOpportunity from './FranchiseOpportunity';
import OurBusinessHeroSection from './OurBusinessHeroSection';
import FranchisePartner from './FranchisePartner';
import SupplierRegistration from './SupplierRegistration';
import OurBusinessSupplierSection from './OurBusinessSupplierSection';

const OurBusiness = () => {
  const componentMap: Record<string, React.FC> = {
    'Hero Section - Our Business': OurBusinessHeroSection,
    'Assets Section - Our Business': AssetsSectionOurBusiness,
    'Image Footer Section - Contact Us': FranchiseOpportunity,
    'Franchise Form': FranchisePartner,
    'Supplier Section - Our Business': OurBusinessSupplierSection,
    'Supplier Registration Form': SupplierRegistration,
  };

  const { data, isLoading, error } = useFetch<any>(
    '/pages_section_get/18',
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

export default OurBusiness;