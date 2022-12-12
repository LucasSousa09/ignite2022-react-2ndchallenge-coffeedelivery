import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/theme/default'

import {
  CoffeeCardContainer,
  CoffeeDescription,
  AddQuantityToCartContainer,
  AddToCartButton,
} from './styles'

import { AddQuantity } from '../../../../components/AddQuantity'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContextProvider'

interface CoffeeCardProps {
  coffeeImgSrc: string
  name: string
  description: string
  tags: string[]
  quantity: number
}

export function CoffeeCard({
  coffeeImgSrc,
  name,
  description,
  tags,
  quantity,
}: CoffeeCardProps) {
  const { updateCartCoffees } = useContext(CartContext)

  return (
    <CoffeeCardContainer>
      <CoffeeDescription>
        <img src={coffeeImgSrc} alt="" />
        <div>
          {tags.map((tag) => (
            <span key={name + tag}>{tag}</span>
          ))}
        </div>
        <strong>{name}</strong>
        <p>{description}</p>
      </CoffeeDescription>

      <AddQuantityToCartContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <AddQuantity quantity={quantity} coffeeName={name} />

        <AddToCartButton
          disabled={quantity === 0}
          onClick={() => updateCartCoffees({ name, quantity, coffeeImgSrc })}
        >
          <ShoppingCart size={22} weight="fill" color={defaultTheme.white} />
        </AddToCartButton>
      </AddQuantityToCartContainer>
    </CoffeeCardContainer>
  )
}
