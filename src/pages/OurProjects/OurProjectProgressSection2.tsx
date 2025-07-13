import ProgressSectionComponent2 from '@/shared-components/ProgressSectionComponent2';
import useFetch from '@/Utils/Fetch/useFetch';
import { Box } from '@chakra-ui/react';
import React from 'react';

const OurProjectProgressSection2 = () => {
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_The_Progress_Section_Our_Project',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  const transformedData = data?.data?.map((item: any) => ({
    bg_video: item.video_url,
    bg_Image: item.bg_image,
    title: {
      en: item.title.en,
      ar: item.title.ar,
    },
    description: {
      en: item.sub_title.en,
      ar: item.sub_title.ar,
    },
    button_text: {
      en: item.button_text.en,
      ar: item.button_text.ar,
    },
    is_button: item.is_button,
    is_FullView: item.is_full_view,
  }));
  return <Box
        mx={{base:'1rem',lg:'0rem'}}
    width={{ base: 'calc(100% - 2rem)', lg: 'calc(100%)' }}>
    <ProgressSectionComponent2 data={transformedData} />
  </Box>
};

export default OurProjectProgressSection2;
