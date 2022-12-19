import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'

import { CoffeeOrderCard } from './components/CoffeeOrderCard'
import { PaymentTypeRadio } from './components/PaymentTypeRadio'
import { PaymentConfirmation } from './components/PaymentConfirmation'

import { defaultTheme } from '../../styles/theme/default'

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
  OrderConfirmationButton,
} from './styles'

export function Checkout() {
  const { cart } = useContext(CartContext)
  const { register, handleSubmit } = useForm()

  const [checkedButton, setCheckedButton] = useState('credit-card')

  function handleCheckRadioButton(registeredName: string) {
    setCheckedButton(registeredName)
  }

  function handleSentShipmentAddress(data: any) {
    console.log(data)
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleSentShipmentAddress)}>
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
              <CepInput
                id="cep"
                type="text"
                placeholder="CEP"
                required
                {...register('zipCode')}
              />

              <StreetInput
                className="street"
                type="text"
                placeholder="Rua"
                required
                {...register('street')}
              />

              <NumberInput
                className="number"
                type="number"
                placeholder="Número"
                required
                {...register('houseNumber', { valueAsNumber: true })}
              />

              <ComplementInput
                className="complement"
                type="text"
                placeholder="Complemento"
                {...register('complement')}
              />

              <DistrictInput
                className="district"
                type="text"
                placeholder="Bairro"
                required
                {...register('district')}
              />

              <CityInput
                className="city"
                type="text"
                placeholder="Cidade"
                required
                {...register('city')}
              />

              <UfInput
                className="uf"
                type="text"
                placeholder="UF"
                required
                {...register('state')}
              />
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
              <PaymentTypeRadio
                handleCheckRadioButton={handleCheckRadioButton}
                id="credit-card"
                value="credit-card"
                checkedButton={checkedButton}
              />

              <PaymentTypeRadio
                handleCheckRadioButton={handleCheckRadioButton}
                id="debit-card"
                value="debit-card"
                checkedButton={checkedButton}
              />

              <PaymentTypeRadio
                handleCheckRadioButton={handleCheckRadioButton}
                id="money"
                value="money"
                checkedButton={checkedButton}
              />
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

            <PaymentConfirmation />

            <OrderConfirmationButton type="submit">
              Confirmar Pedido
            </OrderConfirmationButton>
          </InputContainer>
        </div>
      </form>
    </CheckoutContainer>
  )
}
