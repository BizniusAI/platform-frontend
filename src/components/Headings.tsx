import classNames from 'classnames'
import { ReactNode } from 'react'

type TProps = {
  children: ReactNode
  className?: string
}

export const H1 = ({ className, children }: TProps) => {
  return (
    <h1
      className={classNames(
        'text-3xl sm:text-4xl font-bold select-none',
        className
      )}
    >
      {children}
    </h1>
  )
}

export const H2 = ({ className, children }: TProps) => {
  return (
    <h2 className={classNames('text-2xl font-bold select-none', className)}>
      {children}
    </h2>
  )
}

export const H3 = ({ className, children }: TProps) => {
  return (
    <h2 className={classNames('text-xl font-bold select-none', className)}>
      {children}
    </h2>
  )
}
