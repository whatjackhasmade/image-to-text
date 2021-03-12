import { css } from 'styled-components';

const exportedCSS = css`
  @font-face {
    font-family: 'BRHendrix';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/br/light.otf') format('opentype'), url('/fonts/br/light.woff2') format('woff2'),
      url('/fonts/br/light.woff') format('woff');
  }

  @font-face {
    font-family: 'BRHendrix';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/br/regular.otf') format('opentype'), url('/fonts/br/regular.woff2') format('woff2'),
      url('/fonts/br/regular.woff') format('woff');
  }

  @font-face {
    font-family: 'BRHendrix';
    font-style: italic;
    font-weight: normal;
    src: url('/fonts/br/regular-italic.otf') format('opentype'), url('/fonts/br/regular-italic.woff2') format('woff2'),
      url('/fonts/br/regular-italic.woff') format('woff');
  }

  @font-face {
    font-family: 'BRHendrix';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/br/semibold.otf') format('opentype'), url('/fonts/br/semibold.woff2') format('woff2'),
      url('/fonts/br/semibold.woff') format('woff');
  }

  @font-face {
    font-family: 'BRHendrix';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/br/bold.otf') format('opentype'), url('/fonts/br/bold.woff2') format('woff2'),
      url('/fonts/br/bold.woff') format('woff');
  }
`;

export default exportedCSS;
