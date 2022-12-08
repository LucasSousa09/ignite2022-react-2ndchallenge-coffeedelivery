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
      <input
        type="number"
        value={quantity}
        min={0}
        onChange={(e) => {
          if (
            (e.nativeEvent.inputType === 'deleteContentBackward' &&
              Number(e.target.value) < 1) ||
            (e.nativeEvent.inputType === 'deleteContentForward' &&
              Number(e.target.value) < 1)
          ) {
            return setAmountOfCoffies(coffeeName, 'typpedValue', '0')
          }
          return setAmountOfCoffies(coffeeName, 'typpedValue', e.target.value)
        }}
      />
      <button onClick={() => setAmountOfCoffies(coffeeName, 'add')}>
        {<Plus size={14} color={defaultTheme.purple} />}
      </button>
    </AddQuantityContainer>
  )
}
