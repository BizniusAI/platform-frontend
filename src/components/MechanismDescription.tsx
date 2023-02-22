import classNames from 'classnames'
import { Trans, useTranslation } from 'next-i18next'
import { forwardRef } from 'react'

import { H3 } from '@/components/Headings'
import { gradientTextClassnames } from '@/constants'

interface Props {
  mechanismId: number
  step: 1 | 2 | 3 | 4
}
type Ref = HTMLDivElement

const MechanismDescription = forwardRef<Ref, Props>(
  (props, ref): JSX.Element => {
    const { t } = useTranslation(['homepage'])

    return (
      <div
        ref={ref}
        className={classNames(
          'px-6 py-2 transition-all duration-700 ease-in-out select-none',
          props.step === props.mechanismId
            ? 'bg-white/10 rounded-2xl opacity-100'
            : 'opacity-20'
        )}
        // ref={mechanismStep1Ref}
      >
        <H3 className={gradientTextClassnames}>
          <Trans
            i18nKey={`mechanism.step${props.mechanismId}.title`}
            ns="homepage"
          ></Trans>
        </H3>
        <p className="mt-2">
          {t(`mechanism.step${props.mechanismId}.description`)}
        </p>
      </div>
    )
  }
)

MechanismDescription.displayName = 'MechanismDescription'

export default MechanismDescription
