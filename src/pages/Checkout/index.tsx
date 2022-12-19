import { MapPinLine, CurrencyDollar } from 'phosphor-react'
import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'

import { CoffeeOrderCard } from './components/CoffeeOrderCard'
import { PaymentTypeRadio } from './components/PaymentTypeRadio'
import { PaymentConfirmation } from './components/PaymentConfirmation'

import { defaultTheme } from '../../styles/theme/default'

import {
  AddressContainer,
  InputContainer,
  ZipCodeInput,
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
import { ShipmentContext } from '../../contexts/ShipingContextProvider'

const ShipmentFormSchema = zod.object({
  city: zod.string().min(3, 'A cidade precisa ter no minímo 3 caracteres'),
  complement: zod
    .string()
    .max(6, 'O complemento deve ter no máximo 6 caracteres'),
  district: zod.string().min(3, 'O bairro deve ter no minímo 3 caracteres'),
  houseNumber: zod
    .number()
    .min(0, 'O número da casa não deve ser menor que zero'),
  paymentType: zod.enum(['credit-card', 'debit-card', 'money']),
  state: zod
    .string()
    .min(2, 'A UF deve ter no mínimo 2 caracteres')
    .max(2, 'A UF deve ter no máximo 2 caracteres'),
  street: zod.string().min(3, 'A rua deve ter no minímo 3 caracteres'),
  zipCode: zod
    .string()
    .min(8, 'O CEP deve ter no mínimo 8 números')
    .max(8, 'O CEP deve ter no máximo 8 números'),
})

export type ShipingFormData = zod.infer<typeof ShipmentFormSchema>

type RadioButtonRegisteredName = 'credit-card' | 'debit-card' | 'money'

export function Checkout() {
  const { cart } = useContext(CartContext)
  const { setShipingInformation } = useContext(ShipmentContext)

  const { register, handleSubmit } = useForm<ShipingFormData>({
    resolver: zodResolver(ShipmentFormSchema),
  })

  const navigate = useNavigate()

  const [checkedButton, setCheckedButton] =
    useState<RadioButtonRegisteredName>('credit-card')

  function handleCheckRadioButton(registeredName: RadioButtonRegisteredName) {
    setCheckedButton(registeredName)
  }

  function handleSentShipmentAddress(data: ShipingFormData) {
    if (cart.length > 0) {
      setShipingInformation(data)
      navigate('/success-transaction')
    } else {
      console.log(
        'Seu carrinho está vazio, adicione pelo menos um café antes de concluir a compra',
      )
    }
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
              <ZipCodeInput
                type="text"
                placeholder="CEP"
                required
                {...register('zipCode')}
              />

              <StreetInput
                type="text"
                placeholder="Rua"
                className="street"
                required
                {...register('street')}
              />

              <NumberInput
                type="number"
                placeholder="Número"
                className="number"
                required
                {...register('houseNumber', { valueAsNumber: true })}
              />

              <ComplementInput
                type="text"
                placeholder="Complemento"
                className="complement"
                {...register('complement')}
              />

              <DistrictInput
                type="text"
                placeholder="Bairro"
                className="district"
                required
                {...register('district')}
              />

              <CityInput
                type="text"
                placeholder="Cidade"
                className="city"
                required
                {...register('city')}
              />

              <UfInput
                type="text"
                placeholder="UF"
                className="uf"
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
                register={register}
              />

              <PaymentTypeRadio
                handleCheckRadioButton={handleCheckRadioButton}
                id="debit-card"
                value="debit-card"
                checkedButton={checkedButton}
                register={register}
              />

              <PaymentTypeRadio
                handleCheckRadioButton={handleCheckRadioButton}
                id="money"
                value="money"
                checkedButton={checkedButton}
                register={register}
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
