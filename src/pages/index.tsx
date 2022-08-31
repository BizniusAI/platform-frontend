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
        <div className="container mx-auto grid grid-cols-3 gap-16">
          <div className="bg-white p-4 rounded shadow-md grid grid-cols-5 gap-4">
            <div className="col-span-2"></div>
            <div className="col-span-3 flex items-center">
              <p className="font-bold text-center">
                {t('features.btcSupport')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-md grid grid-cols-5 gap-4">
            <div className="col-span-2"></div>
            <div className="col-span-3 flex items-center">
              <p className="font-bold text-center">
                {t('features.nonCustodial')}
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded shadow-md grid grid-cols-5 gap-4">
            <div className="col-span-2"></div>
            <div className="col-span-3 flex items-center">
              <p className="font-bold text-center">
                {t('features.easyAndNoKyc')}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 sm:px-auto">
        <div className="flex justify-center">
          <h2 className="px-5 py-2 rounded text-2xl text-white font-bold bg-gradient-to-r from-[#7F25E1] to-[#00AEF8]">
            {t('investmentIntro.title')}
          </h2>
        </div>

        <div className="py-12 flex flex-col gap-12">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <div className="flex gap-4 items-center">
                <div className="w-10">
                  <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-[#7F25E1] to-[#00AEF8] text-white text-2xl font-semibold">
                    1
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8]">
                    {t('investmentIntro.step1.title')}
                  </span>
                </h2>
              </div>

              <div className="mt-1 pl-14">
                <p className="font-medium">
                  {t('investmentIntro.step1.content')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <div className="flex gap-4 items-center">
                <div className="w-10">
                  <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-[#7F25E1] to-[#00AEF8] text-white text-2xl font-semibold">
                    2
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8]">
                    {t('investmentIntro.step2.title')}
                  </span>
                </h2>
              </div>

              <div className="mt-1 pl-14">
                <p className="font-medium">
                  {t('investmentIntro.step2.content')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <div className="flex gap-4 items-center">
                <div className="w-10">
                  <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-[#7F25E1] to-[#00AEF8] text-white text-2xl font-semibold">
                    3
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-center">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8]">
                    {t('investmentIntro.step3.title')}
                  </span>
                </h2>
              </div>

              <div className="mt-1 pl-14">
                <p className="font-medium">
                  {t('investmentIntro.step3.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
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

        <div className="py-12 grid grid-cols-7 gap-4">
          <div className="col-span-4">
            <form className="grid grid-cols-2 grid-rows-6 gap-4">
              <input
                type="text"
                className="form-input px-3 py-2 rounded-lg border-gray-300 placeholder:text-slate-500"
                placeholder={t('consultation.form.name')}
              />

              <input
                type="email"
                className="form-input px-3 py-2 rounded-lg border-gray-300 placeholder:text-slate-500"
                placeholder={t('consultation.form.email')}
              />

              <select className="form-select col-span-2 px-3 py-2 rounded-lg border-gray-300">
                <option disabled selected hidden>
                  {t('consultation.form.holdCrypto')}
                </option>
                <option value="yes">
                  {t('consultation.form.knowMore.yes')}
                </option>
                <option value="no">{t('consultation.form.knowMore.no')}</option>
              </select>

              <textarea
                className="form-textarea resize-none row-span-3 col-span-2 rounded-lg border-gray-300"
                placeholder={t('consultation.form.knowMore')}
              ></textarea>

              <button className="py-2 rounded-lg bg-black font-light text-white select-none cursor-pointer">
                {t('consultation.form.submit')}
              </button>
            </form>
          </div>
          <div className="col-span-3"></div>
        </div>
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
