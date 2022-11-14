import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import logo from '@public/img/sefoFinanceLogo.svg'

import Container from '@/components/Container'
// import { DesktopMenu, MobileMenu } from '@/components/Menu'
import { languages, litepaperLink, twitterLink } from '@/constants'

const Announcement = (): JSX.Element => {
  const { t } = useTranslation(['common'])

  return (
    <div className="text-white font-medium bg-gradient-to-r from-sefo-purple to-sefo-blue">
      <Container className="h-14">
        <div className="h-full flex items-center justify-center">
          <Link href={litepaperLink}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {t('announcement.litepaper')}
            </a>
          </Link>
        </div>
      </Container>
    </div>
  )
}

const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation(['menu', 'common'])
  const [isMobileHidden /*setIsMobileHidden*/] = useState<boolean>(true)
  // const router = useRouter()

  /*
  const changeLocale = () => {
    router.push(router.pathname, router.asPath, {
      locale:
        i18n.language.toLocaleLowerCase() === 'zh-hant' ? 'en' : 'zh-hant',
    })
  }
  */

  return (
    <>
      <header className="fixed top-0 w-full bg-white z-50 select-none shadow-md">
        <Announcement />

        <Container>
          <nav className="flex justify-between md:justify-start items-center gap-x-8 py-3 h-16">
            <div className="flex w-24 h-full order-2 md:order-1 cursor-pointer">
              <Link href="/">
                <a className="relative w-full h-full">
                  <Image
                    src={logo}
                    layout="fill"
                    alt={`${t('brand.name', { ns: 'common' })} Logo`}
                  />
                </a>
              </Link>
            </div>

            <div className="hidden md:block md:order-2">
              {/* <DesktopMenu /> */}
            </div>
            <div className="hidden md:block md:grow md:order-3"></div>

            <div className="hidden md:flex md:gap-8 text-sm font-semibold tracking-wider md:order-4">
              <Link href={twitterLink}>
                <a target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center gap-2 px-1">
                    <FontAwesomeIcon className="w-4" icon={faTwitter} />
                    Twitter
                  </div>
                </a>
              </Link>

              <div
                className="flex items-center gap-2 px-1"
                // onClick={changeLocale}
              >
                <FontAwesomeIcon className="w-4" icon={faEarthAmericas} />
                <span className="inline-flex gap-2">
                  {languages[i18n.language?.toLocaleLowerCase()]}
                  {/*<FontAwesomeIcon className="w-3" icon={faRightLeft} />*/}
                </span>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center order-1">
              {/*
            <div
              className={`hamburger-btn ${isMobileHidden ? '' : 'open'}`}
              onClick={() => setIsMobileHidden((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            */}
              <div className="w-4"></div>
            </div>

            <div className="md:hidden order-3">
              <Link href={twitterLink}>
                <a target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="w-4" icon={faTwitter} />
                </a>
              </Link>
            </div>
          </nav>
        </Container>

        {/* Mobile menu */}
        <div
          className={`${
            isMobileHidden ? 'max-h-0' : 'max-h-screen'
          } md:max-h-0 text-center overflow-hidden shadow-lg transition-max-height duration-700`}
        >
          {/* <MobileMenu /> */}
        </div>
      </header>
    </>
  )
}

export default Header
