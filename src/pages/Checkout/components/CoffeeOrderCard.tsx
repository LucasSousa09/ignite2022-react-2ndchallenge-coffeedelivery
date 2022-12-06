import { Trash } from 'phosphor-react'

import { AddQuantity } from '../../../components/AddQuantity'

import { defaultTheme } from '../../../styles/theme/default'

import coffeeImg from '../../../assets/coffes/coffee-1.png'
import { CoffeeOrder, CoffeeOrderCardContainer } from './styles'

export function CoffeeOrderCard() {
  return (
    <CoffeeOrderCardContainer>
      <img src={coffeeImg} alt="" />
      <CoffeeOrder>
        <span>Expresso Tradicional</span>
        <div>
          <AddQuantity size={2} />
          <button>
            <Trash size={16} color={defaultTheme.purple} /> Remover
          </button>
        </div>
      </CoffeeOrder>
      <strong>R$ 9,90</strong>
    </CoffeeOrderCardContainer>
  )
}
