import styled from 'styled-components'

export const CoffeeOrderCardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  & > div {
    display: flex;
    gap: 20px;
  }

  div + & {
    padding-top: 24px;
    border-top: 1px solid ${(props) => props.theme['base-button']};
  }

  display: flex;

  img {
    width: 64px;
    height: 64px;
  }

  strong {
    font-size: 1rem;
    line-height: 1.3rem;

    white-space: nowrap;

    color: ${(props) => props.theme['base-text']};
  }

  @media (max-width: 600px) {
    & > div {
      gap: 16px;
    }

    div + & {
      padding-top: 12px;
    }

    img {
      width: 48px;
      height: 48px;
    }

    strong {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 414px) {
    img {
      width: 48px;
      height: 48px;
    }
  }
`

export const CoffeeOrder = styled.div`
  span {
    display: block;
    font-size: 1rem;
    line-height: 1.3rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  & > div {
    margin-top: 0.5rem;

    display: flex;
    align-items: center;
    gap: 8px;

    button:nth-child(2) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 4px;

      height: 2rem;
      padding: 0.41rem 0.5rem;

      border: none;
      border-radius: 6px;

      font-size: 0.75rem;

      color: ${(props) => props.theme['base-text']};
      background-color: ${(props) => props.theme['base-button']};

      transition: background-color 0.2s ease;
      text-transform: uppercase;

      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }
    }
  }

  @media (max-width: 600px) {
    span {
      font-size: 0.875rem;
    }

    & > div {
      button:nth-child(2) {
        height: 1.375rem;

        font-size: 0.625rem;

        svg {
          width: 0.875rem;
          height: 0.875rem;
        }
      }
    }
  }
`
