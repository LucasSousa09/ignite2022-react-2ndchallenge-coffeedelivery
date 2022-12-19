import { Trash } from 'phosphor-react'
import { useContext } from 'react'

import { AddQuantity } from '../../../../components/AddQuantity'
import { CartContext } from '../../../../contexts/CartContextProvider'

import { defaultTheme } from '../../../../styles/theme/default'
import { formatPrice } from '../../../../utils/formatPrice'

import { CoffeeOrder, CoffeeOrderCardContainer } from './styles'

interface CoffeeOrderCardProps {
  coffeeImg: string
  coffeeName: string
  quantity: number
  price: number
}

export function CoffeeOrderCard({
  coffeeImg,
  coffeeName,
  quantity,
  price,
}: CoffeeOrderCardProps) {
  const { removeCartCoffees } = useContext(CartContext)

  return (
    <CoffeeOrderCardContainer>
      <img src={coffeeImg} alt="" />
      <CoffeeOrder>
        <span>{coffeeName}</span>
        <div>
          <AddQuantity
            size={2}
            quantity={quantity}
            name={coffeeName}
            coffeeImgSrc={coffeeImg}
          />
          <button onClick={() => removeCartCoffees(coffeeName)} type="button">
            <Trash size={16} color={defaultTheme.purple} /> Remover
          </button>
        </div>
      </CoffeeOrder>
      <strong>{formatPrice(price * quantity)}</strong>
    </CoffeeOrderCardContainer>
  )
}
