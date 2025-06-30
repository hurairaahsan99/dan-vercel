import React from 'react';

const ImagepathGenerator = (imagePath: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_API_URL;
  const storageEndpoint = '/storage';
  const publicEndpoint = '/public';
  const fullUrl = `${baseUrl}${storageEndpoint}${publicEndpoint}/${imagePath}`;

  return fullUrl;
};

export default ImagepathGenerator;
