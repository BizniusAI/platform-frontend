import { useTranslation } from 'next-i18next'

const Footer = (): JSX.Element => {
  const { t } = useTranslation(['common'])

  return (
    <footer className="bg-gray-50 py-8">
      <h5 className="text-xs text-center select-none">{t('footer.slogan')}</h5>
    </footer>
  )
}

export default Footer
