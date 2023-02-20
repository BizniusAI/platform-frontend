import classNames from 'classnames'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

import Container from '@/components/Container'
import { H1, H2 } from '@/components/Headings'
import Layout from '@/components/Layout'
import { defaultLocales } from '@/constants'

// images
import backedByAppWorks from '@public/img/homepage/backedBy.appWorks.png'
import backedByBtcStartupLab from '@public/img/homepage/backedBy.btcStartupLab.png'
import backedByWaterdripCapital from '@public/img/homepage/backedBy.waterdripCapital.png'

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
      <div className="-mt-32 flex flex-col w-full">
        <Container className="pt-32 grow">
          <section className="h-full relative md:grid md:grid-cols-5 items-center py-8">
            <div className="col-span-3 relative">
              <div>
                <H1 className="mt-2 md:max-w-[29rem] text-center md:text-left sm:leading-[3.5rem]">
                  {t('main.slogan')}
                </H1>

                <H2 className="md:max-w-[29rem] text-center md:text-left sm:leading-[3.5rem]">
                  {t('sub.slogan')}
                </H2>

                <div className="mt-2 md:mt-6 flex justify-center md:justify-start">
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
                      className="ml-2 px-3 py-1 rounded-lg bg-sefo-purple-300 text-lg font-bold text-white select-none cursor-pointer disabled:cursor-not-allowed"
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
              <div className="relative h-full"></div>
            </div>
          </section>
        </Container>
      </div>

      <section className="my-16">
        <Container>
          <div className="space-y-24">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="space-y-2">
                  <H2 className="text-3xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-sefo-purple to-sefo-blue select-none">
                      {t('introduction.holders.title')}
                    </span>
                  </H2>
                  <p className="text-justify">
                    {t('introduction.holders.description')}
                  </p>
                </div>

                <div className="mx-4 sm:mx-12 md:mx-auto"></div>
              </div>

              <div className="absolute mx-6 sm:mx-24 -top-28 left-12 sm:left-6 md:left-0 w-72 h-72 bg-purple-radial"></div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="space-y-2">
                  <H2 className="text-3xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-sefo-purple to-sefo-blue select-none">
                      {t('introduction.invest.title')}
                    </span>
                  </H2>
                  <p className="text-justify">
                    {t('introduction.invest.description')}
                  </p>
                </div>

                <div className="mx-4 sm:mx-12 md:mx-auto"></div>
              </div>

              <div className="absolute sm:mx-24 -top-36 right-0 sm:right-8 md:right-20 w-96 h-96 bg-blue-radial opacity-60"></div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                <div className="space-y-2">
                  <H2 className="text-3xl">
                    <span className="bg-clip-text text-transparent bg-gradient-to-br from-sefo-purple to-sefo-blue select-none">
                      {t('introduction.strategy.title')}
                    </span>
                  </H2>
                  <p className="text-justify">
                    {t('introduction.strategy.description')}
                  </p>
                </div>

                <div className="mx-4 sm:mx-12 md:mx-auto"></div>
              </div>

              <div className="absolute -top-12 left-12 sm:left-6 md:-left-12 w-52 h-52 bg-blue-radial opacity-70"></div>
            </div>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <H2 className="text-center">{t('backedBy.title')}</H2>

          <div className="grid grid-cols-1 py-8 xs:py-16 sm:py-24 px-8 xs:px-20 sm:px-0 sm:grid-cols-3 gap-4 xs:gap-6 sm:gap-12">
            <div className="flex justify-center items-center">
              <Image
                src={backedByBtcStartupLab}
                layout="intrinsic"
                alt={t('backedBy.btcStartupLab.name')}
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={backedByAppWorks}
                layout="intrinsic"
                alt={t('backedBy.appWorks.name')}
              />
            </div>

            <div className="flex justify-center items-center">
              <Image
                src={backedByWaterdripCapital}
                layout="intrinsic"
                alt={t('backedBy.waterdripCapital.name')}
              />
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
      ...(await serverSideTranslations(locale, [
        ...defaultLocales,
        'homepage',
      ])),
    },
  }
}

export default Home
