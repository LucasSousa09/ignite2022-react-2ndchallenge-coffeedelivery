import styled from 'styled-components'

export const PaymentContainer = styled.div`
  margin-top: 32px;

  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 24px;
    gap: 8px;
  }
`
