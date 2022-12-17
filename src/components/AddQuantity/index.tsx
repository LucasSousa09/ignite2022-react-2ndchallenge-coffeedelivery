import { useContext, useEffect, useState } from 'react'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { AddQuantityContainer, AddToCartButton } from './styles'
import { defaultTheme } from '../../styles/theme/default'
import { CartContext } from '../../contexts/CartContextProvider'
import { CoffeesContext } from '../../contexts/CoffeesContextProvider'

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

  const { updateCartCoffees, addCoffeeToCart } = useContext(CartContext)
  const { updateCoffeesQuantity } = useContext(CoffeesContext)

  useEffect(() => {
    if (!addToCartButton) {
      updateCartCoffees({
        name,
        quantity: coffeeQuantity,
      })
      updateCoffeesQuantity()
    }
  }, [coffeeQuantity, addToCartButton])

  function handleDecreaseOneCoffee() {
    setCoffeeQuantity((state) => {
      return state - 1
    })
  }

  function handleAddOneCoffee() {
    setCoffeeQuantity((state) => {
      return state + 1
    })
  }

  return (
    <AddQuantityContainer size={size}>
      <button type="button" onClick={handleDecreaseOneCoffee}>
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
              quantity: Number(evt.target.value),
            })
            updateCoffeesQuantity()
          }
        }}
      />
      <button type="button" onClick={handleAddOneCoffee}>
        {<Plus size={14} color={defaultTheme.purple} />}
      </button>

      {addToCartButton ? (
        <AddToCartButton
          disabled={coffeeQuantity === 0}
          onClick={() =>
            addCoffeeToCart({
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
