//Creating a interface for my theme in TS

import 'styled-components';

import { theme } from './Theme.jsx';

export type Theme = typeof theme; //Create a type with my custom theme

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {} 
	// Extends my custom theme in the defaultTheme of styled-components
	// This way the TS can turn my theme autocomplete available 
}