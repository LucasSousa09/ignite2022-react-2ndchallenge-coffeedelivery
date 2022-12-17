import {
  CoffeeCardContainer,
  CoffeeDescription,
  AddQuantityToCartContainer,
} from './styles'

import { AddQuantity } from '../../../../components/AddQuantity'
import { formatPrice } from '../../../../utils/formatPrice'

interface CoffeeCardProps {
  name: string
  tags: string[]
  price: number
  quantity: number
  description: string
  coffeeImgSrc: string
}

export function CoffeeCard({
  name,
  tags,
  price,
  quantity,
  description,
  coffeeImgSrc,
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
          <strong>{formatPrice(price)}</strong>
        </span>
        <AddQuantity
          quantity={quantity}
          name={name}
          coffeeImgSrc={coffeeImgSrc}
          addToCartButton
        />
      </AddQuantityToCartContainer>
    </CoffeeCardContainer>
  )
}
