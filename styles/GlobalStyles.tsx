import { createGlobalStyle } from 'styled-components';

//Creating a new global styles that resets some default css configs 
const GlobalStyles = createGlobalStyle`
	h1, h2, h3, h4, h5, h6, p, blockquote, pre, a{
		font-weight: inherit;
		font-size: inherit;
	}

	*{
		margin: 0;
		padding: 0;
		line-height: 1;
		border: 0;
		box-sizing: border-box;
		list-style: none;
		
	}
	body{
	}

	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	
`;

export default GlobalStyles;