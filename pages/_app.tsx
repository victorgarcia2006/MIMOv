import { AppProps } from 'next/app';
import Head from 'next/head';
import { Baloo_2, Work_Sans } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import { createEmotionCache } from '@mantine/styles';
import '../styles/globals.css';

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

export const cache = createEmotionCache({ key: 'mantine-css', prepend: false});

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <div className={`${baloo2.variable} ${workSans.variable}`}>
      <Head>
        <title>MIMO</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={cache}
        theme={{
          colors: {
            'mimo-blue': ['#EAF0F5','#D6E1EA','#C2D3E0','#AEC4D5','#93B0C4','#7897AF','#5B7A99','#4A6580','#3A4F66','#2A3A4D'],
          },
          primaryColor: 'mimo-blue',
          primaryShade: 6,
          colorScheme: 'light',
          defaultRadius: 'xl',
          fontFamily: 'var(--font-body), sans-serif',
          headings: { fontFamily: 'var(--font-heading), sans-serif' },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}

