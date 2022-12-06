import coffeeImg from '../../../../assets/coffes/coffee-1.png'

import { ShoppingCart } from 'phosphor-react'
import { defaultTheme } from '../../../../styles/theme/default'

import {
  CoffeeCardContainer,
  CoffeeDescription,
  AddQuantityToCartContainer,
  AddToCartButton,
} from './styles'
import { AddQuantity } from '../../../../components/AddQuantity'

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <CoffeeDescription>
        <img src={coffeeImg} alt="" />
        <div>
          <span>Tradicional</span>
        </div>
        <strong>Expresso Tradicional</strong>
        <p>O tradional café feito com quente e grãos moídos</p>
      </CoffeeDescription>

      <AddQuantityToCartContainer>
        <span>
          R$ <strong>9,90</strong>
        </span>
        <AddQuantity />
        <div>
          <AddToCartButton>
            <ShoppingCart size={22} weight="fill" color={defaultTheme.white} />
          </AddToCartButton>
        </div>
      </AddQuantityToCartContainer>
    </CoffeeCardContainer>
  )
}
