import { css } from 'styled-components';

const input = css`
  button,
  input,
  label,
  textarea {
    border-radius: 4px;
  }

  input {
    max-width: 100%;
  }

  input,
  select,
  textarea,
  .dropzone__area {
    border-radius: 2px;
    display: block;
    min-height: 48px;
    padding: var(--spacingSmall);
    position: relative;
    width: 100%;

    background-color: var(--white);
    border: 1px solid var(--black);
    color: var(--black);
    line-height: 1.5;
    transition: border-color 0.25s, box-shadow 0.25s;

    &::placeholder {
      color: var(--grey800);
      opacity: 1;
      text-transform: capitalize;
    }

    &[aria-invalid='true'] {
      background-color: transparent;
      border-color: var(--red);
    }

    &[disabled],
    &[readonly] {
      background-color: var(--grey100);
      cursor: not-allowed;
    }

    &:focus {
      border: 1px solid var(--grey900);
    }
  }

  textarea {
    min-height: 300px;
  }
`;

export default input;
