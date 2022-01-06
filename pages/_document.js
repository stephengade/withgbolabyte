import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/public/manifest.json" />
          <link
            rel="apple-touch-icon"
            href="/public/Icons/apple-touch-icon.png"
          ></link>
          <meta name="theme-color" content="#ff0000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;