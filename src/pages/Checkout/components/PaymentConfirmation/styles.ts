import styled from 'styled-components'

export const PaymentConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  div + & {
    padding-top: 24px;
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      line-height: 1.125rem;

      color: ${(props) => props.theme['base-text']};
    }

    span + span {
      font-size: 1rem;
      line-height: 1.3rem;
    }

    strong {
      font-size: 1.25rem;
      line-height: 1.625rem;

      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
