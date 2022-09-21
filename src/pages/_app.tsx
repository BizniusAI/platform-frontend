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
      const onLogEvent = (url: string) => {
        logEvent(analytics, 'screen_view', {
          firebase_screen: url,
          firebase_screen_class: undefined,
        })
      }

      routers.events.on('routeChangeComplete', onLogEvent)
      onLogEvent(window.location.pathname)

      return () => {
        routers.events.off('routeChangeComplete', onLogEvent)
      }
    }
  }, [])

  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
