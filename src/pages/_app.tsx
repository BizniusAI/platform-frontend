import { getAnalytics } from 'firebase/analytics'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'

import '@/styles/globals.css'
import app from '@/utils/firebase'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      getAnalytics(app)
    }
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
