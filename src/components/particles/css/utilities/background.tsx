import { css } from 'styled-components';

import ThemeDefault from '../../ThemeDefault';

const colours = [
  { primary: ThemeDefault.primary },
  { secondary: ThemeDefault.secondary },
  { white: ThemeDefault.white },
  { grey: ThemeDefault.grey },
  { grey100: ThemeDefault.grey100 },
  { grey200: ThemeDefault.grey200 },
  { grey300: ThemeDefault.grey300 },
  { black: ThemeDefault.black },
  { blue000: ThemeDefault.blue000 },
  { blue100: ThemeDefault.blue100 },
  { purple: ThemeDefault.purple },
  { orange: ThemeDefault.orange },
];

const colourTrumps = () => {
  let trumpString = ``;
  colours.map(colour => {
    for (const [key, value] of Object.entries(colour)) {
      trumpString += `.background--${key} { background-color: ${value} !important; } `;
    }
    return null;
  });
  return trumpString;
};

const background = css`
  ${colourTrumps()};
`;

export default background;
