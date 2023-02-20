import { ReactNode } from 'react'

type TProps = {
  children?: ReactNode
}

const GradientText = ({ children }: TProps) => {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-sefo-lightblue to-sefo-purple-300 select-none">
      {children}
    </span>
  )
}

export default GradientText
