'use client';
import { mediaCardColors } from '@/constants/colors';
import MediaCardComponent from '@/shared-components/MediaCardComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const BlogsList = () => {
  const staticJournalData = {
    heading_en: 'Press Center',
    heading_ar: 'أحدث المجلات',
    data: [
      {
        published_date_en: '11-12-2023',
        published_date_ar: '11-12-2023',
        category_en: 'NewS',
        category_ar: 'الكبير',
        description_en: `Join us as we celebrate the grand opening of Tuaja Adventure Resort, where thrill-seekers can indulge in exhilarating activities like hiking, rock climbing, and wildlife safaris amidst Saudi breathtaking landscapes .`,
        description_ar: `انضم إلينا للاحتفال بالافتتاح الكبير لمنتجع توجا أدفنتشر، حيث يمكن لعشاق المغامرات الاستمتاع بأنشطة مثيرة مثل المشي في الطبيعة، تسلق الصخور، ورحلات السفاري لمشاهدة الحياة البرية في مناظر السعودية الخلابة.`,
        image_url: '/CardSection1.png',
        isButton: true,
      },
      {
        published_date_en: '11-12-2023',
        published_date_ar: '11-12-2023',
        category_en: 'NewS',
        category_ar: 'الكبير',
        description_en:
          'We are proud to announce that Tuaja Eco Resort has been honored with the prestigious Sustainable Tourism Award for its commitment to eco-friendly practices and the environmental stewardship.',
        description_ar:
          'نحن فخورون بالإعلان عن أن منتجع توجا الإيكولوجي قد تم تكريمه بجائزة السياحة المستدامة المرموقة تقديرًا لالتزامه بالممارسات الصديقة للبيئة.',
        image_url: '/CardSection1.png',
        isButton: true,
      },
      {
        published_date_en: '11-12-2023',
        published_date_ar: '11-12-2023',
        category_en: 'NewS',
        category_ar: 'الكبير',
        description_en:
          'Tuaja Luxury Resort is thrilled to announce an exclusive partnership with culinary chef Jamie Oliver, who will be curating farm- to - table dining experiences at the Premium Farm Resort',
        description_ar:
          'تُعبر منتجع تواجيا الفاخر عن سعادتها بالإعلان عن شراكة حصرية مع الطاهي الشهير جيمي أوليفر، الذي سيقوم بإعداد تجارب تناول الطعام من المزرعة إلى الطاولة في منتجع المزرعة الفاخرة.',
        isButton: true,
        image_url: '/CardSection1.png',
      },
      {
        published_date_en: '11-12-2023',
        published_date_ar: '11-12-2023',
        category_en: 'NewS',
        category_ar: 'الكبير',
        description_en:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut,orem ipsum dolor sit amet,g elit, sed diam nonummy nibh euismod tincidunt ut',
        description_ar:
          'استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.',
        image_url: '/CardSection1.png',
        isButton: true,
      },
      {
        published_date_en: '11-12-2023',
        published_date_ar: '11-12-2023',
        category_en: 'NewS',
        category_ar: 'الكبير',
        description_en:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut,orem ipsum dolor sit amet,g elit, sed diam nonummy nibh euismod tincidunt ut',
        description_ar:
          'استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.',
        image_url: '/CardSection1.png',
        isButton: true,
      },
      {
        published_date_en: '11-12-2023',
        published_date_ar: '11-12-2023',
        category_en: 'NewS',
        category_ar: 'الكبير',
        description_en:
          'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut,orem ipsum dolor sit amet,g elit, sed diam nonummy nibh euismod tincidunt ut',
        description_ar:
          'استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.استكشاف عميق لعجائب الطبيعة.',
        image_url: '/CardSection1.png',
        isButton: true,
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Media_Center_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
    const darkColors = mediaCardColors;
    const uniqueCategories = [
      ...new Set(data?.blogs?.map((item: any) => item.category.en)),
    ];
    const colorMap: { [key: string]: string } = {};
    uniqueCategories.forEach((category: any, index) => {
      colorMap[category] = darkColors[index % darkColors.length];
    });
    const transformedData = data?.blogs?.map((item: any) => ({
      id: item.id,
      published_date: {
        en: item.published_date.en,
        ar: item.published_date.ar,
      },
      category: {
        en: item.category.en,
        ar: item.category.ar,
      },
      description: {
        en: item.description.en,
        ar: item.description.ar,
      },
      image: item.image,
      isbutton: item.isbutton,
      bgColor: colorMap[item.category.en],
    }));
    return (
      <MediaCardComponent
        heading_en={'Latest News'}
        heading_ar={'آخر الأخبار'}
        data={transformedData}
      />
    );
};

export default BlogsList;
