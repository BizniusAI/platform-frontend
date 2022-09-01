import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'

import Layout from '@/components/Layout'

// images
import lowRiskIcon from '@public/img/services/lowRiskIcon.png'
import explanationDescription from '@public/img/services/explanation.description.jpg'

const serviceNameMapping: Record<string, string> = {
  'low-risk': 'lowRisk',
  'high-risk': 'highRisk',
}

const Service: NextPage = () => {
  const [investAmount, setInvestAmount] = useState<number>(0.01)
  const { t } = useTranslation(['services'])
  const router = useRouter()
  const { name } = router.query
  const serviceName = serviceNameMapping[String(name)]

  return (
    <Layout title={`${t(serviceName)} - Service`}>
      <section className="bg-gray-50 mx-auto py-6 pb-12 px-4 sm:px-auto">
        <div className="container mx-auto">
          <div className="pt-4">
            <h1 className="flex items-center gap-8 text-3xl sm:text-4xl font-bold">
              <div className="relative w-16 h-16 shrink-0">
                <Image
                  src={lowRiskIcon}
                  alt={t('features.nonCustodial')}
                  layout="fill"
                />
              </div>

              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F2A900] to-[#24D8FF] select-none">
                {t('lowRisk.title')}
              </span>
            </h1>
          </div>

          <hr className="my-6"></hr>

          <div className="grid grid-cols-2 md:grid-cols-11 gap-4 text-center">
            <div className="md:col-span-2 bg-white py-2 px-3 rounded-xl shadow-md">
              <p>{t('apy.title')}</p>
              <p className="font-bold">
                <span className="text-3xl tracking-wider">3.1</span>%
              </p>
            </div>
            <div className="md:col-span-2 bg-white py-2 px-3 rounded-xl shadow-md">
              <p>{t('period.title')}</p>
              <p className="font-bold">
                <span className="text-3xl tracking-wider">1</span>week
              </p>
            </div>
            <div className="md:col-span-4 bg-white py-2 px-3 rounded-xl shadow-md">
              <p>{t('amount.title')}</p>
              <div className="mt-2 h-8 flex justify-center gap-2 text-[#7B95AF] font-medium">
                <button
                  className={classNames(
                    'shrink-0 w-8 flex justify-center items-center border-2 border-[#7B95AF] rounded-lg',
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

                <div className="flex justify-center items-center px-4 border-2 border-[#7B95AF] rounded-lg select-none">
                  {Math.round(investAmount * 100) / 100} BTC
                </div>

                <button
                  className="shrink-0 w-8 flex justify-center items-center border-2 border-[#7B95AF] rounded-lg"
                  onClick={() => {
                    setInvestAmount((prev) => prev + 0.01)
                  }}
                >
                  <FontAwesomeIcon className="w-3" icon={faPlus} />
                </button>
              </div>
            </div>
            <div className="md:col-span-3 bg-white py-2 px-3 rounded-xl shadow-md">
              <p>{t('expiration.title')}: 9.22.2022</p>
              <button className="mt-2 w-full bg-[#F2A900] py-1 rounded-lg font-semibold text-white">
                {t('subscribe', { ns: 'common' })}
              </button>
            </div>
          </div>

          <div className="mt-4 grid md:grid-cols-11 gap-4 text-center">
            <div className="col-span-8 bg-white py-2 px-4 rounded-xl shadow-md text-left">
              <h3 className="text-xl font-bold">{t('explanation.title')}</h3>
              <p className="mt-2 mb-6">{t('explanation.description')}</p>
              <Image
                src={explanationDescription}
                alt={t('explanation.description')}
              />
            </div>
            <div className="hidden md:block md:col-span-3 bg-white py-2 px-4 rounded-xl shadow-md"></div>
          </div>
        </div>
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
      ...(await serverSideTranslations(locale, ['menu', 'common', 'services'])),
      // Will be passed to the page component as props
    },
  }
}

export default Service
