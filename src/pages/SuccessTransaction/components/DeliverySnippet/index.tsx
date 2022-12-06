import { ReactNode } from 'react'
import { DeliverySnippetContainer } from './styles'

interface DeliverySnippetProps {
  children: ReactNode
  text: string
  highlightedText: string
  iconBgColor: string
}

export function DeliverySnippet({
  children,
  text,
  highlightedText,
  iconBgColor,
}: DeliverySnippetProps) {
  return (
    <DeliverySnippetContainer iconBgColor={iconBgColor}>
      <div>{children}</div>
      <div>
        <span>{text}</span>
        <strong>{highlightedText}</strong>
      </div>
    </DeliverySnippetContainer>
  )
}
