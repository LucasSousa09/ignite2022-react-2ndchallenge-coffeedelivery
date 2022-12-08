import { Minus, Plus } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'
import { defaultTheme } from '../../styles/theme/default'
import { AddQuantityContainer } from './styles'

interface AddQuantityProps {
  size?: number
  quantity: number
  coffeeName: string
}

export function AddQuantity({
  size = 2.375,
  quantity,
  coffeeName,
}: AddQuantityProps) {
  const { setAmountOfCoffies } = useContext(CartContext)

  return (
    <AddQuantityContainer size={size}>
      <button onClick={() => setAmountOfCoffies(coffeeName, 'remove')}>
        {<Minus size={14} color={defaultTheme.purple} />}
      </button>
      <input type="number" value={quantity} />
      <button onClick={() => setAmountOfCoffies(coffeeName, 'add')}>
        {<Plus size={14} color={defaultTheme.purple} />}
      </button>
    </AddQuantityContainer>
  )
}
