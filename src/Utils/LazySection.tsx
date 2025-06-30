'use client';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface LazySectionProps {
  component: React.FC<{ inView: boolean }>;
}

const LazySection: React.FC<LazySectionProps> = ({ component: Component }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });
  return (
    <div ref={ref} style={{ minHeight: '25vh' }}>
      <Component inView={inView} />
    </div>
  );
};

export default LazySection;
