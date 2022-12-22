import styled from 'styled-components'

interface DeliverySnippetProps {
  iconBgColor: string
}

export const DeliverySnippetContainer = styled.div<DeliverySnippetProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  div:first-child {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;

    border-radius: 999px;
    background-color: ${(props) => props.iconBgColor};
  }

  div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      font-size: 1rem;
      line-height: 1.3rem;
      color: ${(props) => props.theme['base-text']};
    }

    strong {
      font-size: 1rem;
      font-weight: 700;
      line-height: 1.3rem;
      color: ${(props) => props.theme['base-text']};
    }

    @media (max-width: 1240px) {
      span {
        font-size: 0.875rem;
      }
      strong {
        font-size: 0.875rem;
      }
    }
  }
`
