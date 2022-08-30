import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faGlobe } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import logo from '@public/vercel.svg'

import { DesktopMenu, MobileMenu } from '@/components/Menu'
import { languages } from '@/constants'

const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation(['menu', 'common'])

  const [isMobileHidden, setIsMobileHidden] = useState<boolean>(true)

  return (
    <header className="fixed top-0 w-full bg-white z-50 select-none">
      <nav className="flex justify-between md:justify-start items-center gap-x-10 px-4 md:px-8 h-16">
        <div className="flex w-32 order-2 md:order-1">
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
          <button className="rounded px-3 font-light">
            {t('login', { ns: 'common' })}
          </button>
          <button className="border border-blue-500 bg-blue-500 text-white rounded px-3 font-light">
            {t('register', { ns: 'common' })}
          </button>
          <div className="border border-gray-200"></div>
          <div className="flex items-center gap-2 px-1 text-gray-500 cursor-pointer">
            <FontAwesomeIcon className="w-4" icon={faGlobe} />
            <span className="inline-flex gap-1">
              {languages[i18n.language.toLocaleLowerCase()]}
              <FontAwesomeIcon className="w-2" icon={faChevronDown} />
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
          <button className="rounded px-3 text-blue-500">
            {t('login', { ns: 'common' })}
          </button>
        </div>
      </nav>

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
