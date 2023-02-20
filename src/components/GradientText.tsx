import { ReactNode } from 'react'

import { gradientTextClassnames } from '@/constants'

type TProps = {
  children?: ReactNode
}

const GradientText = ({ children }: TProps) => {
  return <span className={gradientTextClassnames}>{children}</span>
}

export default GradientText
