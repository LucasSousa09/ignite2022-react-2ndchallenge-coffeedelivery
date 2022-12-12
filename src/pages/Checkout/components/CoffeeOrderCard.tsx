import { Trash } from 'phosphor-react'

import { AddQuantity } from '../../../components/AddQuantity'

import { defaultTheme } from '../../../styles/theme/default'

import { CoffeeOrder, CoffeeOrderCardContainer } from './styles'

interface CoffeeOrderCardProps {
  coffeeImg: string
  coffeeName: string
  quantity: number
}

export function CoffeeOrderCard({
  coffeeImg,
  coffeeName,
  quantity,
}: CoffeeOrderCardProps) {
  return (
    <CoffeeOrderCardContainer>
      <img src={coffeeImg} alt="" />
      <CoffeeOrder>
        <span>{coffeeName}</span>
        <div>
          <AddQuantity size={2} quantity={quantity} coffeeName={coffeeName} />
          <button type="button">
            <Trash size={16} color={defaultTheme.purple} /> Remover
          </button>
        </div>
      </CoffeeOrder>
      <strong>R$ 9,90</strong>
    </CoffeeOrderCardContainer>
  )
}
