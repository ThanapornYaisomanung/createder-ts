import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Footer2 from '@/components/Footer2'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
      <Footer2/>
    </>
    
  )
}
