import { css } from 'styled-components';

import { device } from 'to-text';

const exportedCSS = css`
  /* Common base styles for the site */
  img,
  svg,
  video {
    display: block;
    max-width: 100%;
  }

  figure {
    margin: 24px 0;
  }
`;

export default exportedCSS;
