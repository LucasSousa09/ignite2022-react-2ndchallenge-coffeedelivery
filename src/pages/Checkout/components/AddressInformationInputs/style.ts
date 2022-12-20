import styled from 'styled-components'

export const Container = styled.div`
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

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
      box-shadow: none;
    }

    &:not(:required) {
      background: ${(props) => props.theme['base-input']} url('/optional.svg')
        no-repeat right;
      background-origin: content-box;
    }
  }
`

export const ZipCodeInput = styled.input`
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
