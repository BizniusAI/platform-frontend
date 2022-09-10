import classNames from 'classnames'
import { ReactNode } from 'react'

type TProps = {
  children: ReactNode
  className?: string
}

const Container = ({ children, className = '' }: TProps): JSX.Element => {
  return (
    <div className={classNames('container', className)}>
      <div className="relative wrapper">{children}</div>
    </div>
  )
}

export default Container
