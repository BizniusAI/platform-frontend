import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLeft, faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import logo from '@public/img/lucidLakeLogo.svg'

import Container from '@/components/Container'
import { DesktopMenu, MobileMenu } from '@/components/Menu'
import { languages } from '@/constants'

const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation(['menu', 'common'])
  const [isMobileHidden, setIsMobileHidden] = useState<boolean>(true)
  const router = useRouter()

  const changeLocale = () => {
    router.push(router.pathname, router.asPath, {
      locale:
        i18n.language.toLocaleLowerCase() === 'zh-hant' ? 'en' : 'zh-hant',
    })
  }

  return (
    <header className="fixed top-0 w-full bg-white z-50 select-none shadow-md">
      <Container>
        <nav className="flex justify-between md:justify-start items-center gap-x-10 h-16">
          <div className="flex w-32 order-2 md:order-1 cursor-pointer">
            <Link href="/" passHref>
              <Image
                src={logo}
                alt={`${t('brand.name', { ns: 'common' })} Logo`}
              />
            </Link>
          </div>

          <div className="hidden md:flex gap-x-6 items-center justify-between tracking-wider font-light md:order-2">
            <DesktopMenu />
          </div>
          <div className="hidden md:block md:grow md:order-3"></div>

          <div className="hidden md:flex md:gap-2 text-sm tracking-wider md:order-4">
            {/*
          <button className="rounded px-3 font-light">
            {t('login', { ns: 'common' })}
          </button>
          <button className="border border-blue-500 bg-blue-500 text-white rounded px-3 font-light">
            {t('register', { ns: 'common' })}
          </button>
          <div className="border border-gray-200"></div>
          */}
            <div
              className="flex items-center gap-2 px-1 cursor-pointer"
              onClick={changeLocale}
            >
              <FontAwesomeIcon className="w-4" icon={faEarthAmericas} />
              <span className="inline-flex gap-2">
                {languages[i18n.language?.toLocaleLowerCase()]}
                <FontAwesomeIcon className="w-3" icon={faRightLeft} />
              </span>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center order-1">
            <div
              className={`hamburger-btn ${isMobileHidden ? '' : 'open'}`}
              onClick={() => setIsMobileHidden((prev) => !prev)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="md:hidden order-3">
            {/*
          <button className="rounded px-3 text-blue-500">
            {t('login', { ns: 'common' })}
          </button>
          */}
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <div
        className={`${
          isMobileHidden ? 'max-h-0' : 'max-h-screen'
        } md:max-h-0 text-center overflow-hidden shadow-lg transition-max-height duration-700`}
      >
        <MobileMenu />
      </div>
    </header>
  )
}

export default Header
