import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { ShipmentContext } from '../../contexts/ShipingContextProvider'

import { DeliverySnippet } from './components/DeliverySnippet'

import {
  MainContainer,
  DeliveryContainer,
  DeliveryInfoContainer,
  LinearBackground,
  ImageContainer,
} from './styles'

import { defaultTheme } from '../../styles/theme/default'

import ilustrationImg from '../../assets/illustration.svg'

export function SuccessTransaction() {
  const { shipingData } = useContext(ShipmentContext)

  return (
    <MainContainer>
      <DeliveryContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <LinearBackground>
          <DeliveryInfoContainer>
            <DeliverySnippet
              iconBgColor={defaultTheme.purple}
              text={`Entrega em ${shipingData.city}, ${shipingData.state}`}
              highlightedText={`Rua ${shipingData.street}, ${shipingData.houseNumber}`}
            >
              <MapPin color={defaultTheme.white} size={16} weight="fill" />
            </DeliverySnippet>

            <DeliverySnippet
              iconBgColor={defaultTheme.yellow}
              text="Previsão de entrega"
              highlightedText="20 min - 30 min"
            >
              <Timer color={defaultTheme.white} size={16} weight="fill" />
            </DeliverySnippet>

            <DeliverySnippet
              iconBgColor={defaultTheme['yellow-dark']}
              text="Pagamento na entrega"
              highlightedText={`
                ${
                  shipingData.paymentType === 'credit-card'
                    ? 'Cartão de crédito'
                    : ''
                }
                ${
                  shipingData.paymentType === 'debit-card'
                    ? 'Cartão de Débito'
                    : ''
                }
                ${shipingData.paymentType === 'money' ? 'Dinheiro' : ''}
              `}
            >
              <CurrencyDollar
                color={defaultTheme.white}
                size={16}
                weight="fill"
              />
            </DeliverySnippet>
          </DeliveryInfoContainer>
        </LinearBackground>
      </DeliveryContainer>
      <ImageContainer>
        <img
          src={ilustrationImg}
          alt="Entregador de café numa moto levando o café para o cliente"
        />
      </ImageContainer>
    </MainContainer>
  )
}
