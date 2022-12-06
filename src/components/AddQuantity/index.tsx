import { Minus, Plus } from 'phosphor-react'
import { defaultTheme } from '../../styles/theme/default'
import { AddQuantityContainer } from './styles'

interface AddQuantityProps {
  size?: number
}

export function AddQuantity({ size = 2.375 }: AddQuantityProps) {
  return (
    <AddQuantityContainer size={size}>
      <button>{<Minus size={14} color={defaultTheme.purple} />}</button>
      <input type="number" defaultValue={1} />
      <button>{<Plus size={14} color={defaultTheme.purple} />}</button>
    </AddQuantityContainer>
  )
}
