import {
  MapPinLine,
  CurrencyDollar,
  Money,
  Bank,
  CreditCard,
} from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'

import { defaultTheme } from '../../styles/theme/default'
import { formatPrice } from '../../utils/formatPrice'
import { CoffeeOrderCard } from './components/CoffeeOrderCard'

import {
  AddressContainer,
  InputContainer,
  CepInput,
  StreetInput,
  NumberInput,
  ComplementInput,
  DistrictInput,
  CityInput,
  UfInput,
  CheckoutContainer,
  PaymentContainer,
  PaymentType,
  PaymentConfirmation,
  OrderConfirmationButton,
} from './styles'

export function Checkout() {
  const { cart } = useContext(CartContext)

  const totalOfItemsPrice = cart.reduce(
    (acc, coffee) => acc + coffee.price * coffee.quantity,
    0,
  )

  const shipmentTax = 3.5

  const totalBiling = shipmentTax + totalOfItemsPrice

  return (
    <CheckoutContainer>
      <form>
        <div>
          <h2>Complete seu pedido</h2>
          <InputContainer>
            <header>
              <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
              <div>
                <h3>Endereço de entrega</h3>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </header>

            <AddressContainer>
              <CepInput id="cep" type="text" placeholder="CEP" required />
              <StreetInput
                className="street"
                type="text"
                placeholder="Rua"
                required
              />
              <NumberInput
                className="number"
                type="number"
                placeholder="Número"
                required
              />
              <ComplementInput
                className="complement"
                type="text"
                placeholder="Complemento"
              />
              <DistrictInput
                className="district"
                type="text"
                placeholder="Bairro"
                required
              />
              <CityInput
                className="city"
                type="text"
                placeholder="Cidade"
                required
              />
              <UfInput className="uf" type="text" placeholder="UF" required />
            </AddressContainer>
          </InputContainer>

          <InputContainer>
            <header>
              <CurrencyDollar size={22} color={defaultTheme.purple} />
              <div>
                <h3>Pagamento</h3>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </header>

            <PaymentContainer>
              <input
                type="radio"
                name="payment-type"
                id="credit-card"
                value="credit-card"
              />
              <PaymentType htmlFor="credit-card">
                <CreditCard size={16} color={defaultTheme.purple} />
                Cartão de Crédito
              </PaymentType>

              <input
                type="radio"
                name="payment-type"
                id="debit-card"
                value="debit-card"
              />
              <PaymentType htmlFor="debit-card">
                <Bank size={16} color={defaultTheme.purple} />
                Cartão de Débito
              </PaymentType>

              <input
                type="radio"
                name="payment-type"
                id="money"
                value="money"
              />
              <PaymentType htmlFor="money">
                <Money size={16} color={defaultTheme.purple} />
                Dinheiro
              </PaymentType>
            </PaymentContainer>
          </InputContainer>
        </div>

        <div>
          <h2>Cafés selecionados</h2>
          <InputContainer coffeeOrder>
            {cart.map((coffee) => {
              return (
                <CoffeeOrderCard
                  key={coffee.name}
                  price={coffee.price}
                  quantity={coffee.quantity}
                  coffeeImg={coffee.coffeeImgSrc}
                  coffeeName={coffee.name}
                />
              )
            })}
            <PaymentConfirmation>
              <div>
                <span>Total de itens</span>
                <span>{formatPrice(totalOfItemsPrice)}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>
                  {!totalOfItemsPrice
                    ? formatPrice(0)
                    : formatPrice(shipmentTax)}
                </span>
              </div>
              <div>
                <strong>Total</strong>
                <strong>
                  {!totalOfItemsPrice
                    ? formatPrice(0)
                    : formatPrice(totalBiling)}
                </strong>
              </div>
            </PaymentConfirmation>
            <OrderConfirmationButton
              disabled={!totalOfItemsPrice}
              type="submit"
            >
              Confirmar Pedido
            </OrderConfirmationButton>
          </InputContainer>
        </div>
      </form>
    </CheckoutContainer>
  )
}
