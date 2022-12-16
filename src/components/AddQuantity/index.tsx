import { useContext, useEffect, useState } from 'react'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { AddQuantityContainer, AddToCartButton } from './styles'
import { defaultTheme } from '../../styles/theme/default'
import { CartContext } from '../../contexts/CartContextProvider'

interface AddQuantityProps {
  size?: number
  name: string
  quantity?: number
  coffeeImgSrc: string
  addToCartButton?: boolean
}

export function AddQuantity({
  size = 2.375,
  name,
  quantity,
  coffeeImgSrc,
  addToCartButton,
}: AddQuantityProps) {
  useEffect(() => {
    if (quantity) {
      setCoffeeQuantity(quantity)
    }
  }, [quantity])

  const [coffeeQuantity, setCoffeeQuantity] = useState<number>(0)

  const { updateCartCoffees } = useContext(CartContext)

  return (
    <AddQuantityContainer size={size}>
      <button
        type="button"
        onClick={() => {
          setCoffeeQuantity((state) => {
            if (!addToCartButton) {
              updateCartCoffees({
                name,
                price: 9.9,
                coffeeImgSrc,
                quantity: state - 1,
              })
            }
            return state - 1
          })
        }}
      >
        {<Minus size={14} color={defaultTheme.purple} />}
      </button>

      <input
        type="number"
        value={coffeeQuantity}
        onChange={(evt) => {
          setCoffeeQuantity(Number(evt.target.value))
          if (!addToCartButton) {
            updateCartCoffees({
              name,
              price: 9.9,
              coffeeImgSrc,
              quantity: Number(evt.target.value),
            })
          }
        }}
      />
      <button
        type="button"
        onClick={() => {
          setCoffeeQuantity((state) => {
            if (!addToCartButton) {
              updateCartCoffees({
                name,
                price: 9.9,
                coffeeImgSrc,
                quantity: state + 1,
              })
            }
            return state + 1
          })
        }}
      >
        {<Plus size={14} color={defaultTheme.purple} />}
      </button>

      {addToCartButton ? (
        <AddToCartButton
          disabled={coffeeQuantity === 0}
          onClick={() =>
            updateCartCoffees({
              name,
              price: 9.9,
              coffeeImgSrc,
              quantity: coffeeQuantity,
            })
          }
        >
          <ShoppingCart size={22} weight="fill" color={defaultTheme.white} />
        </AddToCartButton>
      ) : (
        ''
      )}
    </AddQuantityContainer>
  )
}
