import Head from 'next/head'
import Hero from '../components/hero'
import Script from 'next/script'
import About from '../components/about'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Nam Truong</title>
        <meta name="description" content="Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/favicon.png" />
        <meta property="og:type" content="Website" />
        <meta name="image" property="og:image" content="%PUBLIC_URL%/NT_CrownNew.png" />
        <meta name="description" property="og:description" content="Portfolio" />
        <meta name="author" content="Nam Truong" />
      </Head>
      <Script src="https://kit.fontawesome.com/31648746d6.js" crossorigin="anonymous"></Script>

      <Hero/>
      <About/>


    </div>
  )
}
