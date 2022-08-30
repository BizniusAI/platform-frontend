import classNames from 'classnames'
import React, { ReactNode } from 'react'

type TProps = {
  children: ReactNode
  className?: string
  disabled?: boolean
  direction?: 'top' | 'bottom'
}

type TCommonProps = {
  children: JSX.Element
}

const Tooltip = ({
  children,
  className = '',
  disabled = false,
  direction = 'bottom',
}: TProps): JSX.Element => {
  const body = React.Children.map(children, (child) =>
    // @ts-ignore
    child.type.displayName === 'Body' ? child : null
  )
  const content = React.Children.map(children, (child) =>
    // @ts-ignore
    child.type.displayName === 'Content' ? child : null
  )

  return (
    <span className="tooltip-wrapper relative">
      {body ? body : children}
      {!disabled && (
        <span
          className={classNames(
            'tooltip left-0 p-2 z-50 rounded-xl bg-white text-sm font-medium border border-gray-100 outline-none overflow-hidden shadow-lg select-none',
            className,
            direction === 'bottom' ? 'top-10' : 'top-[-5rem]'
          )}
        >
          {content}
        </span>
      )}
    </span>
  )
}

const Body = ({ children }: TCommonProps) => children
Body.displayName = 'Body'
Tooltip.Body = Body

const Content = ({ children }: TCommonProps) => children
Content.displayName = 'Content'
Tooltip.Content = Content

export default Tooltip
