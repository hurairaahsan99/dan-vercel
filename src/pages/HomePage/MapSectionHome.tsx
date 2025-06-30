import MapComponent from '@/shared-components/MapComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const MapSectionHome = () => {
  const Html1 = `<p><strong>The area:</strong> 1.8 million square meters.</p><h2><strong>Nearby attractions:</strong></h2><p><strong>Al-Ahsa Oasis:</strong> A site listed as a UNESCO World Heritage Site.</p><p>Jabal Al-Qara.</p><h2><strong>The economic impact:</strong></h2><p>Contributing to Dan's contribution of 6.1 billion Saudi Riyals </p><p>to the Gross Domestic Product (GDP) of the Kingdom of Saudi Arabia by 2030.</p><h2><strong>Al-Ahsa features:</strong></h2><ul><li class="ql-indent-1">The largest oasis in the world, home to over 2 million palm trees.</li><li> The historic Al-Jawatha Mosque, the site of the second Friday prayer in Islamic history.</li><li>A member of the UNESCO Creative Cities Network.</li></ul>`;
  const Html2 = `<p>Tuaja Luxury Resorts offer three unique experiences to suit various needs, including luxury and exploration at the Taouja Luxury Countryside Resort, tranquility and meditation at the Eco-Friendly Taouja Resort, and adventure and excitement at the Taouja Adventure Resort. Sustainability is a central focus across all three resorts, reflected in innovative practices designed specifically to preserve nature, build a sustainable green future, and promote a culture of environmental responsibility and eco-friendly practices. The Taouja Luxury Countryside Resort provides an exceptional experience for guests to enjoy the enchanting beauty of nature amid a luxurious atmosphere with the highest levels of comfort and well-being. The resort will offer hands-on agricultural experiences, including opportunities for guests to explore the bounties of nature up close, from tasting fresh local products to participating in cooking experiences using fresh ingredients sourced from local farms, among many other exciting activities</p>`;
  const Html_ar = `<p>
تقدم منتجعات تواجا الفاخرة ثلاث تجارب مميزة تُناسب مختلف الاحتياجات، والتي تشمل الفخامة والاستكشاف في منتجع تواجا الريفي الفاخر، والهدوء والتأمل في منتجع تواجا الصديق للبيئة، إضافة إلى المغامرات والإثارة في منتجع تواجا للمغامرات. وتحتل الاستدامة مكانة محورية في المنتجعات الثلاث، حيث تنعكس في الممارسات المبتكرة المصممة خصيصاً للمحافظة على الطبيعة، وبناء مستقبل أخضر مستدام، وتعزيز ثقافة المسؤولية البيئية والممارسات الصديقة للبيئة. ويقدم منتجع تواجا الريفي الفاخر تجربة استثنائية للضيوف للاستمتاع بجمال الطبيعة الساحرة بين أجواء من الفخامة وأعلى مستويات الراحة والرفاهية. وسيوفر المنتجع تجارب زراعية عملية، بما في ذلك إتاحة الفرصة للضيوف لاستكشاف خيرات الطبيعة عن قرب، بدءاً من تذوق المنتجات المحلية الطازجة، وانتهاءً بالمشاركة في تجارب الطهي بمكونات طازجة من إنتاج المزارع المحلية، وغيرها الكثير من التجارب المشوقة.</p>`;
  const Data = [
    {
      title_en: 'Title 1',
      title_ar: 'العنوان 1',
      heading_en: 'Heading 1',
      heading_ar: 'العنوان الرئيسي 1',
      desc_en: Html1,
      desc_ar: Html_ar,
      Logo: '',
      lat: 23.38,
      lng: 48.9,
      cards: [
        {
          logo: '/assets/MapIcon.png',
          time_en: 'Morning',
          time_ar: 'صباح',
          route_en: 'Route to Dubai',
          route_ar: 'الطريق إلى دبي',
        },
        {
          logo: '/assets/MapIcon.png',
          time_en: 'Morning',
          time_ar: 'صباح',
          route_en: 'Route to Dubai',
          route_ar: 'الطريق إلى دبي',
        },
        {
          logo: '/assets/MapIcon.png',
          time_en: 'Morning',
          time_ar: 'صباح',
          route_en: 'Route to Dubai',
          route_ar: 'الطريق إلى دبي',
        },
        {
          logo: '/assets/MapIcon.png',
          time_en: 'Morning',
          time_ar: 'صباح',
          route_en: 'Route to Dubai',
          route_ar: 'الطريق إلى دبي',
        },
      ],
      coordinates: [],
    },
    // {
    //   Logo: '/assets/MapIcon.png',
    //   desc_en: Html2,
    //   desc_ar: Html_ar,
    //   coordinates: [
    //     {
    //       lat: 24.12345,
    //       lng: 54.98765,
    //     },
    //     {
    //       lat: 23.56789,
    //       lng: 55.12345,
    //     },
    //   ],
    // },
  ];

  const { data, isLoading, error } = useFetch<any>(
    '/fetch_Interactive_Map_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return <MapComponent Data={data} />;
};

export default MapSectionHome;