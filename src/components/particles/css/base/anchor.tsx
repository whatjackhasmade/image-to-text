import { css } from 'styled-components';

import { device } from 'particles';

const exportedCSS = css`
  a {
    position: relative;

    color: var(--primary);
    text-decoration: none;

    &::after {
      bottom: -6px;
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      width: 100%;

      background: currentColor;
      opacity: 0;
      transition: opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    }

    &:focus {
      outline: 1px dotted var(--primary);
      outline-offset: 8px;
    }

    &:active,
    &:focus,
    &:hover,
    &.active {
      text-decoration: none;

      &::after {
        opacity: 1;
      }
    }
  }
`;

export default exportedCSS;
