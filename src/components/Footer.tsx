import { useTranslation } from 'next-i18next'

const Footer = (): JSX.Element => {
  const { t } = useTranslation(['common'])

  return (
    <footer className="border-t border-gray-100 py-8">
      <h5 className="font-medium text-xs text-gray-500 text-center">
        {t('brand.name')} @ 2022
      </h5>
    </footer>
  )
}

export default Footer
