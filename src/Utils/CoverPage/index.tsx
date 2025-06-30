'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './CoverPage.css';
import { useMediaQuery } from '@chakra-ui/react';

interface CoverPageProps {
  onAnimationComplete: () => void;
}
const CoverPage: React.FC<CoverPageProps> = ({ onAnimationComplete }) => {
  const [isMobile] = useMediaQuery('(max-width: 768px)');
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2.5, delay: 1 }}
      onAnimationComplete={onAnimationComplete}
      className="cover-page"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: `url('/assets/cover1.png') no-repeat center center`,
        backgroundSize: isMobile ? 'contain' : 'cover',
      }}
    />
  );
};

export default CoverPage;
