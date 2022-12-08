import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

//This _document is a reference in styled-components documentation, it is used to make the css stylesheet render in the server side, not in the client side
//More inforation can be found here: https://styled-components.com/docs/advanced
export default class MyDocument extends Document {
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	//This render is created to set the font in the HTML Head;
	render() {
		return (
			<Html lang="en">
				<Head>
				</Head>
				<body>
					<Main/>
					<NextScript/>
				</body>
			</Html>


		);
	}
}