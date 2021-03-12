import { createGlobalStyle } from 'styled-components';

import normalize from './css/setup/normalize';

import boxSizing from './css/setup/box-sizing';
import fonts from './css/setup/fonts';
import offset from './css/setup/offset';
import scrollbar from './css/setup/scrollbar';
import variables from './css/setup/variables';

import anchor from './css/base/anchor';
import article from './css/base/article';
import body from './css/base/body';
import button from './css/base/button';
import code from './css/base/code';
import form from './css/base/form';
import heading from './css/base/heading';
import hr from './css/base/hr';
import html from './css/base/html';
import image from './css/base/image';
import input from './css/base/input';
import main from './css/base/main';
import paragraph from './css/base/paragraph';
import table from './css/base/table';
import video from './css/base/video';

import nprogress from './css/components/nprogress';
import wrapper from './css/components/wrapper';

import background from './css/utilities/background';
import display from './css/utilities/display';
import flex from './css/utilities/flex';
import hide from '././css/utilities/hide';
import margin from './css/utilities/margin';
import padding from './css/utilities/padding';
import position from './css/utilities/position';
import text from './css/utilities/text';

const GlobalStyle = createGlobalStyle`
	${normalize};

	${variables};

	${boxSizing};
	${fonts};
	${offset};
	${scrollbar};

	${anchor};
	${article};
	${body};
	${button};
	${code};
	${form};
	${heading};
	${hr}
	${html};
	${input};
	${image};
	${main};
	${paragraph};
	${table};
	${video};

	${nprogress};
	${wrapper};

	/* Utilities */
	${background}
	${display}
	${flex}
	${hide}
	${margin}
	${padding}
	${position}
	${text}
`;

export default GlobalStyle;
