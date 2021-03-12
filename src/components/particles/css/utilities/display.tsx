import { css } from 'styled-components';

const display = css`
  .display--block {
    display: block;
  }
  .display--flex {
    display: flex;
  }
  .display--inline {
    display: inline;
  }
  .display--inline-block {
    display: inline-block;
  }

  .click-through {
    pointer-events: none;
  }
`;

export default display;
