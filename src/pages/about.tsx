import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/Layout'

// images
import profileAidan from '@public/img/about/aidan.jpg'
import profileHannibal from '@public/img/about/hannibal.jpg'
import profileAndy from '@public/img/about/andy.jpg'

const Service: NextPage = () => {
  const { t } = useTranslation(['about'])

  return (
    <Layout title={t('title')}>
      <section className="bg-gray-50 py-6 pb-12 px-4 sm:px-auto overflow-hidden">
        <div className="container mx-auto">
          <div className="relative">
            <div className="md:px-8 lg:px-24 text-center z-10">
              <h1 className="mt-2 px-4 md:px-24 lg:px-44 font-bold text-3xl sm:text-4xl sm:leading-[3rem] select-none">
                {t('slogan')}
              </h1>

              <p className="mt-8">{t('description.p1')}</p>
              <p className="mt-4">{t('description.p2')}</p>
            </div>

            <div className="absolute z-0 -top-4 left-0 w-52 h-52 bg-blue-radial"></div>
            <div className="absolute z-0 -bottom-40 left-0 w-96 h-96 bg-purple-radial"></div>
            <div className="absolute z-0 top-4 right-8 w-52 h-52 bg-yellow-radial"></div>
            <div className="absolute z-0 -bottom-40 right-0 w-52 h-52 bg-blue-radial"></div>
          </div>
        </div>
      </section>

      <section className="py-6 pb-12 px-4 sm:px-auto">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center select-none">
            {t('team')}
          </h2>

          <div className="py-8 flex flex-wrap justify-center gap-4">
            <div className="basis-1/3 lg:basis-1/4 p-6 rounded shadow-md flex flex-col items-center gap-2">
              <Image src={profileAidan} alt="Aidan, CEO" />

              <p className="text-xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8] select-none">
                  Aidan, CEO
                </span>
              </p>
              <div className="flex-none">
                <p className="text-sm">
                  SDE & PM @ Microsoft<br></br>
                  Information management, NTU
                </p>
              </div>
            </div>

            <div className="basis-1/3 lg:basis-1/4 p-6 rounded shadow-md flex flex-col items-center gap-2">
              <Image src={profileHannibal} alt="Aidan, CEO" />

              <p className="text-xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8] select-none">
                  Hannibal, CMO
                </span>
              </p>
              <div className="flex-none">
                <p className="text-sm">
                  Co-founder & CEO @ EmoMask<br></br>
                  Chair Assistant @ ACM
                </p>
              </div>
            </div>

            <div className="basis-1/3 lg:basis-1/4 p-6 rounded shadow-md flex flex-col items-center gap-2">
              <Image src={profileAndy} alt="Aidan, CEO" />

              <p className="text-xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8] select-none">
                  Andy, Engineer
                </span>
              </p>
              <div className="flex-none">
                <p className="text-sm">
                  Co-founder & CTO @ Blockore<br></br>
                  Information Management, NTUST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['menu', 'common', 'about'])),
      // Will be passed to the page component as props
    },
  }
}

export default Service
