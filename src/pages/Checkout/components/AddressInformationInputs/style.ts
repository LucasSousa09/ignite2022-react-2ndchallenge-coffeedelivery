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
        no-repeat right 72%;
      background-origin: content-box;
    }
  }

  @media (max-width: 800px) {
    grid-template-areas:
      'cep cep cep'
      'street street street'
      'number complement complement'
      'district district uf'
      'city city city';
  }

  @media (max-width: 400px) {
    input {
      &:not(:required) {
        background-image: none;
      }
    }
  }
`

export const ZipCodeInput = styled.input`
  min-width: 0;
  max-width: 200px;

  grid-area: cep;

  @media (min-width: 1240px) {
    max-width: 200px;
  }
`

export const StreetInput = styled.input`
  min-width: 0;
  grid-area: street;
`

export const NumberInput = styled.input`
  min-width: 0;
  grid-area: number;

  @media (min-width: 1240px) {
    max-width: 200px;
  }
`

export const ComplementInput = styled.input`
  min-width: 0;
  grid-area: complement;
`

export const DistrictInput = styled.input`
  min-width: 0;
  grid-area: district;

  @media (min-width: 1240px) {
    max-width: 200px;
  }
`

export const CityInput = styled.input`
  min-width: 0;
  grid-area: city;
`

export const UfInput = styled.input`
  min-width: 0;
  max-width: 60px;
  grid-area: uf;
`
