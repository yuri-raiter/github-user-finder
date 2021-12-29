import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/github-logo.svg" />
        <title>Github User Finder</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
