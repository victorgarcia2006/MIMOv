import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { createEmotionCache } from '@mantine/styles';
import '../styles/globals.css';


export const cache = createEmotionCache({ key: 'mantine-css', prepend: false});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>MIMO</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
        theme={{
          colors: {
            'deep-blue': ['#7b8ea5','#657b96','#4f6887','#395578', '#234269', '#203b5f', '#1c3554', '#192e4a', '#15283f', '#122135' ],
          },
          primaryColor: 'deep-blue',
          colorScheme: 'light',
          defaultRadius: 'xl',
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

