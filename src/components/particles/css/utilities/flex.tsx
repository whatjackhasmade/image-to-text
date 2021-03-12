import { css } from 'styled-components';

const flex = css`
  .justify-content--start {
    justify-content: flex-start;
  }

  .justify-content--end {
    justify-content: flex-end;
  }

  .justify-content--center {
    justify-content: center;
  }

  .justify-content--between {
    justify-content: space-between;
  }

  .justify-content--around {
    justify-content: space-around;
  }

  .justify-content--evenly {
    justify-content: space-evenly;
  }

  .align-items--start {
    align-items: flex-start;
  }

  .align-items--end {
    align-items: flex-end;
  }

  .align-items--center {
    align-items: center;
  }

  .align-items--baseline {
    align-items: baseline;
  }

  .align-items--stretch {
    align-items: stretch;
  }

  .align-content--start {
    align-content: flex-start;
  }

  .align-content--end {
    align-content: flex-end;
  }

  .align-content--center {
    align-content: center;
  }

  .align-content--between {
    align-content: space-between;
  }

  .align-content--around {
    align-content: space-around;
  }

  .align-content--stretch {
    align-content: stretch;
  }

  .align-self--auto {
    align-self: auto;
  }

  .align-self--start {
    align-self: flex-start;
  }

  .align-self--end {
    align-self: flex-end;
  }

  .align-self--center {
    align-self: center;
  }

  .align-self--baseline {
    align-self: baseline;
  }

  .align-self--stretch {
    align-self: stretch;
  }

  .shrink--none {
    flex-shrink: 0;
  }
`;

export default flex;