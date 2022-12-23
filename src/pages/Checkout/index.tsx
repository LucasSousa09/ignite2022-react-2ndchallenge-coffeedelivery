import * as zod from 'zod'
import { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import { MapPinLine, CurrencyDollar } from 'phosphor-react'

import { CartContext } from '../../contexts/CartContextProvider'

import { CoffeeOrderCard } from './components/CoffeeOrderCard'
import { PaymentConfirmation } from './components/PaymentConfirmation'
import { AddressInformationInputs } from './components/AddressInformationInputs'

import { defaultTheme } from '../../styles/theme/default'

import {
  InputContainer,
  CheckoutContainer,
  OrderConfirmationButton,
} from './styles'

import { ShipmentContext } from '../../contexts/ShipingContextProvider'

import { HeaderInputContainer } from './components/HeaderInputContainer'
import { PaymentTypeContainer } from './components/PaymentTypeContainer'

const ShipmentFormSchema = zod.object({
  zipCode: zod
    .string()
    .min(8, 'O CEP deve ter no mínimo 8 números')
    .max(8, 'O CEP deve ter no máximo 8 números'),
  street: zod.string().min(3, 'A rua deve ter no minímo 3 caracteres'),
  houseNumber: zod
    .number()
    .min(0, 'O número da casa não deve ser menor que zero'),
  complement: zod
    .string()
    .max(6, 'O complemento deve ter no máximo 6 caracteres'),
  district: zod.string().min(3, 'O bairro deve ter no minímo 3 caracteres'),
  city: zod.string().min(3, 'A cidade precisa ter no minímo 3 caracteres'),
  state: zod
    .string()
    .min(2, 'A UF deve ter no mínimo 2 caracteres')
    .max(2, 'A UF deve ter no máximo 2 caracteres'),
  paymentType: zod.enum(['credit-card', 'debit-card', 'money']),
})

export type ShipingFormData = zod.infer<typeof ShipmentFormSchema>

export function Checkout() {
  const { cart } = useContext(CartContext)
  const { setShipingInformation } = useContext(ShipmentContext)

  const { register, handleSubmit, formState } = useForm<ShipingFormData>({
    resolver: zodResolver(ShipmentFormSchema),
  })

  useEffect(() => {
    const numberOfErrors = Object.keys(formState.errors).length
    if (numberOfErrors > 0) {
      for (let nOE = 0; nOE < numberOfErrors; nOE++) {
        const message = Object.entries(formState.errors)[nOE]
        toast.error(message[1].message)
      }
    }
  }, [formState.errors])

  const navigate = useNavigate()

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
      <ToastContainer position="top-left" theme="colored" />

      <form onSubmit={handleSubmit(handleSentShipmentAddress)}>
        <div>
          <h2>Complete seu pedido</h2>

          <InputContainer>
            <HeaderInputContainer
              title="Endereço de entrega"
              description="Informe o endereço onde deseja receber seu pedido"
            >
              <MapPinLine size={22} color={defaultTheme['yellow-dark']} />
            </HeaderInputContainer>

            <AddressInformationInputs register={register} />
          </InputContainer>

          <InputContainer>
            <HeaderInputContainer
              title="Pagamento"
              description="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
            >
              <CurrencyDollar size={22} color={defaultTheme.purple} />
            </HeaderInputContainer>

            <PaymentTypeContainer register={register} />
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
