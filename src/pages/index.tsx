import classNames from 'classnames'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useRef, useState } from 'react'

import Container from '@/components/Container'
import GradientBlock from '@/components/GradientBlock'
import GradientText from '@/components/GradientText'
import { H1, H2, H3 } from '@/components/Headings'
import Layout from '@/components/Layout'
import MechanismDescription from '@/components/MechanismDescription'
import VideoPlayer from '@/components/VideoPlayer'
import { defaultLocales, gradientTextClassnames } from '@/constants'

// images
import marble from '@public/img/homepage/marble.png'
import bgEllipse1 from '@public/img/homepage/bg.ellipse1.png'
import bgEllipse2 from '@public/img/homepage/bg.ellipse2.png'
import bgEllipse3 from '@public/img/homepage/bg.ellipse3.png'
import bgEllipse4 from '@public/img/homepage/bg.ellipse4.png'
import bgEllipse5 from '@public/img/homepage/bg.ellipse5.png'
import introImprovementBase from '@public/img/homepage/intro.improvement.base.png'
import introImprovementLn from '@public/img/homepage/intro.improvement.ln.png'
import introNonCustodialBase from '@public/img/homepage/intro.nonCustodial.base.png'
import introNonCustodialBitcoin from '@public/img/homepage/intro.nonCustodial.bitcoin.png'
import introUtilizationBase from '@public/img/homepage/intro.utilization.base.png'
import introUtilizationFire from '@public/img/homepage/intro.utilization.fire.png'
import introUtilizationRocket from '@public/img/homepage/intro.utilization.rocket.png'
import backedByAppWorks from '@public/img/homepage/backedBy.appWorks.png'
import backedByBtcStartupLab from '@public/img/homepage/backedBy.btcStartupLab.png'
import backedByTacc from '@public/img/homepage/backedBy.tacc.png'
import memberAidan from '@public/img/homepage/member.Aidan.png'
import memberAndy from '@public/img/homepage/member.Andy.png'
import memberKurt from '@public/img/homepage/member.Kurt.png'
import memberShawn from '@public/img/homepage/member.Shawn.png'
import memberWade from '@public/img/homepage/member.Wade.png'

const mechanisms = [
  { mechanismId: 1 },
  { mechanismId: 2 },
  { mechanismId: 3 },
  { mechanismId: 4 },
]

