import { ReactNode } from 'react'
import { Header } from './styles'

interface HeaderInputContainerProps {
  children: ReactNode
  title: string
  description: string
}

export function HeaderInputContainer({
  children,
  title,
  description,
}: HeaderInputContainerProps) {
  return (
    <Header>
      {children}
      <div>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </Header>
  )
}
