import React, { useState, useEffect } from 'react';
import './ValueSliderSection.css';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageProvider';
import { Box, Flex, Text } from '@chakra-ui/react';

interface ValueSliderSectionProps {
  id: number;
  icon: string;
  title_en: string;
  title_ar: string;
  description_en: string;
  description_ar: string;
}

interface ValueSliderSectionData {
  data: ValueSliderSectionProps[];
}

const ValueSliderSection: React.FC<ValueSliderSectionData> = ({ data }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';
  const [activeIndex, setActiveIndex] = useState(0);
  const dataArray = isRTL ? [...data]?.reverse() : data;
  return (
    <div className="mobile_section__wrapper">
      {dataArray?.map((item, index) => (
        <div
          key={item.id}
          className={`cardContainer
              ${activeIndex === index ? `active_card_${index + 1}` : ''}
              ${
                index === 0
                  ? 'firstCard'
                  : index === data.length - 1
                  ? 'lastCard'
                  : ''
              }`}
          onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
        >
          <p className="cardTitle">{isRTL ? item.title_ar : item.title_en}</p>
          <div className="imageWrapper">
            <Image
              src={item.icon}
              alt={`Background for ${isRTL ? item.title_ar : item.title_en}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="tabcontent">
            <Flex
              flexDir="column"
              gap={3}
              justify="end"
              className="content_div_section"
            >
              <Text
                className="heading_mobileSection"
                textAlign={isRTL ? 'end' : 'start'}
              >
                {isRTL ? item.title_ar : item.title_en}
              </Text>
              <Text
                className="pharagraph_mobileSection"
                textAlign={isRTL ? 'end' : 'start'}
              >
                {isRTL ? item.description_ar : item.description_en}
              </Text>
            </Flex>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ValueSliderSection;
