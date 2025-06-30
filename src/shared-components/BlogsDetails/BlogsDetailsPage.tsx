'use client';
import { Flex } from '@chakra-ui/react';
import React from 'react';
import HeroSectionBlogs from './HeroSectionBlogs';
import BlogsList from './BlogsList';
import MediaCenterImageFooter from '../../pages/MediaCenter/MediaCenterImageFooter';
import Footer from '@/shared-components/navigation-components/Footer/Footer';
import BlogsText from './BlogsText';

const BlogsDetailsPage = () => {
  return (
    <Flex flexDir="column" gap={10}>
      <HeroSectionBlogs />
      <BlogsText />
      <BlogsList />
      <MediaCenterImageFooter />
      <Footer />
    </Flex>
  );
};

export default BlogsDetailsPage;