const Home: NextPage = () => {
  const [observedWidth, setObservedWidth] = useState(0)
  const [observedHeight, setObservedHeight] = useState(0)
  const [emailAddress, setEmailAddress] = useState<string>('')
  const [subscribed, setSubscribed] = useState<boolean>(false)
  const [mechanismStep, setMechanismStep] = useState<1 | 2 | 3 | 4>(1)
  const { t } = useTranslation(['homepage'])
  const mechanismStepDiv = useRef<HTMLDivElement>(null)
  const mechanismSteps = useRef<HTMLDivElement[]>(new Array(4).fill(null))

  const observedDiv = useRef<HTMLDivElement>(null)
  const handleResize = () => {
    if (observedDiv.current!.offsetWidth !== observedWidth) {
      setObservedWidth(observedDiv.current!.offsetWidth)
      setObservedHeight((observedDiv.current!.offsetWidth * 608) / 1080)
    }
  }

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

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  })

  useEffect(() => {
    const height = mechanismStepDiv.current!.clientHeight
    mechanismStepDiv.current?.scroll({
      top:
        mechanismSteps.current[mechanismStep - 1].offsetTop -
        (mechanismStep === 1
          ? 0
          : (height - mechanismSteps.current[mechanismStep - 1].clientHeight) /
            2),
      behavior: 'smooth',
    })
  }, [mechanismStep])

  return (
    <Layout>
      <div className="relative -mt-32 w-full">
        <div className="absolute w-2/5">
          <Image src={bgEllipse1} layout="responsive" />
        </div>

        <div className="absolute right-0 w-3/5">
          <Image src={bgEllipse2} layout="responsive" />
        </div>

        <div className="absolute right-0 -bottom-20 w-1/5">
          <Image src={bgEllipse3} layout="responsive" />
        </div>

        <Container className="relative">
          <section className="h-screen relative flex flex-col gap-4 md:gap-0 md:grid md:grid-cols-5 justify-center items-center py-16">
            <div className="col-span-3 relative order-2 md:order-1">
              <div>
                <H1 className="mt-2 md:max-w-[30rem] text-center md:text-left sm:leading-[3rem]">
                  <Trans i18nKey="main.slogan" ns="homepage"></Trans>
                </H1>

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
            </div>

            <div className="col-span-2 flex justify-center items-center order-1 md:order-2">
              <div className="relative w-44 sm:w-52 md:w-48 lg:w-56 h-44 sm:h-52 md:h-48 lg:h-56">
                <div className="absolute right-0 w-1/2 h-1/2" id="marble-left">
                  <Image src={marble} layout="fill" />
                </div>

                <div className="absolute w-1/2 h-1/2" id="marble-down">
                  <Image src={marble} layout="fill" />
                </div>

                <div
                  className="absolute right-0 bottom-0 w-1/2 h-1/2"
                  id="marble-up"
                >
                  <Image src={marble} layout="fill" />
                </div>

                <div
                  className="absolute bottom-0 w-1/2 h-1/2"
                  id="marble-right"
                >
                  <Image src={marble} layout="fill" />
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>

      <section className="mb-16 relative">
        <div className="absolute lg:-top-36 w-full">
          <Image src={bgEllipse4} layout="responsive" />
        </div>

        <Container className="relative">
          <H2 className="text-center">
            <Trans i18nKey="intro.title" ns="homepage">
              <span>
                <GradientText />
              </span>
            </Trans>
          </H2>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 px-0 sm:px-16 md:px-24 lg:px-0 py-8 sm:py-12 sm:pt-16">
            <div className="lg:col-span-2">
              <GradientBlock className="h-full px-6 pb-4">
                <div className="flex flex-col gap-2">
                  <div className="h-52 flex justify-center">
                    <div className="relative w-2/5 lg:w-2/3">
                      <div className="absolute bottom-0">
                        <Image src={introNonCustodialBase} layout="intrinsic" />
                      </div>
                      <div
                        className="absolute bottom-32"
                        id="non-custodial-bitcoin"
                      >
                        <Image
                          src={introNonCustodialBitcoin}
                          layout="intrinsic"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex">
                      <H3 className={gradientTextClassnames}>
                        <Trans
                          i18nKey="intro.solution1.title"
                          ns="homepage"
                        ></Trans>
                      </H3>
                    </div>

                    <p className="mt-3">{t('intro.solution1.description')}</p>
                  </div>
                </div>
              </GradientBlock>
            </div>

            <div className="lg:col-span-3">
              <div className="flex flex-col gap-8 lg:gap-2">
                <GradientBlock className="px-6 pb-4">
                  <div className="grid grid-cols-5 gap-2">
                    <div className="col-span-3">
                      <div className="flex">
                        <H3 className={gradientTextClassnames}>
                          <Trans
                            i18nKey="intro.solution2.title"
                            ns="homepage"
                          ></Trans>
                        </H3>
                      </div>

                      <p className="mt-3">{t('intro.solution2.description')}</p>
                    </div>

                    <div className="col-span-2 relative">
                      <div className="absolute bottom-0">
                        <Image src={introUtilizationBase} layout="intrinsic" />
                      </div>
                      <div
                        className="absolute bottom-[3.25rem]"
                        id="utilization-fire"
                      >
                        <Image src={introUtilizationFire} layout="intrinsic" />
                      </div>
                      <div
                        className="absolute bottom-[2.75rem]"
                        id="utilization-rocket"
                      >
                        <Image
                          src={introUtilizationRocket}
                          layout="intrinsic"
                        />
                      </div>
                    </div>
                  </div>
                </GradientBlock>

                <GradientBlock className="px-6 pb-4">
                  <div className="flex">
                    <H3 className={gradientTextClassnames}>
                      <Trans
                        i18nKey="intro.solution3.title"
                        ns="homepage"
                      ></Trans>
                    </H3>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="col-span-2">
                      <p className="mt-3">{t('intro.solution3.description')}</p>
                    </div>

                    <div className="relative">
                      <div className="absolute bottom-0">
                        <Image src={introImprovementBase} layout="intrinsic" />
                      </div>
                      <div className="absolute bottom-3" id="improvement-lego">
                        <Image src={introImprovementLn} layout="intrinsic" />
                      </div>
                    </div>
                  </div>
                </GradientBlock>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-16 relative">
        <div className="absolute -bottom-44 w-1/4">
          <Image src={bgEllipse5} layout="responsive" />
        </div>

        <Container className="relative">
          <H2 className="text-center lg:text-left">{t('mechanism.title')}</H2>

          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-4 py-8 lg:pb-40 sm:px-6 md:px-12 lg:px-0">
            <div className="flex flex-col relative">
              <div
                ref={observedDiv}
                className="invisible w-full"
                style={{ height: observedHeight }}
              ></div>

              <VideoPlayer
                videoId={1}
                nextVideoId={2}
                step={mechanismStep}
                setStep={setMechanismStep}
              />

              <VideoPlayer
                videoId={2}
                nextVideoId={3}
                step={mechanismStep}
                setStep={setMechanismStep}
              />

              <VideoPlayer
                videoId={3}
                nextVideoId={4}
                step={mechanismStep}
                setStep={setMechanismStep}
              />

              <VideoPlayer
                videoId={4}
                nextVideoId={1}
                step={mechanismStep}
                setStep={setMechanismStep}
              />
            </div>

            <div className="flex flex-col gap-2">
              <div
                className="relative h-[18rem] min-[450px]:h-52 sm:h-40 lg:h-64 overflow-hidden"
                ref={mechanismStepDiv}
              >
                {mechanisms.map((item) => (
                  <MechanismDescription
                    ref={(element) =>
                      (mechanismSteps.current[item.mechanismId - 1] =
                        element as HTMLDivElement)
                    }
                    key={item.mechanismId}
                    mechanismId={item.mechanismId}
                    step={mechanismStep}
                  />
                ))}

                <div className="h-52 sm:h-40 lg:h-64"></div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="my-16">
        <Container>
          <H2 className="text-center">{t('team.title')}</H2>
          <div className="flex flex-wrap justify-center py-8 sm:py-24 gap-4 sm:gap-8 text-center">
            <GradientBlock className="min-[450px]:basis-2/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex flex-col pb-4">
              <div className="mx-auto w-1/2 min-[450px]:w-full">
                <Image src={memberAidan} layout="intrinsic" />
              </div>
              <H3>
                <GradientText>{t('team.aidan.name')}</GradientText>
              </H3>
              <p className="text-sm font-bold">{t('team.aidan.title')}</p>
            </GradientBlock>

            <GradientBlock className="min-[450px]:basis-2/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex flex-col pb-4">
              <div className="mx-auto w-1/2 min-[450px]:w-full">
                <Image src={memberWade} layout="intrinsic" />
              </div>
              <H3>
                <GradientText>{t('team.wade.name')}</GradientText>
              </H3>
              <p className="text-sm font-bold">{t('team.wade.title')}</p>
            </GradientBlock>

            <GradientBlock className="min-[450px]:basis-2/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex flex-col pb-4">
              <div className="mx-auto w-1/2 min-[450px]:w-full">
                <Image src={memberAndy} layout="intrinsic" />
              </div>
              <H3>
                <GradientText>{t('team.andy.name')}</GradientText>
              </H3>
              <p className="text-sm font-bold">{t('team.andy.title')}</p>
            </GradientBlock>

            <GradientBlock className="min-[450px]:basis-2/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex flex-col pb-4">
              <div className="mx-auto w-1/2 min-[450px]:w-full">
                <Image src={memberKurt} layout="intrinsic" />
              </div>
              <H3>
                <GradientText>{t('team.kurt.name')}</GradientText>
              </H3>
              <p className="text-sm font-bold">{t('team.kurt.title')}</p>
            </GradientBlock>

            <GradientBlock className="min-[450px]:basis-2/5 sm:basis-1/3 md:basis-1/4 lg:basis-1/6 flex flex-col pb-4">
              <div className="mx-auto w-1/2 min-[450px]:w-full">
                <Image src={memberShawn} layout="intrinsic" />
              </div>
              <H3>
                <GradientText>{t('team.shawn.name')}</GradientText>
              </H3>
              <p className="text-sm font-bold">{t('team.shawn.title')}</p>
            </GradientBlock>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <H2 className="text-center">{t('backedBy.title')}</H2>

          <div className="grid grid-cols-1 sm:grid-cols-3 py-20 sm:py-24 min-[320px]:px-16 min-[480px]:px-24 px-28 sm:px-0 gap-8 sm:gap-12">
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
                src={backedByTacc}
                layout="intrinsic"
                alt={t('backedBy.tacc.name')}
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
