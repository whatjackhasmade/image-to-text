import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'to-text';
import { ThemeDefault } from 'to-text';

declare type MyAppProps = {
  Component: any;
  pageProps: any;
};

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={ThemeDefault}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
