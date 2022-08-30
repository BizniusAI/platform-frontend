import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import Tooltip from '@/components/Tooltip'
import { menuLinks } from '@/constants'

export const DesktopMenu = () => {
  const { t } = useTranslation(['menu'])
  const router = useRouter()

  return (
    <>
      {menuLinks.map((link, index) => {
        return (
          <Link key={`desktop-${index}`} href={link.endpoint} passHref>
            <div
              className={classNames(
                'inline-block py-1 font-normal cursor-pointer transition-all duration-300',
                router.pathname.startsWith(link.endpoint)
                  ? 'font-medium'
                  : 'border-opacity-0 hover:border-opacity-25 hover:font-medium'
                // link.children !== undefined ? 'inline-flex' : ''
              )}
            >
              {link.children !== undefined ? (
                <>
                  <Tooltip className="w-60 -top-24 -left-28">
                    <Tooltip.Body>
                      <div className="inline-flex items-center">
                        {t(link.name)}
                        <FontAwesomeIcon
                          className="w-2 ml-2"
                          icon={faChevronDown}
                        />
                      </div>
                    </Tooltip.Body>

                    <Tooltip.Content>
                      <>
                        Didn&apos;t find the page you want to export to? You can
                        connect Notion to add Notion pages
                      </>
                    </Tooltip.Content>
                  </Tooltip>
                </>
              ) : (
                <>{t(link.name)}</>
              )}
            </div>
          </Link>
        )
      })}
    </>
  )
}

export const MobileMenu = () => {
  const { t } = useTranslation(['menu'])
  const router = useRouter()

  return (
    <>
      {menuLinks.map((link, index) => {
        return (
          <div
            key={`mobile-${index}`}
            className={`p-2 ${index + 1 === menuLinks.length ? 'pb-4' : ''}`}
          >
            <Link href={link.endpoint} passHref>
              <span
                className={`py-2 cursor-pointer transition-all duration-300 tracking-wider font-light ${
                  router.pathname.startsWith(link.endpoint)
                    ? 'font-normal'
                    : 'border-opacity-0 hover:border-opacity-25 hover:font-normal'
                }`}
              >
                {t(link.name)}
              </span>
            </Link>
          </div>
        )
      })}
    </>
  )
}
