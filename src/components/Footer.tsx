import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import Container from '@/components/Container'

// images
import logo from '@public/img/sefoFinanceLogo.png'
import bgEllipse from '@public/img/homepage/bg.ellipse6.png'
import footerStar from '@public/img/homepage/footer.star.png'

const Footer = (): JSX.Element => {
  const { t } = useTranslation(['common'])

  return (
    <footer className="relative py-12 border-t-2 border-sefo-purple-300">
      <div className="absolute -top-[0.7rem] w-full flex justify-center">
        <div className="w-6 h-6">
          <Image src={footerStar} layout="responsive" />
        </div>
      </div>

      <div className="absolute bottom-0 right-0 w-32">
        <Image src={bgEllipse} layout="responsive" />
      </div>

      <Container className="relative">
        <div className="flex justify-between items-center px-12 py-3 h-16">
          <div className="flex w-[6.5rem] h-full">
            <a className="relative w-full h-full inline-flex items-center">
              <Image
                src={logo}
                layout="intrinsic"
                alt={`${t('brand.name')} Logo`}
              />
            </a>
          </div>

          <div className="">
            <a href={`mailto: ${t('email')}`}>{t('email')}</a>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
