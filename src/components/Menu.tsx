// Reference:
// https://blog.logrocket.com/how-create-multilevel-dropdown-menu-react/

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

import { menuLinks } from '@/constants'

export const DesktopMenu = () => {
  const { t } = useTranslation(['menu'])

  return (
    <ul className="flex gap-x-8 items-center justify-between font-medium tracking-wider">
      {menuLinks.map((link, index) => {
        return (
          <li key={index}>
            {link.submenu ? (
              <DesktopMenuItems menu={link} />
            ) : (
              <Link href={link.url}>
                <a className="inline-block py-1">{t(link.name)}</a>
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

const DesktopMenuItems = ({ menu }: { menu: TMenu }) => {
  const [dropdownExpanded, setDropdownExpanded] = useState<boolean>(false)
  const { t } = useTranslation(['menu'])
  const ref = useRef<HTMLSpanElement>(null)

  const onMouseEnter = () => {
    setDropdownExpanded(true)
  }

  const onMouseLeave = () => {
    setDropdownExpanded(false)
  }

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        dropdownExpanded &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setDropdownExpanded(false)
      }
    }

    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [dropdownExpanded])

  return (
    <span ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button
        type="button"
        className="inline-flex items-center cursor-default"
        aria-haspopup="menu"
        aria-expanded={dropdownExpanded ? 'true' : 'false'}
        onClick={() => setDropdownExpanded((prev) => !prev)}
      >
        {t(menu.name)}
        <FontAwesomeIcon
          className={classNames(
            'w-3 h-3 ml-2 transition',
            dropdownExpanded && '-rotate-180'
          )}
          icon={faChevronDown}
        />
      </button>

      <DesktopDropdown
        // @ts-ignore
        submenus={menu.submenu}
        expanded={dropdownExpanded}
      />
    </span>
  )
}

const DesktopDropdown = ({
  submenus,
  expanded,
}: {
  submenus: TMenu[]
  expanded: boolean
}) => {
  const { t } = useTranslation(['services'])

  return (
    <div
      className={classNames(
        'absolute pt-6 min-w-[12rem]',
        expanded ? '' : 'hidden'
      )}
    >
      <ul className="bg-white rounded-lg px-6 py-2 shadow-md">
        {submenus.map((link, index) => (
          <li key={index} className="py-1.5">
            <Link key={index} href={link.url}>
              <a>{t(`${link.name}.title`)}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
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
            <Link href={link.url} passHref>
              <span
                className={`py-2 cursor-pointer transition-all duration-300 tracking-wider font-light ${
                  router.pathname.startsWith(link.url)
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
