import { css } from 'styled-components';

const position = css`
  .position--back {
    z-index: -100;
  }
  .position--behind {
    z-index: -10;
  }
  .position--default {
    z-index: 1;
  }
  .position--forward {
    z-index: 10;
  }
  .position--front {
    z-index: 100;
  }
`;

export default position;
