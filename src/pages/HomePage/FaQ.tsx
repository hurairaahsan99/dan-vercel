import FaQComponent from '@/shared-components/FaQComponent';
import useFetch from '@/Utils/Fetch/useFetch';
import React from 'react';

const FaQ = () => {
  const FAQs = [
    {
      question_en: "Where are Dan's projects located across the Kingdom?",
      question_ar: 'أين تقع مشاريع دان في جميع أنحاء المملكة؟',
      answer_en:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      answer_ar:
        'لوريم إيبسوم هو نص تجريبي يستخدم في صناعات الطباعة والتنضيد. لقد كان النص القياسي لهذه الصناعات منذ القرن الخامس عشر عندما أخذ طابعة غير معروفة عينة من النصوص ووزعها لتصبح نموذجاً.',
    },
    {
      question_en: "How can I apply to volunteer in Dan's various projects?",
      question_ar: 'كيف يمكنني التقدم للتطوع في مشاريع دان المختلفة؟',
      answer_en:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      answer_ar:
        'لوريم إيبسوم هو نص تجريبي يستخدم في صناعات الطباعة والتنضيد. لقد كان النص القياسي لهذه الصناعات منذ القرن الخامس عشر عندما أخذ طابعة غير معروفة عينة من النصوص ووزعها لتصبح نموذجاً.',
    },
    {
      question_en: "How can I apply to volunteer in Dan's various projects?",
      question_ar: 'كيف يمكنني التقدم للتطوع في مشاريع دان المختلفة؟',
      answer_en:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      answer_ar:
        'لوريم إيبسوم هو نص تجريبي يستخدم في صناعات الطباعة والتنضيد. لقد كان النص القياسي لهذه الصناعات منذ القرن الخامس عشر عندما أخذ طابعة غير معروفة عينة من النصوص ووزعها لتصبح نموذجاً.',
    },
  ];
  const { data, isLoading, error } = useFetch<any>(
    '/fetch_FAQ_Section_Home',
    'GET',
  );
  if (isLoading) {
    return <></>;
  }
  return <FaQComponent data={data} />;
};

export default FaQ;