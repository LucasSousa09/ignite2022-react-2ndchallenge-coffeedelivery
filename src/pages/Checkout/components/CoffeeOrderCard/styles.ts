import styled from 'styled-components'

export const CoffeeOrderCardContainer = styled.div`
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
    margin-left: 50px;

    white-space: nowrap;

    color: ${(props) => props.theme['base-text']};
  }
`

export const CoffeeOrder = styled.div`
  margin-left: 20px;

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

      text-transform: uppercase;
    }
  }
`
