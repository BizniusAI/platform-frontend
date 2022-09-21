import { getAnalytics, logEvent } from 'firebase/analytics'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import { useEffect } from 'react'

import '@/styles/globals.css'
import app from '@/utils/firebase'

function MyApp({ Component, pageProps }: AppProps) {
  const routers = useRouter()

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENV === 'production') {
      const analytics = getAnalytics(app)
      const logPageViewEvent = () => {
        logEvent(analytics, 'page_view')
      }

      routers.events.on('routeChangeComplete', logPageViewEvent)

      return () => {
        routers.events.off('routeChangeComplete', logPageViewEvent)
      }
    }
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
