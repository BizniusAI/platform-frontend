import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Layout from '@/components/Layout'

// images
import mainBitcoin from '@public/img/home/main.bitcoin.png'
import featuresBtcSupport from '@public/img/home/features.btcSupport.svg'
import featuresEasyAndNoKyc from '@public/img/home/features.easyAndNoKyc.svg'
import featuresNonCustodial from '@public/img/home/features.nonCustodial.svg'
import investmentIntroStep1 from '@public/img/home/investmentIntro.step1.svg'
import investmentIntroStep3 from '@public/img/home/investmentIntro.step3.svg'
import consultation from '@public/img/home/consultation.svg'
import partnersAppWorks from '@public/img/home/partners.appWorks.png'
import partnersDLCLink from '@public/img/home/partners.dlcLink.png'
import partnersStacksFoundation from '@public/img/home/partners.stacksFoundation.png'
import partnersTAcc from '@public/img/home/partners.tacc.png'
import partnersWeb3Startup from '@public/img/home/partners.web3Startup.png'

const Home: NextPage = () => {
  const { t } = useTranslation(['homepage'])

  return (
    <Layout>
      <section className="relative md:grid md:grid-cols-5 items-center pt-4 pb-12 px-4 sm:px-20 overflow-hidden">
        <div className="col-span-3 relative">
          <div>
            <h1 className="mt-2 font-bold text-3xl text-center md:text-left sm:text-4xl sm:leading-[3.5rem] select-none">
              {t('main.slogan')}
            </h1>

            <div className="mt-8 md:mt-12 flex justify-center md:justify-start">
              <div className="inline-flex">
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

          <div className="absolute -top-12 -left-12 w-44 h-44 bg-blue-radial"></div>
        </div>

        <div className="hidden md:block col-span-2">
          <div className="relative h-full">
            <Image
              src={mainBitcoin}
              layout="responsive"
              alt={t('investmentIntro.step3.title')}
            />
          </div>
        </div>

        <div className="absolute mx-6 sm:mx-24 -bottom-40 left-12 sm:left-6 md:left-0 w-52 h-52 bg-blue-radial"></div>
      </section>

      <section className="bg-gray-50 mx-auto py-6 pb-12 px-4 sm:px-auto">
        <div className="container mx-auto flex flex-col md:grid md:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded shadow-md grid grid-cols-5 gap-4">
            <div className="col-span-2 flex items-center">
              <Image src={featuresBtcSupport} alt={t('features.btcSupport')} />
            </div>
            <div className="col-span-3 flex items-center">
              <p className="font-bold text-center">
                {t('features.btcSupport')}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-md grid grid-cols-5 gap-4">
            <div className="col-span-2 flex items-center">
              <Image
                src={featuresNonCustodial}
                alt={t('features.nonCustodial')}
              />
            </div>
            <div className="col-span-3 flex items-center">
              <p className="font-bold text-center">
                {t('features.nonCustodial')}
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded shadow-md grid grid-cols-5 gap-4">
            <div className="col-span-2 flex items-center">
              <Image
                src={featuresEasyAndNoKyc}
                alt={t('features.easyAndNoKyc')}
              />
            </div>
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
          <h2 className="px-5 py-2 rounded text-2xl text-white font-bold bg-gradient-to-r from-[#7F25E1] to-[#00AEF8] select-none">
            {t('investmentIntro.title')}
          </h2>
        </div>

        <div className="py-12 flex flex-col gap-12">
          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <div className="flex gap-4 items-center">
                <div className="w-10 shrink-0">
                  <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-[#7F25E1] to-[#00AEF8] text-white text-2xl font-semibold select-none">
                    1
                  </div>
                </div>

                <h2 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8] select-none">
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

            <div className="col-span-2">
              <div className="relative h-full mt-4">
                <Image
                  src={investmentIntroStep1}
                  layout="fill"
                  alt={t('investmentIntro.step1.title')}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3">
                <div className="flex gap-4 items-center">
                  <div className="w-10 shrink-0">
                    <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-[#7F25E1] to-[#00AEF8] text-white text-2xl font-semibold select-none">
                      2
                    </div>
                  </div>

                  <h2 className="text-2xl font-bold">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8] select-none">
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

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 h-96 md:h-80 mt-4 pl-14">
              <div className="relative h-full p-1 grow rounded-3xl bg-gradient-to-br from-[#F2A900] to-[#24D8FF]">
                <div className="w-full h-full rounded-[1.25rem] bg-white"></div>
              </div>
              <div className="relative h-full p-1 grow rounded-3xl bg-gradient-to-br from-[#F2A900] to-[#7F25E1]">
                <div className="w-full h-full rounded-[1.25rem] bg-white"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3">
              <div className="flex gap-4 items-center">
                <div className="w-10 shrink-0">
                  <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-[#7F25E1] to-[#00AEF8] text-white text-2xl font-semibold select-none">
                    3
                  </div>
                </div>

                <h2 className="text-2xl font-bold">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7F25E1] to-[#00AEF8] select-none">
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

            <div className="col-span-2">
              <div className="relative h-full mt-4">
                <Image
                  src={investmentIntroStep3}
                  layout="fill"
                  alt={t('investmentIntro.step3.title')}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-auto bg-white sm:bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center select-none">
            {t('partners.title')}
          </h2>

          <div className="grid grid-rows-2 grid-cols-6 gap-4">
            <div className="col-span-2">
              <Image src={partnersStacksFoundation} alt="Stacks Foundation" />
            </div>

            <div className="col-span-2">
              <Image src={partnersAppWorks} alt="App Works" />
            </div>

            <div className="col-span-2">
              <Image src={partnersDLCLink} alt="DLC.Link" />
            </div>

            <div className="col-start-2 col-span-2">
              <Image src={partnersWeb3Startup} alt="Stacks Web3.0 Startup" />
            </div>

            <div className="col-span-2">
              <Image src={partnersTAcc} className="col-span-2" alt="TAcc+" />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12 px-4 sm:px-auto">
        <h2 className="text-2xl font-bold text-center select-none">
          {t('consultation.title')}
        </h2>

        <div className="py-12 grid grid-cols-7 gap-4">
          <div className="col-span-full md:col-span-4">
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

          <div className="hidden col-span-3 md:flex justify-center pl-8">
            <Image src={consultation} alt={t('consultation.title')} />
          </div>
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
