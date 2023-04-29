import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client';
import client from '@/lib/apollo/client'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}>
    <main className={`${inter.className}`}>
      <Component {...pageProps} />
    </main>
  </ApolloProvider>
}
