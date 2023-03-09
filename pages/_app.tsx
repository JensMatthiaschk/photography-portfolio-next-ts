import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Expletus_Sans } from 'next/font/google';

const expletus = Expletus_Sans({
  subsets: ['latin'],
  variable: '--font-expletus',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${expletus.variable} font-expletus h-full`}>
      <Component {...pageProps} />
    </div>)
}
