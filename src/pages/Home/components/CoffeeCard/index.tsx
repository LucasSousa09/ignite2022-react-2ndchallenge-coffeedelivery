import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/theme/default'

import {
  CoffeeCardContainer,
  CoffeeDescription,
  AddQuantityToCartContainer,
  AddToCartButton,
} from './styles'

import { AddQuantity } from '../../../../components/AddQuantity'

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
        <div>
          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" color={defaultTheme.white} />
          </AddToCartButton>
        </div>
      </AddQuantityToCartContainer>
    </CoffeeCardContainer>
  )
}
