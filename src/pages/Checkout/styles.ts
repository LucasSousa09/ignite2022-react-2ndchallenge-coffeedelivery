import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  padding: 40px 160px;

  form {
    display: flex;
    align-items: top;
    gap: 32px;
  }

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    line-height: 1.4625rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

interface InputContainerProps {
  coffeeOrder?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.coffeeOrder ? 1.5 : 0)}rem;

  margin-top: 15px;
  padding: 2.5rem;

  border-radius: ${(props) =>
    props.coffeeOrder ? '6px 36px 6px 36px' : '6px'};

  background-color: ${(props) => props.theme['base-card']};

  header {
    display: flex;
    align-items: top;
    gap: 8px;

    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.3rem;

      color: ${(props) => props.theme['base-subtitle']};
    }

    span {
      margin-top: 2px;

      font-size: 0.875rem;
      line-height: 1.125rem;

      color: ${(props) => props.theme['base-text']};
    }
  }
`

export const AddressContainer = styled.div`
  margin-top: 32px;

  display: grid;
  row-gap: 16px;
  column-gap: 12px;

  grid-template-areas:
    'cep cep cep'
    'street street street'
    'number complement complement'
    'district city uf';

  input {
    padding: 12px;

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-input']};

    &::placeholder {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
    }

    &:not(:required) {
      background: ${(props) => props.theme['base-input']} url('/optional.svg')
        no-repeat right;
      background-origin: content-box;
    }
  }
`

export const CepInput = styled.input`
  max-width: 200px;
  grid-area: cep;
`

export const StreetInput = styled.input`
  grid-area: street;
`

export const NumberInput = styled.input`
  max-width: 200px;
  grid-area: number;
`

export const ComplementInput = styled.input`
  grid-area: complement;
`

export const DistrictInput = styled.input`
  max-width: 200px;
  grid-area: district;
`

export const CityInput = styled.input`
  grid-area: city;
`

export const UfInput = styled.input`
  max-width: 60px;
  grid-area: uf;
`

export const PaymentContainer = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
`

export const OrderConfirmationButton = styled.button`
  padding: 12px 24px;

  border: 0;
  border-radius: 6px;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.375rem;

  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme.yellow};

  text-transform: uppercase;

  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
