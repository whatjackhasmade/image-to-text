import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import "../components/particles/mvp.css"
import "../components/particles/site.css"

import { ThemeDefault } from 'to-text';

declare type MyAppProps = {
  Component: any;
  pageProps: any;
};

export default function MyApp(props: MyAppProps) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={ThemeDefault}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
