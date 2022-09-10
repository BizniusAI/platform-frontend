import { ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { useTranslation } from 'next-i18next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

type TProps = {
  children: ReactNode
  title?: string
  metadata?: TMetadata
}

const Layout = ({ children, title = '', metadata }: TProps): JSX.Element => {
  const { t } = useTranslation(['common'])
  const router = useRouter()

  return (
    <div className="font-sans bg-white">
      <Head>
        <meta charSet="utf-8" />

        <title>
          {title ? `${title} - ${t('brand.name')}` : t('brand.name')}
        </title>
        <link rel="icon" href="/favicon.ico" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="author" content="" />

        <meta name="robots" content="all" />
        <meta name="keywords" content="" />
        <meta
          name="description"
          content={metadata?.description ? metadata.description : ''}
        />

        <meta
          property="og:title"
          content={title ? `${title} - ${t('brand.name')}` : t('brand.name')}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`http://localhost${router.asPath}`} />
        <meta
          property="og:image"
          content={
            metadata?.imageUrl
              ? `http://localhost${metadata.imageUrl}`
              : 'http://localhost/img/fb-sharing-cover.png'
          }
        />
        <meta property="og:site_name" content={t('brand.name')} />
        <meta
          property="og:description"
          content={metadata?.description ? metadata.description : ''}
        />
      </Head>

      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>

      <Header />

      <div className="pt-16 overscroll-none">{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
