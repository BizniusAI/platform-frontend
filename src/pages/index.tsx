import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/Layout'

const Home: NextPage = () => {
  const { t } = useTranslation(['homepage'])

  return (
    <Layout>
      <section className="pt-32 pb-16 px-4 sm:px-20">
        <div className="w-3/5">
          <h1 className="mt-2 font-bold text-3xl sm:text-4xl sm:leading-[3.5rem]">
            {t('main.slogan')}
          </h1>

          <div className="mt-12">
            <div className="inline-flex mx-auto">
              <input
                type="email"
                className="form-input px-3 py-2 rounded-lg border-gray-300"
                placeholder={t('example.email', { ns: 'common' })}
              />
              <button className="ml-2 px-4 py-2 rounded-lg bg-black font-light text-white select-none cursor-pointer">
                {t('joinWaitlist')}
              </button>
            </div>
          </div>
        </div>

        <div className="w-2/5"></div>
      </section>

      <section className="bg-gray-50 mx-auto py-6 pb-12 px-4 sm:px-auto">
        <div className="container mx-auto grid grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-md"></div>
          <div className="bg-white p-4 rounded shadow-md"></div>
          <div className="bg-white p-4 rounded shadow-md"></div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 sm:px-auto">
        <h2 className="text-2xl font-bold text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8]">
            {t('investmentIntro.title')}
          </span>
        </h2>
      </section>

      <section className="py-12 px-4 sm:px-auto bg-white sm:bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center">
            {t('partners.title')}
          </h2>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 sm:px-auto">
        <h2 className="text-2xl font-bold text-center">
          {t('consultation.title')}
        </h2>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['homepage', 'menu', 'common'])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
