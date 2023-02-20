import { useTranslation } from 'next-i18next'
import Container from '@/components/Container'

const Footer = (): JSX.Element => {
  const { t } = useTranslation(['common'])

  return (
    <footer className="py-8">
      <Container>
        <h5 className="text-xs text-center select-none">
          {t('footer.slogan')}
        </h5>
      </Container>
    </footer>
  )
}

export default Footer
