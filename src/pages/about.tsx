import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { defaultLocales } from '@/constants'
import Container from '@/components/Container'
import Layout from '@/components/Layout'

// images
import profileAidan from '@public/img/about/aidan.jpg'
import profileHannibal from '@public/img/about/hannibal.jpg'
import profileAndy from '@public/img/about/andy.jpg'

const Service: NextPage = () => {
  const { t } = useTranslation(['about'])

  return (
    <Layout title={t('title')}>
      <section className="bg-gray-50 py-6 pb-12 overflow-hidden">
        <Container>
          <div className="md:px-4 lg:px-16 text-center z-10">
            <h1 className="mt-2 max-w-[25rem] sm:max-w-[29rem] mx-auto font-bold text-3xl sm:text-4xl sm:leading-[3rem] select-none">
              {t('slogan')}
            </h1>

            <Trans i18nKey="description" ns="about">
              <p className="mt-8"></p>
              <p className="mt-4"></p>
            </Trans>
          </div>

          <div className="absolute z-0 -top-4 left-0 w-52 h-52 bg-blue-radial"></div>
          <div className="absolute z-0 -bottom-40 left-0 w-96 h-96 bg-purple-radial"></div>
          <div className="absolute z-0 top-4 right-8 w-52 h-52 bg-yellow-radial"></div>
          <div className="absolute z-0 -bottom-40 right-0 w-52 h-52 bg-blue-radial"></div>
        </Container>
      </section>

      <section className="py-6 pb-12">
        <Container>
          <h2 className="text-2xl font-bold text-center select-none">
            {t('team')}
          </h2>

          <div className="py-8 grid grid-cols-4 md:grid-cols-6 justify-items-center gap-4">
            <div className="col-span-2 p-6 rounded shadow-md flex flex-col items-center gap-2">
              <Image src={profileAidan} alt="Aidan, CEO" />

              <p className="text-center text-xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sefo-purple to-sefo-blue select-none">
                  Aidan, CEO
                </span>
              </p>
              <div className="flex-none">
                <p className="text-center text-sm">
                  SDE & PM @ Microsoft<br></br>
                  IM, NTU
                </p>
              </div>
            </div>

            <div className="col-span-2 p-6 rounded shadow-md flex flex-col items-center gap-2">
              <Image src={profileHannibal} alt="Aidan, CEO" />

              <p className="text-center text-xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sefo-purple to-sefo-blue select-none">
                  Hannibal, CMO
                </span>
              </p>
              <div className="flex-none">
                <p className="text-center text-sm">
                  Co-founder & CEO @ EmoMask<br></br>
                  Chair Assistant @ ACM
                </p>
              </div>
            </div>

            <div className="col-start-2 col-span-2 md:col-span-2 p-6 rounded shadow-md flex flex-col items-center gap-2">
              <Image src={profileAndy} alt="Aidan, CEO" />

              <p className="text-center text-xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-sefo-purple to-sefo-blue select-none">
                  Andy, Engineer
                </span>
              </p>
              <div className="flex-none">
                <p className="text-center text-sm">
                  Co-founder & CTO @ Blockore<br></br>
                  IM, NTUST
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...defaultLocales, 'about'])),
    },
  }
}

export default Service
