import styled from 'styled-components'

export const CheckoutContainer = styled.main`
  margin-top: 104px;
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

  @media (max-width: 1440px) {
    margin-top: 80px;
  }

  @media (max-width: 1240px) {
    padding: 40px 120px;
  }

  @media (max-width: 1000px) {
    padding: 40px 12px;
  }

  @media (max-width: 800px) {
    padding: 40px;
    form {
      flex-direction: column;
    }
  }
`

interface InputContainerProps {
  coffeeOrder?: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  margin: 15px auto 0;
  padding: 40px;

  display: flex;
  flex-direction: column;

  width: ${(props) => (props.coffeeOrder ? '448px' : '640px')};
  gap: ${(props) => (props.coffeeOrder ? 1.5 : 0)}rem;

  border-radius: ${(props) =>
    props.coffeeOrder ? '6px 36px 6px 36px' : '6px'};

  background-color: ${(props) => props.theme['base-card']};

  @media (max-width: 1440px) {
    width: auto;
  }

  @media (max-width: 1200px) {
    min-width: 420px;
  }

  @media (max-width: 900px) {
    min-width: 370px;
  }

  @media (max-width: 600px) {
    gap: ${(props) => (props.coffeeOrder ? 0.75 : 0)}rem;
    padding: 24px 16px;
  }
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
