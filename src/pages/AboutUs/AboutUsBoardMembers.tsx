'use client';
import BoardMemberComponent from '@/shared-components/BoardMemberComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const AboutUsBoardMembers = () => {
  const boardMemberData = {
    heading_en: 'Board Members',
    heading_ar: 'تعرف على أعضاء مجلس الإدارة',
    cards: [
      {
        logo: '/assets/VerticalIcon.png',
        title_en: 'John Doe',
        title_ar: 'جون دو',
        subTitle_en: 'Chairman of the Board',
        subTitle_ar: 'رئيس مجلس الإدارة',
        bg_image: '/assets/boardmember.png',
        social_Link: 'https://instagram.com',
        social_Icon: '/assets/Instagram_64.png',
        description_en: `Saad Alkroud is the Chief of Staff and the Secretary General of the Board of Directors at the Public Investment Fund (PIF) in Saudi Arabia, since 2021 and Secretary General of the Fund's Board of Directors since 2022. He chairs the Board of Directors of Southern Province Cement Company, Dan Company, and the Saudi Technology Development and Investment Company. He is also the Vice Chairman of the Board of Alinma Bank and El-Seif Engineering Contracting. Additionally, he is a board member of Diriyah Company, Al-Balad Development Company, and King Faisal Specialist Hospital and Research Centre. Mr. Saad AlKroud joined the Public Investment Fund in 2016 as the Director of Stakeholder Management Department. Today, as the Chief of Staff, he oversees several departments within the fund, including Strategy & Planning, Project Management Office, Portfolio Companies Affairs, Data & Committees Governance & Advisory, and Stakeholder Management. Before joining the Fund, Mr. Saad AlKroud was an Advisor to Group Chairman at Abdullatif Alissa Group Holding Company between 2010 and 2012. He also co-founded Mayaas, a private wealth management and diversification firm, where he served as Vice President from 2012 to 2016. He holds a master’s degree in management & leadership from the University of La Verne, and a Bachelor's degree in Finance from King Fahd University of Petroleum & Minerals.`,
        description_ar:
          'يتمتع جون دو بخبرة تزيد عن 20 عامًا في القيادة المؤسسية، حيث يقود الابتكار ونمو الأعمال في مختلف الصناعات.',
      },
      {
        logo: '/assets/VerticalIcon.png',
        title_en: 'John Doe',
        title_ar: 'جون دو',
        subTitle_en: 'Chairman of the Board',
        subTitle_ar: 'رئيس مجلس الإدارة',
        bg_image: '/assets/boardmember.png',
        social_Icon: '/assets/Instagram_64.png',
        social_Link: 'https://instagram.com',
        description_en:
          'John Doe has over 20 years of experience in corporate leadership, driving innovation and business growth in various industries.',
        description_ar:
          'يتمتع جون دو بخبرة تزيد عن 20 عامًا في القيادة المؤسسية، حيث يقود الابتكار ونمو الأعمال في مختلف الصناعات.',
      },
      {
        logo: '/assets/VerticalIcon.png',
        title_en: 'John Doe',
        title_ar: 'جون دو',
        subTitle_en: 'Chairman of the Board',
        subTitle_ar: 'رئيس مجلس الإدارة',
        bg_image: '/assets/boardmember.png',
        social_Icon: '/assets/Instagram_64.png',
        social_Link: 'https://instagram.com',
        description_en:
          'John Doe has over 20 years of experience in corporate leadership, driving innovation and business growth in various industries.',
        description_ar:
          'يتمتع جون دو بخبرة تزيد عن 20 عامًا في القيادة المؤسسية، حيث يقود الابتكار ونمو الأعمال في مختلف الصناعات.',
      },
      {
        logo: '/assets/VerticalIcon.png',
        title_en: 'John Doe',
        title_ar: 'جون دو',
        subTitle_en: 'Chairman of the Board',
        subTitle_ar: 'رئيس مجلس الإدارة',
        bg_image: '/assets/boardmember.png',
        social_Icon: '/assets/Instagram_64.png',
        social_Link: 'https://instagram.com',
        description_en:
          'John Doe has over 20 years of experience in corporate leadership, driving innovation and business growth in various industries.',
        description_ar:
          'يتمتع جون دو بخبرة تزيد عن 20 عامًا في القيادة المؤسسية، حيث يقود الابتكار ونمو الأعمال في مختلف الصناعات.',
      },
      {
        logo: '/assets/VerticalIcon.png',
        title_en: 'John Doe',
        title_ar: 'جون دو',
        subTitle_en: 'Chairman of the Board',
        subTitle_ar: 'رئيس مجلس الإدارة',
        bg_image: '/assets/boardmember.png',
        social_Icon: '/assets/Instagram_64.png',
        social_Link: 'https://instagram.com',
        description_en:
          'John Doe has over 20 years of experience in corporate leadership, driving innovation and business growth in various industries.',
        description_ar:
          'يتمتع جون دو بخبرة تزيد عن 20 عامًا في القيادة المؤسسية، حيث يقود الابتكار ونمو الأعمال في مختلف الصناعات.',
      },
      {
        logo: '/assets/VerticalIcon.png',
        title_en: 'John Doe',
        title_ar: 'جون دو',
        subTitle_en: 'Chairman of the Board',
        subTitle_ar: 'رئيس مجلس الإدارة',
        bg_image: '/assets/boardmember.png',
        social_Icon: '/assets/Instagram_64.png',
        social_Link: 'https://instagram.com',
        description_en:
          'John Doe has over 20 years of experience in corporate leadership, driving innovation and business growth in various industries.',
        description_ar:
          'يتمتع جون دو بخبرة تزيد عن 20 عامًا في القيادة المؤسسية، حيث يقود الابتكار ونمو الأعمال في مختلف الصناعات.',
      },
      {
        logo: '/assets/VerticalIcon.png',
        title_en: 'John Doe',
        title_ar: 'جون دو',
        subTitle_en: 'Chairman of the Board',
        subTitle_ar: 'رئيس مجلس الإدارة',
        bg_image: '/assets/boardmember.png',
        social_Icon: '/assets/Instagram_64.png',
        social_Link: 'https://instagram.com',
        description_en:
          'John Doe has over 20 years of experience in corporate leadership, driving innovation and business growth in various industries.',
        description_ar:
          'يتمتع جون دو بخبرة تزيد عن 20 عامًا في القيادة المؤسسية، حيث يقود الابتكار ونمو الأعمال في مختلف الصناعات.',
      },
      {
        logo: '/assets/VerticalIcon.png',
        title_en: 'John Doe',
        title_ar: 'جون دو',
        subTitle_en: 'Chairman of the Board',
        subTitle_ar: 'رئيس مجلس الإدارة',
        bg_image: '/assets/boardmember.png',
        social_Icon: '/assets/Instagram_64.png',
        social_Link: 'https://instagram.com',
        description_en:
          'John Doe has over 20 years of experience in corporate leadership, driving innovation and business growth in various industries.',
        description_ar:
          'يتمتع جون دو بخبرة تزيد عن 20 عامًا في القيادة المؤسسية، حيث يقود الابتكار ونمو الأعمال في مختلف الصناعات.',
      },
    ],
  };
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Board_Members_Section_About_Us',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    id: item.id,
    logo: item.logo,
    title_en: item.title.en,
    title_ar: item.title.ar,
    subTitle_en: item.designation.en,
    subTitle_ar: item.designation.ar,
    bg_image: item.image,
    social_Icon: item.social_media_icon,
    social_Link: item.social_media_link,
    description_en: item.description.en,
    description_ar: item.description.ar,
    status: item.status,
  }));
  return (
    <BoardMemberComponent
      heading_en={data?.name?.en}
      heading_ar={data?.name?.ar}
      cards={transformedData}
    />
  );
};

export default AboutUsBoardMembers;
