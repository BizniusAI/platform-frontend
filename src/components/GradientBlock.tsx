import classNames from 'classnames'
import { ReactNode } from 'react'

type TProps = {
  children?: ReactNode
  className?: string
}

const GradientBlock = ({ children, className }: TProps): JSX.Element => {
  return (
    <div
      className={classNames(
        'p-2 bg-gradient-to-br from-sefo-purple-700 to-[#50429F]/20 rounded-[2rem] shadow-md',
        className
      )}
    >
      {children}
    </div>
  )
}

export default GradientBlock
