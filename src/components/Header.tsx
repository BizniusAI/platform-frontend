import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import logo from '@public/img/sefoFinanceLogo.png'

import Container from '@/components/Container'
import { twitterLink } from '@/constants'

const Header = (): JSX.Element => {
  const { t } = useTranslation(['menu', 'common'])
  const [isMobileHidden, setIsMobileHidden] = useState<boolean>(true)

  return (
    <>
      <header className="fixed top-0 w-full bg-sefo-purple-700 bg-opacity-75 backdrop-blur shadow-md z-50 select-none">
        <Container>
          <nav className="flex justify-between md:justify-start items-center gap-x-8 py-3 h-16">
            <div className="flex w-[6.5rem] h-full order-2 md:order-1 cursor-pointer">
              <Link href="/">
                <a className="relative w-full h-full inline-flex items-center">
                  <Image
                    src={logo}
                    layout="intrinsic"
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
              <div className="flex flex-col items-center select-none cursor-not-allowed">
                <div className="text-lg bg-clip-text text-transparent bg-gradient-to-b from-neutral-200">
                  White Paper
                </div>

                <div className="-mt-1 text-xs bg-clip-text text-transparent bg-gradient-to-b from-neutral-200">
                  (coming soon)
                </div>
              </div>

              <Link href={twitterLink}>
                <a target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center text-lg">Twitter</div>
                </a>
              </Link>
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
