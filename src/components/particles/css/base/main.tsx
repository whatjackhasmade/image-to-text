import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  main {
    flex: 1;
    margin: 0 auto;
    width: 100%;
  }

  main {
    > * {
      margin-left: auto;
      margin-right: auto;
      max-width: var(--gridMax);
      padding: 0 15px;
      width: 100%;

      @media ${device?.xs} {
        padding: 0 30px;
      }

      > *:first-child {
        margin-top: 48px;
      }

      > nav:first-child {
        margin-bottom: 48px;
      }
    }
  }

  .main--center {
    align-items: center;
    display: flex;
    justify-content: center;

    > * {
      margin-bottom: 48px;
      max-width: 1000px;
    }

    form {
      margin-top: 0;
    }
  }
`;

export default exportedCSS;
