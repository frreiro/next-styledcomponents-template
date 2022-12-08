import { ThemeProvider } from 'styled-components';
import { PropsWithChildren } from 'react';

//Creating a custom theme to my app
const theme = {
};

//Creating a new component with ThemeProvider that includes all children components
const Theme: React.FC<PropsWithChildren> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export {
	Theme, 
	theme
};