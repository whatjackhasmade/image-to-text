import { css } from 'styled-components';

const form = css`
  /* From http://thatemil.com/blog/2015/01/03/reset-your-fieldset/ by Emil Björklund */
  legend {
    display: table;
    padding: 0;
  }

  fieldset {
    border: 0;
    margin: 0;
    min-width: 0;
    padding: 24px;

    border: 1px solid var(--grey500);
  }

  body:not(:-moz-handler-blocked) fieldset {
    display: table-cell;
  }

  form {
    margin: 32px auto 64px;
    max-width: 800px;

    color: var(--white);

    > *:first-child {
      margin-top: 0;
    }

    button,
    input,
    select,
    textarea {
      margin-top: var(--spacingDefault);
    }

    > button:last-of-type {
      margin-top: 24px;
    }
  }

  input[type='checkbox'],
  input[type='radio'] {
    margin: 0;
    width: 24px;
  }

  label {
    display: block;

    &[for] {
      cursor: pointer;
    }
  }

  label ~ label {
    margin-top: 16px;
  }

  input,
  select,
  textarea {
    background-color: var(--black);
  }
`;

export default form;
