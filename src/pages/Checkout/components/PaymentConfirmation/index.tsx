import { PaymentConfirmationContainer } from './styles'
import { formatPrice } from '../../../../utils/formatPrice'
import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContextProvider'

export function PaymentConfirmation() {
  const { cart } = useContext(CartContext)

  const totalOfItemsPrice = cart.reduce(
    (acc, coffee) => acc + coffee.price * coffee.quantity,
    0,
  )

  const shipmentTax = 3.5

  const totalBiling = shipmentTax + totalOfItemsPrice

  return (
    <PaymentConfirmationContainer>
      <div>
        <span>Total de itens</span>
        <span>{formatPrice(totalOfItemsPrice)}</span>
      </div>

      <div>
        <span>Entrega</span>
        <span>
          {!totalOfItemsPrice ? formatPrice(0) : formatPrice(shipmentTax)}
        </span>
      </div>

      <div>
        <strong>Total</strong>
        <strong>
          {!totalOfItemsPrice ? formatPrice(0) : formatPrice(totalBiling)}
        </strong>
      </div>
    </PaymentConfirmationContainer>
  )
}
