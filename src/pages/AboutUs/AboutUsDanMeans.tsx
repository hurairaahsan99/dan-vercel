'use client';
import DanMeansComponent from '@/shared-components/DanMeansComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutUsDanMeans = () => {
  const experienceData = {
    Description_en: `
      <h2>What does <strong>"Dan"</strong> mean?</h2>
      <p>
        The name "Dan" means "the close thing," and it truly reflects the company and its goals and values.
        It highlights its efforts to strengthen the connection to the rich nature of the Kingdom and make it accessible
        to visitors from both within and outside the Kingdom.
        It also expresses the company's intention to leverage the rich agricultural and natural diversity in Saudi Arabia
        to connect guests with the roots of the Kingdom. Furthermore, it aims to empower its guests to explore a wide range
        of experiences that embody the diverse characteristics of each destination, from unique natural environments to
        rich arts and crafts, as well as authentic local cuisines.
      </p>
    `,
    Description_ar: `
      <h2>ماذا يعني "دان"؟</h2>
      <p>
        يعني اسم "دان" الشيء القريب، وهو يعكس بصدق أهداف وقيم الشركة.
        يبرز جهودها لتعزيز الارتباط بالطبيعة الغنية للمملكة وجعلها في متناول الزوار من داخل المملكة وخارجها.
        كما يعبر عن نية الشركة في الاستفادة من التنوع الزراعي والطبيعي الغني في السعودية لربط الضيوف بجذور المملكة.
        علاوة على ذلك، تهدف إلى تمكين ضيوفها من استكشاف مجموعة واسعة من التجارب التي تجسد خصائص كل وجهة، من البيئات
        الطبيعية الفريدة إلى الفنون والحرف الغنية، بالإضافة إلى المأكولات المحلية الأصيلة.
      </p>
    `,
    Image_url: '/HeroHomeImg1.png',
  };
  const { data, isLoading, error } = useFetch<any>(
    '/get_About_DAN_Section_About_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return (
    <DanMeansComponent
      lineHeight={{ base: '28px', lg: '42px' }}
      Description_en={data?.data[0]?.sub_title?.en}
      Description_ar={data?.data[0]?.sub_title?.ar}
      Image_url={data?.data[0]?.bg_image}
      title_en={data?.data[0]?.title?.en}
      title_ar={data?.data[0]?.title?.ar}
    />
  );
};

export default AboutUsDanMeans;
