'use strict';
const foregroundColor = '#dde1e6'; // lightGray
const backgroundColor = '#161616'; // bg
const red = '#ff7eb6'; // hotRed
const green = '#3ddbd9'; // lowerMint
const yellow = '#FA973B'; // brightYellow
const blue = '#75A5F8'; // lowerBlue
const magenta = '#be9ff5'; // pink
const cyan = '#77A9FF'; // desaturatedBlue

exports.decorateConfig = (config) =>
	Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: 'transparent',
		cursorColor: '#525252', // darkerGray
		cursorAccentColor: backgroundColor,
		selectionColor: '#818cc425', // selection
		colors: {
			black: backgroundColor,
			red,
			green,
			yellow,
			blue,
			magenta,
			cyan,
			white: '#ffffff', // white
			lightBlack: '#525252', // darkerGray
			lightRed: red,
			lightGreen: green,
			lightYellow: yellow,
			lightBlue: blue,
			lightMagenta: magenta,
			lightCyan: cyan,
			lightWhite: foregroundColor,
		},
		css: `
		/* Hide title when only one tab */
		.tabs_title {
			display: none !important;
		}
		.tab_tab.tab_active {
            background: #252b37; /* bg from storm */
		}
		/* Fade the title of inactive tabs and the content of inactive panes */
		.tab_text,
		.term_term {
			opacity: 0.6;
			will-change: opacity;
		}
		.tab_active .tab_text,
		.term_active .term_term {
			opacity: 1;
			transition: opacity 0.12s ease-in-out;
		}
		/* Allow custom css / overrides */
		${config.css}
	`,
	});
