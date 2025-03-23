import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import i18nextConfig from '../next-i18next.config';

class Document extends NextDocument {
  render() {
    const currentLocale = i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale} suppressHydrationWarning>
        <Head>
          <link
            rel="icon"
            href="/favicon.ico"
          />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
