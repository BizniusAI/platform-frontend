import type { GetStaticProps, NextPage } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/Layout'

const Home: NextPage = () => {
  const { t } = useTranslation(['home'])

  return (
    <Layout>
      <section className="bg-gray-100 pt-32 pb-16 px-4 sm:px-20 text-center">
        <h3 className="text-lg sm:text-xl">{t('main.subSlogan')}</h3>
        <h1 className="mt-2 text-3xl sm:text-4xl">{t('main.slogan')}</h1>

        <div className="mt-12">
          <div className="inline-flex mx-auto rounded overflow-hidden">
            <div className="hidden sm:block px-4 py-2 pr-20 bg-white text-gray-300">
              {t('main.contactInfo')}
            </div>
            <div className="px-8 py-2 bg-blue-500 text-white select-none cursor-pointer">
              {t('main.start')}
            </div>
          </div>
        </div>

        <div className="mt-28">
          <div className="inline-flex justify-between gap-x-4 sm:gap-x-12 md:gap-x-20 mx-auto">
            <div className="flex flex-col gap-2">
              <p className="text-2xl">60M+</p>
              <p className="text-sm">{t('main.managedAsset')}</p>
              <span className="border border-blue-500 w-4 mx-auto"></span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-2xl">2B+</p>
              <p className="text-sm">{t('main.tradingVolume')}</p>
              <span className="border border-blue-500 w-4 mx-auto"></span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-2xl">212%</p>
              <p className="text-sm">{t('main.highestAPR')}</p>
              <span className="border border-blue-500 w-4 mx-auto"></span>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-2xl">38%</p>
              <p className="text-sm">{t('main.averageAPR')}</p>
              <span className="border border-blue-500 w-4 mx-auto"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-6 pb-12 px-4 sm:px-auto">
        <div className="grid sm:grid-rows-2 sm:grid-cols-3 gap-4">
          <div className="sm:row-span-2 sm:col-span-2 bg-gray-100 rounded overflow-hidden">
            <div className="inline-block px-3 pr-4 py-1 bg-blue-500 text-white rounded-br-2xl">
              {t('promotion.limited')}
            </div>
            <div className="flex flex-col items-center">
              <div className="flex gap-6 sm:gap-10 px-4 sm:px-auto py-12">
                <div className="flex items-start gap-2 font-medium">
                  <span className="text-7xl">8</span>
                  <span className="mt-2 text-3xl">%</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h1 className="text-3xl sm:text-4xl">
                    {t('promotion.fixeInterestPlan.title')}
                  </h1>
                  <p>{t('promotion.fixeInterestPlan.description')}</p>
                </div>
              </div>

              <div className="pb-2">
                <div className="inline-flex gap-2 mx-auto">
                  <span className="border border-gray-300 w-3 mx-auto cursor-pointer"></span>
                  <span className="border border-gray-300 w-3 mx-auto cursor-pointer"></span>
                  <span className="border border-blue-500 w-3 mx-auto cursor-pointer"></span>
                  <span className="border border-gray-300 w-3 mx-auto cursor-pointer"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 sm:px-auto">
        <h2 className="text-3xl text-center">{t('multiPlans.title')}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-12">
          <div className="border border-gray-100 py-4 hover:shadow-md duration-200 cursor-pointer">
            <h3 className="border-l-4 px-2 border-blue-500 text-lg sm:text-xl">
              {t('multiPlans.fixedInterest.title')}
            </h3>
            <div className="mt-8 px-4">
              <p className="text-sm">{t('apr', { ns: 'common' })}</p>
              <p className="text-5xl text-red-500">5.8%</p>
              <p className="flex gap-1 mt-4 text-sm">
                {t('learnMore', { ns: 'common' })}
              </p>
            </div>
          </div>

          <div className="border border-gray-100 py-4 hover:shadow-md duration-200 cursor-pointer">
            <h3 className="border-l-4 px-2 border-blue-500 text-lg sm:text-xl">
              {t('multiPlans.floatingInterest.title')}
            </h3>
            <div className="mt-8 px-4">
              <p className="text-sm">{t('apr', { ns: 'common' })}</p>
              <p className="text-5xl text-red-500">7.9%</p>
              <p className="flex gap-1 mt-4 text-sm">
                {t('learnMore', { ns: 'common' })}
              </p>
            </div>
          </div>

          <div className="border border-gray-100 py-4 hover:shadow-md duration-200 cursor-pointer">
            <h3 className="border-l-4 px-2 border-blue-500 text-lg sm:text-xl">
              {t('multiPlans.limitedFixedInterest.title')}
            </h3>
            <div className="mt-8 px-4">
              <p className="text-sm">{t('apr', { ns: 'common' })}</p>
              <p className="text-5xl text-red-500">8.0%</p>
              <p className="flex gap-1 mt-4 text-sm">
                {t('learnMore', { ns: 'common' })}
              </p>
            </div>
          </div>

          <div className="border border-gray-100 py-4 hover:shadow-md duration-200 cursor-pointer">
            <h3 className="border-l-4 px-2 border-blue-500 text-lg sm:text-xl">
              {t('multiPlans.limitedOffer.title')}
            </h3>
            <div className="mt-8 px-4">
              <p className="text-sm">{t('apr', { ns: 'common' })}</p>
              <p className="text-5xl text-red-500">42.0%</p>
              <p className="flex gap-1 mt-4 text-sm">
                {t('learnMore', { ns: 'common' })}
              </p>
            </div>
          </div>
        </div>
        <div className="flex place-content-center gap-2">
          <button className="border border-blue-500 text-blue-500 rounded px-8 py-2">
            {t('multiPlans.roiTrial')}
          </button>
          <button className="border border-blue-500 bg-blue-500 text-white rounded px-8 py-2">
            {t('learnMore', { ns: 'common' })}
          </button>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-auto bg-white sm:bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl text-center">
            {t('strategyCreatesRevenue.title')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3 pt-12">
            <div className="bg-gray-100 sm:bg-white p-4">
              <div className="h-48"></div>
              <div className="text-center">
                <h3 className="text-xl mb-2">
                  {t('strategyCreatesRevenue.variousStrategy.title')}
                </h3>
                <p className="text-sm text-gray-500">
                  {t('strategyCreatesRevenue.variousStrategy.description')}
                </p>
              </div>
            </div>
            <div className="bg-gray-100 sm:bg-white p-4">
              <div className="h-48"></div>
              <div className="text-center">
                <h3 className="text-xl mb-2">
                  {t('strategyCreatesRevenue.optimizedAssets.title')}
                </h3>
                <p className="text-sm text-gray-500">
                  {t('strategyCreatesRevenue.optimizedAssets.description')}
                </p>
              </div>
            </div>
            <div className="bg-gray-100 sm:bg-white p-4">
              <div className="h-48"></div>
              <div className="text-center">
                <h3 className="text-xl mb-2">
                  {t('strategyCreatesRevenue.signalAutoDetection.title')}
                </h3>
                <p className="text-sm text-gray-500">
                  {t('strategyCreatesRevenue.signalAutoDetection.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 sm:px-auto">
        <h2 className="text-3xl text-center">{t('ourStrength.title')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-12">
          <div className="flex flex-col gap-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 bg-gray-100"></div>
              <div className="flex flex-col justify-between">
                <h3 className="text-xl">{t('ourStrength.simple.title')}</h3>
                <p className="sm:pr-12 text-sm text-gray-500">
                  {t('ourStrength.simple.description')}
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 bg-gray-100"></div>
              <div className="flex flex-col justify-between">
                <h3 className="text-xl">
                  {t('ourStrength.transparency.title')}
                </h3>
                <p className="sm:pr-12 text-sm text-gray-500">
                  {t('ourStrength.transparency.description')}
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="shrink-0 w-16 h-16 bg-gray-100"></div>
              <div className="flex flex-col justify-between">
                <h3 className="text-xl">{t('ourStrength.realtime.title')}</h3>
                <p className="sm:pr-12 text-sm text-gray-500">
                  {t('ourStrength.realtime.description')}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden sm:block bg-gray-100"></div>
        </div>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'menu', 'common'])),
      // Will be passed to the page component as props
    },
  }
}

export default Home
