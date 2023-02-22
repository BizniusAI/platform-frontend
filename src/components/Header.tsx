import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'next-i18next'

import logo from '@public/img/sefoFinanceLogo.png'

import Container from '@/components/Container'
import { twitterLink } from '@/constants'

const Header = (): JSX.Element => {
  const { t } = useTranslation(['menu', 'common'])

  return (
    <header className="fixed top-0 w-full bg-sefo-purple-700 bg-opacity-75 backdrop-blur shadow-md z-50 select-none">
      <Container>
        <nav className="flex justify-between items-center gap-x-8 py-3 h-16">
          <div className="flex w-[6.5rem] h-full cursor-pointer">
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

          <div className="hidden md:flex items-center md:gap-8 text-sm font-semibold tracking-wider">
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

          <div className="md:hidden">
            <Link href={twitterLink}>
              <a target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="w-5" icon={faTwitter} />
              </a>
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default Header
