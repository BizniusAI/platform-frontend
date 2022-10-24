import classNames from 'classnames'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

import Container from '@/components/Container'
import { H1, H2 } from '@/components/Headings'
import Layout from '@/components/Layout'
import { defaultLocales } from '@/constants'

// images
import mainBitcoin from '@public/img/home/main.bitcoin.png'
import featuresBtcSupport from '@public/img/home/features.btcSupport.svg'
import featuresFastAndNoKyc from '@public/img/home/features.fastAndNoKyc.svg'
import featuresNonCustodial from '@public/img/home/features.nonCustodial.svg'
import investmentIntroStep1 from '@public/img/home/investmentIntro.step1.svg'
import investmentIntroStep3 from '@public/img/home/investmentIntro.step3.svg'
// import consultation from '@public/img/home/consultation.svg'
import partnersAppWorks from '@public/img/home/partners.appWorks.png'
import partnersTAcc from '@public/img/home/partners.tacc.png'
import partnersWeb3Startup from '@public/img/home/partners.web3Startup.png'

const Home: NextPage = () => {
  const [emailAddress, setEmailAddress] = useState<string>('')
  const [subscribed, setSubscribed] = useState<boolean>(false)
  const { t } = useTranslation(['homepage'])

  const sendEmail = async () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!subscribed && emailAddress && re.test(emailAddress)) {
      setSubscribed(true)
      const uri = 'https://api.getwaitlist.com/api/v1/waiter'

      fetch(uri, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: emailAddress,
          api_key: 'MJOVSE',
        }),
      })
        .then((res) => {
          if (res.status != 200) {
            setSubscribed(false)
            return
          }

          setEmailAddress('')
          setSubscribed(true)
        })
        .catch((err) => {
          console.error(err)
          setSubscribed(false)
        })
    }
  }

  return (
    <Layout>
      <div className="-mt-16 flex flex-col w-full h-screen">
        <Container className="pt-16 grow overflow-hidden">
          <section className="h-full relative md:grid md:grid-cols-5 items-center py-8">
            <div className="col-span-3 relative">
              <div>
                <H1 className="mt-2 md:max-w-[29rem] text-center md:text-left sm:leading-[3.5rem]">
                  {t('main.slogan')}
                </H1>

                <div className="mt-8 md:mt-12 flex justify-center md:justify-start">
                  <div className="inline-flex">
                    <input
                      type="email"
                      className={classNames(
                        'form-input md:w-64 lg:w-72 px-3 py-2 rounded-lg border-gray-300 bg-white',
                        subscribed ? 'cursor-not-allowed' : ''
                      )}
                      placeholder={
                        subscribed
                          ? `${t('subscribed', { ns: 'common' })} 🎉`
                          : t('example.email', { ns: 'common' })
                      }
                      disabled={subscribed}
                      autoComplete="off"
                      value={emailAddress}
                      onChange={(e) => setEmailAddress(e.target.value)}
                    />
                    <button
                      type="button"
                      className="ml-2 px-4 py-2 rounded-lg bg-black font-light text-white select-none cursor-pointer disabled:cursor-not-allowed"
                      disabled={subscribed}
                      onClick={sendEmail}
                    >
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
        </Container>

        <section className="bg-gray-50 py-6 md:pb-12 z-10">
          <Container>
            <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
              <div className="bg-white px-6 py-4 min-h-[6rem] md:min-h-[8rem] md:py-6 rounded shadow-md grid grid-cols-5 gap-4">
                <div className="relative col-span-2 flex items-center">
                  <Image
                    src={featuresBtcSupport}
                    layout="fill"
                    alt={t('features.btcSupport')}
                  />
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="font-bold text-center">
                    {t('features.btcSupport')}
                  </p>
                </div>
              </div>

              <div className="bg-white px-6 py-4 min-h-[6rem] md:min-h-[8rem] md:py-6 rounded shadow-md grid grid-cols-5 gap-4">
                <div className="relative col-span-2 flex items-center">
                  <Image
                    src={featuresNonCustodial}
                    layout="fill"
                    alt={t('features.nonCustodial')}
                  />
                </div>
                <div className="col-span-3 flex items-center">
                  <p className="font-bold text-center">
                    {t('features.nonCustodial')}
                  </p>
                </div>
              </div>

              <div className="bg-white px-6 py-4 min-h-[6rem] md:min-h-[8rem] md:py-6 rounded shadow-md grid grid-cols-5 gap-4">
                <div className="relative col-span-2 flex items-center">
                  <Image
                    src={featuresFastAndNoKyc}
                    layout="fill"
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
          </Container>
        </section>
      </div>

      <section className="py-12 lg:px-20 xl:px-36">
        <Container>
          <div className="flex justify-center">
            <H2 className="px-5 py-2 rounded text-white bg-gradient-to-br from-sefo-purple to-sefo-blue">
              {t('investmentIntro.title')}
            </H2>
          </div>

          <div className="py-12 flex flex-col gap-12">
            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3">
                <div className="flex gap-4 items-center">
                  <div className="w-10 shrink-0">
                    <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-sefo-purple to-sefo-blue text-white text-2xl font-semibold select-none">
                      1
                    </div>
                  </div>

                  <H2>
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-sefo-purple to-sefo-blue select-none">
                      {t('investmentIntro.step1.title')}
                    </span>
                  </H2>
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
                      <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-sefo-purple to-sefo-blue text-white text-2xl font-semibold select-none">
                        2
                      </div>
                    </div>

                    <H2>
                      <span className="bg-clip-text text-transparent bg-gradient-to-br from-sefo-purple to-sefo-blue select-none">
                        {t('investmentIntro.step2.title')}
                      </span>
                    </H2>
                  </div>

                  <div className="mt-1 pl-14">
                    <p className="font-medium">
                      {t('investmentIntro.step2.content')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 pl-14">
                <div className="relative p-1 grow rounded-3xl bg-gradient-to-br from-sefo-purple to-sefo-blue">
                  <div className="w-full h-full grid grid-cols-7 gap-4 p-4 rounded-[1.25rem] bg-white">
                    <div className="col-span-4 flex justify-center items-center">
                      <H1 className="!text-2xl sm:!text-4xl text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-sefo-purple to-sefo-blue select-none">
                          <Trans
                            i18nKey="stableVault.title"
                            ns="services"
                          ></Trans>
                        </span>
                      </H1>
                    </div>

                    <div className="col-span-3 flex flex-col justify-center items-center px-2 py-3 rounded-xl bg-sefo-lightgray">
                      <p>{t('apy.title', { ns: 'services' })}</p>
                      <p className="font-bold">
                        <span className="text-2xl sm:text-4xl tracking-wider">
                          5.1
                        </span>
                        %
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative p-1 grow rounded-3xl bg-gradient-to-br from-sefo-purple to-sefo-blue">
                  <div className="w-full h-full grid grid-cols-7 gap-4 p-4 rounded-[1.25rem] bg-white">
                    <div className="col-span-4 flex justify-center items-center">
                      <H1 className="!text-2xl sm:!text-4xl text-center">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-sefo-purple to-sefo-blue select-none">
                          <Trans
                            i18nKey="advancedVault.title"
                            ns="services"
                          ></Trans>
                        </span>
                      </H1>
                    </div>

                    <div className="col-span-3 flex flex-col justify-center items-center px-2 py-3 rounded-xl bg-sefo-lightgray">
                      <p>{t('apy.title', { ns: 'services' })}</p>
                      <p className="font-bold">
                        <span className="text-2xl sm:text-4xl tracking-wider">
                          20.0
                        </span>
                        %
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-4">
              <div className="col-span-3">
                <div className="flex gap-4 items-center">
                  <div className="w-10 shrink-0">
                    <div className="h-10 flex justify-center items-center rounded-full bg-gradient-to-br from-sefo-purple to-sefo-blue text-white text-2xl font-semibold select-none">
                      3
                    </div>
                  </div>

                  <H2>
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-sefo-purple to-sefo-blue select-none">
                      {t('investmentIntro.step3.title')}
                    </span>
                  </H2>
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
        </Container>
      </section>

      <section className="py-12 bg-gray-100">
        <Container>
          <H2 className="text-center">{t('partners.title')}</H2>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Image src={partnersWeb3Startup} alt="Stacks Web3.0 Startup" />
            </div>

            <div>
              <Image src={partnersAppWorks} alt="App Works" />
            </div>

            <div>
              <Image src={partnersTAcc} className="col-span-2" alt="TAcc+" />
            </div>
          </div>
        </Container>
      </section>

      {/*
      <section className="py-12">
        <Container>
          <H2 className="text-2xl font-bold text-center select-none">
            {t('consultation.title')}
          </H2>

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
                  <option value="no">
                    {t('consultation.form.knowMore.no')}
                  </option>
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
        </Container>
      </section>
      */}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        ...defaultLocales,
        'homepage',
      ])),
    },
  }
}

export default Home
