'use client';
import ProgressSectionComponent from '@/shared-components/ProgressSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const OurProjectProgressSection = () => {
  const progressDummyData = {
    data: [
      {
        bg_img: '/HeroHomeImg1.png',
        logo: '/assets/tuajaLogo.png',
        progress: [
          {
            title: {
              en: 'Phase 1: Research',
              ar: 'المرحلة 1: البحث',
            },
            description: {
              en: 'Completed initial market research and feasibility studies.',
              ar: 'اكتمل البحث الأولي ودراسات الجدوى.',
            },
            isCompleted: true,
          },
          {
            title: {
              en: 'Phase 2: Development',
              ar: 'المرحلة 2: التطوير',
            },
            description: {
              en: 'Currently working on development and design.',
              ar: 'جارٍ العمل على التطوير والتصميم.',
            },
            isCompleted: true,
          },
          {
            title: {
              en: 'Phase 3: Testing',
              ar: 'المرحلة 3: الاختبار',
            },
            description: {
              en: 'Testing will commence once development is complete.',
              ar: 'سيبدأ الاختبار بمجرد اكتمال التطوير.',
            },
            isCompleted: false,
          },
        ],
      },
      {
        bg_img: '/CardSection1.png',
        heading: {
          en: 'Personal Growth',
          ar: 'النمو الشخصي',
        },
        sub_heading: {
          en: 'Steps towards self-improvement',
          ar: 'خطوات نحو تحسين الذات',
        },
        progress: [
          {
            title: {
              en: 'Goal Setting',
              ar: 'تحديد الأهداف',
            },
            description: {
              en: 'Defined clear and measurable personal goals.',
              ar: 'تم تحديد أهداف شخصية واضحة وقابلة للقياس.',
            },
            isCompleted: true,
          },
          {
            title: {
              en: 'Skill Development',
              ar: 'تطوير المهارات',
            },
            description: {
              en: 'Improving existing skills and acquiring new ones.',
              ar: 'تحسين المهارات الحالية واكتساب مهارات جديدة.',
            },
            isCompleted: false,
          },
        ],
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_The_Progress_Section_Our_Project',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.map((item: any) => ({
    id: item.id,
    bg_img: item.bg_image,
    logo: item.logo,
    heading: {
      en: item.heading_en,
      ar: item.heading_ar,
    },
    sub_heading: {
      en: item.title_en,
      ar: item.title_ar,
    },
    progress: item.cards.map((card: any) => ({
      title: {
        en: card.title_en,
        ar: card.title_ar,
      },
      description: {
        en: card.route_en,
        ar: card.route_ar,
      },
      isCompleted: card.is_completed,
    })),
  }));
  return <ProgressSectionComponent data={transformedData} />;
};

export default OurProjectProgressSection;
