import { ReactNode } from 'react'
import { SnippetStyle } from './styles'

interface SnippetProps {
  children: ReactNode
  iconContainerBgColor: string
  message: string
}

export function Snippet({
  children,
  iconContainerBgColor,
  message,
}: SnippetProps) {
  return (
    <SnippetStyle iconContainerBgColor={iconContainerBgColor}>
      <div>{children}</div>
      <span> {message}</span>
    </SnippetStyle>
  )
}
