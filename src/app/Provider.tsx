'use client';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';

export default function Provider(props: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
}
