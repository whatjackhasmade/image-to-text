import { css } from 'styled-components';

import ThemeDefault from '../../ThemeDefault';

const colours = [
  { primary: ThemeDefault.primary },
  { secondary: ThemeDefault.secondary },
  { white: ThemeDefault.white },
  { grey: ThemeDefault.grey },
  { black: ThemeDefault.black },
  { purple: ThemeDefault.purple },
  { orange: ThemeDefault.orange },
];

const colourTrumps = () => {
  let trumpString = ``;
  colours.map(colour => {
    for (const [key, value] of Object.entries(colour)) {
      trumpString += `.text--${key} { color: ${value}; } `;
    }
    return null;
  });
  return trumpString;
};

const text = css`
  ${colourTrumps()}

  .text--left {
    text-align: left;
  }

  .text--center {
    text-align: center;
  }

  .text--right {
    text-align: right;
  }

  .bold,
  .text--bold {
    font-weight: bold !important;
  }

  .capitalize,
  .text--capitalize {
    text-transform: capitalize;
  }

  .text--initial {
    text-transform: initial;
  }

  .lowercase,
  .text--lowercase {
    text-transform: lowercase;
  }

  .text--nowrap {
    white-space: nowrap;
  }

  .text--wrap-all {
    /* These are technically the same, but use both */
    overflow-wrap: break-word;
    word-wrap: break-word;

    -ms-word-break: break-all;
    /* This is the dangerous one in WebKit, as it breaks things wherever */
    word-break: break-all;
    /* Instead use this non-standard one: */
    word-break: break-word;

    /* Adds a hyphen where the word breaks, if supported (No Blink) */
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
  }
`;

export default text;
