import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <div>
    <h1>Navbar</h1>
    <ul>
      <li>
        <Link href={'/about'}>about</Link>
      </li>
      <li>
        <Link href={'/test'}>test</Link>
      </li>
      <li>
        <Link href={'/'}>home</Link>
      </li>
    </ul>
  </div>
  <Component {...pageProps} />
  </>
}
