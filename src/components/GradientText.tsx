import { ReactNode } from 'react'

import { gradientTextClassnames } from '@/constants'

type TProps = {
  children?: ReactNode
}

const GradientText = ({ children }: TProps): JSX.Element => {
  return <span className={gradientTextClassnames}>{children}</span>
}

export default GradientText
