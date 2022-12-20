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
