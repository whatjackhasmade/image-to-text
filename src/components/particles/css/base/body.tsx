import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  ::selection {
    background: var(--primary);
    color: var(--white);
  }

  body {
    overflow-x: hidden;
    scroll-behavior: smooth;

    background-color: var(--grey800);
    color: var(--white);
    font-family: var(--font);
    font-size: 2.4rem;
    line-height: 1.5;

    /* BETTER FONT SMOOTHING - https://gist.github.com/hsleonis/55712b0eafc9b25f1944 */
    font-variant-ligatures: none;
    -webkit-font-variant-ligatures: none;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-shadow: rgba(0, 0, 0, 0.01) 0 0 1px;
  }

  .sb-show-main {
    padding: 0 !important;
  }
`;

export default exportedCSS;
