import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // this is not the same have from next/head

  render() {
    return (
      <Html className='overflow-y-scroll'>
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&display=optional'
            rel='stylesheet'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,300;0,400;0,700;1,500&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='selection:bg-yellow-600 selection:text-black scrollbar scrollbar-thumb-rounded-2xl scrollbar-thumb-neutral-700 scrollbar-track-transparent'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
