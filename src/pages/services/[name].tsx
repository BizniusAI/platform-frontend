import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useState } from 'react'

import { defaultLocales } from '@/constants'
import Container from '@/components/Container'
import { H1, H3 } from '@/components/Headings'
import Layout from '@/components/Layout'

// images
import lowRiskIcon from '@public/img/services/lowRiskIcon.png'
import explanationDescription from '@public/img/services/explanation.description.jpg'

const serviceNameMapping: Record<string, string> = {
  'low-risk': 'lowRisk',
  'high-risk': 'highRisk',
}

const Service: NextPage = () => {
  const [walletBalance] = useState<number>(10)
  const [subscribeBtnClicked, setSubscribeBtnClicked] = useState<boolean>(false)
  const [subscribed, setSubscribed] = useState<boolean>(false)
  const [investAmount, setInvestAmount] = useState<number>(0.01)
  const { t } = useTranslation(['services'])
  const router = useRouter()
  const { name } = router.query
  const serviceName = serviceNameMapping[String(name)]

  useEffect(() => {
    setSubscribeBtnClicked(false)
    setSubscribed(false)
    setInvestAmount(0.01)
  }, [router.asPath])

  return (
    <Layout title={t(`${serviceName}.title`)}>
      <section className="bg-gray-50 py-6 pb-12 px-4 sm:px-auto">
        <Container className="pt-4">
          {subscribeBtnClicked ? (
            <>
              <div className="bg-white w-1/2 mx-auto p-4 rounded-xl shadow-md">
                <H3 className="mb-4 text-center">
                  {t('subscribe.title')}
                  {` “${t(`${serviceName}.title`)}”`}
                </H3>

                <div className="mb-3 bg-sefo-grayblue-200 px-6 py-4 rounded-xl">
                  <h4 className="text-lg text-sefo-grayblue font-bold text-center">
                    {t('subscribe.disclaimer.title')}
                  </h4>

                  <Trans i18nKey="subscribe.disclaimer.content" ns="services">
                    <ol className="ml-4 list-decimal">
                      <li></li>
                      <li></li>
                      <li></li>
                    </ol>
                  </Trans>
                </div>

                <div className="mb-3 bg-sefo-grayblue-200 px-6 py-4 rounded-xl">
                  <h4 className="text-lg text-sefo-grayblue font-bold text-center">
                    {t('amount.title')}
                  </h4>

                  <div className="mt-2 h-8 flex justify-center gap-2 text-sefo-grayblue font-medium">
                    <button
                      className={classNames(
                        'shrink-0 w-8 flex justify-center items-center border-2 border-sefo-grayblue rounded-lg',
                        `${
                          Math.abs(investAmount - 0.01) < 0.005
                            ? 'cursor-not-allowed'
                            : ''
                        }`
                      )}
                      onClick={() => {
                        setInvestAmount((prev) =>
                          Math.abs(prev - 0.01) < 0.005 ? prev : prev - 0.01
                        )
                      }}
                      disabled={
                        Math.abs(investAmount - 0.01) < 0.005 ? true : false
                      }
                    >
                      <FontAwesomeIcon className="w-3" icon={faMinus} />
                    </button>

                    <div className="flex justify-center items-center px-4 border-2 border-sefo-grayblue rounded-lg select-none">
                      {Math.round(investAmount * 100) / 100} BTC
                    </div>

                    <button
                      className="shrink-0 w-8 flex justify-center items-center border-2 border-sefo-grayblue rounded-lg"
                      onClick={() => {
                        setInvestAmount((prev) => prev + 0.01)
                      }}
                    >
                      <FontAwesomeIcon className="w-3" icon={faPlus} />
                    </button>
                  </div>
                </div>

                <div className="mb-3 px-3 text-sm text-sefo-grayblue">
                  <div className="flex justify-between py-1">
                    <span>{t('walletBalance', { ns: 'common' })}</span>
                    <span className="text-black text-right">
                      {Math.round(walletBalance * 100) / 100} BTC
                    </span>
                  </div>

                  <div className="flex justify-between py-1">
                    <span>{t('amount', { ns: 'common' })}</span>
                    <span className="text-black text-right">
                      {Math.round(investAmount * 100) / 100} BTC
                    </span>
                  </div>

                  <hr className="border-sefo-lightgray my-2"></hr>

                  <div className="flex justify-between py-1">
                    <span>{t('balance', { ns: 'common' })}</span>
                    <span className="text-black text-right">
                      {Math.round((walletBalance - investAmount) * 100) / 100}{' '}
                      BTC
                    </span>
                  </div>

                  <div className="flex items-center py-3 text-black">
                    <input
                      type="checkbox"
                      className="form-checkbox rounded focus:ring-0"
                    />
                    <p className="ml-1">{t('subscribe.agreement')}</p>
                  </div>
                </div>

                <div className="flex justify-center">
                  <button
                    className={classNames(
                      'w-40 mx-auto py-1 rounded-lg font-semibold text-white',
                      subscribed
                        ? 'border-2 border-sefo-orange text-sefo-orange'
                        : 'bg-sefo-orange'
                    )}
                    onClick={() => {
                      setSubscribed(true)
                    }}
                  >
                    {t(subscribed ? 'success' : 'subscribe', { ns: 'common' })}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div>
                <H1 className="flex items-center gap-8">
                  <div className="relative w-16 h-16 shrink-0">
                    <Image
                      src={lowRiskIcon}
                      alt={t('features.nonCustodial')}
                      layout="fill"
                    />
                  </div>

                  <span
                    className={classNames(
                      'bg-clip-text text-transparent bg-gradient-to-r',
                      serviceName === 'lowRisk'
                        ? 'from-sefo-orange to-sefo-lightblue'
                        : 'from-sefo-orange to-sefo-purple'
                    )}
                  >
                    {t(`${serviceName}.title`)}
                  </span>
                </H1>
              </div>

              <hr className="my-6"></hr>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-11 gap-4 text-center">
                <div className="lg:col-span-2 bg-white py-2 px-3 rounded-xl shadow-md">
                  <p>{t('apy.title')}</p>
                  <p className="font-bold">
                    <span className="text-3xl tracking-wider">3.1</span>%
                  </p>
                </div>
                <div className="lg:col-span-2 bg-white py-2 px-3 rounded-xl shadow-md">
                  <p>{t('period.title')}</p>
                  <p className="font-bold">
                    <span className="text-3xl tracking-wider">1</span>week
                  </p>
                </div>
                <div className="lg:col-span-4 bg-white py-2 px-3 rounded-xl shadow-md">
                  <p>{t('amount.title')}</p>
                  <div className="mt-2 h-8 flex justify-center gap-2 text-sefo-grayblue font-medium">
                    <button
                      className={classNames(
                        'shrink-0 w-8 flex justify-center items-center border-2 border-sefo-grayblue rounded-lg',
                        `${
                          Math.abs(investAmount - 0.01) < 0.005
                            ? 'cursor-not-allowed'
                            : ''
                        }`
                      )}
                      onClick={() => {
                        setInvestAmount((prev) =>
                          Math.abs(prev - 0.01) < 0.005 ? prev : prev - 0.01
                        )
                      }}
                      disabled={
                        Math.abs(investAmount - 0.01) < 0.005 ? true : false
                      }
                    >
                      <FontAwesomeIcon className="w-3" icon={faMinus} />
                    </button>

                    <div className="flex justify-center items-center px-4 border-2 border-sefo-grayblue rounded-lg select-none">
                      {Math.round(investAmount * 100) / 100} BTC
                    </div>

                    <button
                      className="shrink-0 w-8 flex justify-center items-center border-2 border-sefo-grayblue rounded-lg"
                      onClick={() => {
                        setInvestAmount((prev) => prev + 0.01)
                      }}
                    >
                      <FontAwesomeIcon className="w-3" icon={faPlus} />
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-3 bg-white py-2 px-3 rounded-xl shadow-md">
                  <p>{t('expiration.title')}: 9.22.2022</p>
                  <button
                    className="mt-2 w-full bg-sefo-orange py-1 rounded-lg font-semibold text-white"
                    onClick={() => {
                      setSubscribeBtnClicked(true)
                    }}
                  >
                    {t('subscribe', { ns: 'common' })}
                  </button>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 lg:grid-cols-11 gap-4">
                <div className="lg:col-span-8 bg-white py-2 px-4 rounded-xl shadow-md text-left">
                  <H3>{t('explanation.title')}</H3>
                  <p className="mt-2 mb-6">{t('explanation.description')}</p>
                  <Image
                    src={explanationDescription}
                    alt={t('explanation.description')}
                  />
                </div>

                <div className="lg:col-span-3 bg-white py-2 px-4 rounded-xl shadow-md">
                  <div className="flex flex-col h-full">
                    <H3>{t('moreInfo.title')}</H3>
                    <div className="my-2 grow text-sm text-sefo-grayblue">
                      <div>
                        <div className="flex justify-between py-1">
                          <span>{t('moreInfo.valueDate')}</span>
                          <span className="text-black text-right">
                            2022/09/12 00:00
                          </span>
                        </div>

                        <div className="flex justify-between py-1">
                          <span>{t('moreInfo.expDate')}</span>
                          <span className="text-black text-right">
                            2022/12/12 23:59
                          </span>
                        </div>

                        <div className="flex justify-between py-1">
                          <span>{t('moreInfo.settlementCycle')}</span>
                          <span className="text-black text-right">
                            {t('daily', { ns: 'common' })}
                          </span>
                        </div>

                        <div className="flex justify-between py-1">
                          <span>{t('moreInfo.currency')}</span>
                          <span className="text-black text-right">BTC</span>
                        </div>

                        <div className="flex justify-between py-1">
                          <span>{t('moreInfo.renewable')}</span>
                          <span className="text-black text-right">
                            {t('yes', { ns: 'common' })}
                          </span>
                        </div>
                      </div>

                      <div className="py-1">
                        <div className="flex justify-between py-2 border-y border-sefo-lightgray">
                          <span>{t('moreInfo.perUnit')}</span>
                          <span className="text-black text-right">
                            0.01 BTC
                          </span>
                        </div>
                      </div>

                      <div className="py-1">
                        <p className="pb-1 font-bold">
                          {t('moreInfo.apyTierRate')}
                        </p>
                        <div className="flex justify-between py-1">
                          <span>0-100 BTC</span>
                          <span className="text-black text-right">3.1 %</span>
                        </div>

                        <div className="flex justify-between py-1">
                          <span>100-300 BTC</span>
                          <span className="text-black text-right">2.9 %</span>
                        </div>

                        <div className="flex justify-between py-1">
                          <span>{'>'} 300 BTC</span>
                          <span className="text-black text-right">2.0 %</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-sefo-grayblue">
                      {t('moreInfo.description')}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </Container>
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = [
    {
      params: { name: 'low-risk' },
    },
  ]

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ locale = '' }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [...defaultLocales])),
    },
  }
}

export default Service
