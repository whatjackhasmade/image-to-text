import { css } from 'styled-components';
import { device } from 'particles';

const ButtonBase = css`
  display: inline-flex;
  padding: 16px;

  background-color: var(--primary);
  border: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  color: var(--white);
  cursor: pointer;
  font-weight: bold;
  line-height: 1;
  outline: none;
  text-decoration: none;
  transition: box-shadow 0.15s ease;
  white-space: nowrap;

  &:active,
  &:hover,
  &:focus {
    &::after {
      display: none;
    }
  }

  &:hover {
    transform: translateY(-1px);
  }

  &:focus,
  &:hover {
    box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08);
    text-decoration: none;
  }
`;

export default ButtonBase;
