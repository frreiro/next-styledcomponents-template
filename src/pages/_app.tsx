import type { AppProps } from 'next/app'

import { Theme } from '../../styles/Theme'
import GlobalStyles from '../../styles/GlobalStyles'

export default function App({ Component, pageProps }: AppProps) {
	
return (
	<Theme>
		<GlobalStyles/>
	<Component {...pageProps} />
	</Theme>
  )
}
