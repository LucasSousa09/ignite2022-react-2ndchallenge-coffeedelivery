import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
  padding: 0 20px 20px;
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -20px;
  }

  span {
    display: inline-block;
    margin-top: 12px;
    padding: 4px 8px;

    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};

    border-radius: 100px;

    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.8125rem;

    text-transform: uppercase;
  }

  strong {
    margin-top: 16px;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Baloo 2';

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 8px;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.125rem;

    color: ${(props) => props.theme['base-label']};
  }
`

export const AddQuantityToCartContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;

  width: 100%;

  span {
    flex: 1;
    font-size: 0.875rem;
    line-height: 1.125rem;
    color: ${(props) => props.theme['base-text']};

    strong {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2';
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }
`

export const AddToCartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 8px;

  border-radius: 6px;

  width: 2.375rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['purple-dark']};
`
