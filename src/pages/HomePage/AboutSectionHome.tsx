import AboutSectionComponent from '@/shared-components/AboutSectionComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutSectionHome = ({ inView }: { inView: boolean }) => {
  const Text_en = `<p>
            <strong>Dan Company</strong> is a PIF company that aims to contribute to the development of the tourism sector by embracing
            the Kingdom's captivating nature and introducing its rich agricultural diversity through agriculture, adventure,
            and eco-tourism, strengthening the connection between people and nature.
            Dan's unique integrated business model includes owned and franchised assets, a pioneering approach in the global
            tourism industry, and aims to develop a tourism ecosystem consisting of luxury resorts and granting franchises
            to farmers and tourist lodge operators.
        </p>`;
  const Text_ar = `<p>
    <strong>شركة دان</strong> هي شركة تابعة لصندوق الاستثمارات العامة تهدف إلى المساهمة في تطوير قطاع السياحة من خلال
    احتضان الطبيعة الساحرة للمملكة والتعريف بتنوعها الزراعي الغني عبر الزراعة والمغامرات والسياحة البيئية، وتعزيز
    الصلة بين الإنسان والطبيعة.
    يشمل نموذج أعمال دان الفريد والمتكامل أصولاً مملوكة وأخرى تُدار بالامتياز، وهو نهج رائد في صناعة السياحة العالمية،
    ويهدف إلى تطوير منظومة سياحية تتكون من منتجعات فاخرة ومنح الامتيازات للمزارعين ومشغلي النزل السياحية.
</p>
`;
  const { data, isLoading, error } = useFetch<any>(
    '/get_About_Section_Home',
    'GET',
  );
  if (isLoading) {
    return (
      <div
        style={{ minHeight: '25vh', marginTop: '40vh', visibility: 'hidden' }}
      />
    );
  }
  const ResData = {
    Heading_en: data?.data[0]?.title.en,
    Heading_ar: data?.data[0]?.title.ar,
    Description_en: data?.data[0]?.sub_title.en,
    Description_ar: data?.data[0]?.sub_title.ar,
    BgImage: data?.data[0]?.bg_image,
    Logo: data?.data[0]?.logo,
  };

  return <AboutSectionComponent data={ResData} inView={inView} />;
};

export default AboutSectionHome;
