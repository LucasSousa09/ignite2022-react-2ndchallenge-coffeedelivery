import styled from 'styled-components'

interface AddQuantityProps {
  size: number
}

export const AddQuantityContainer = styled.div<AddQuantityProps>`
  display: flex;
  align-items: center;

  & > button:first-of-type,
  & > button:nth-child(3),
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid transparent;

    height: ${(props) => props.size}rem;
    width: 1.5rem;
    background-color: ${(props) => props.theme['base-button']};

    &:focus {
      box-shadow: none;
      border-color: ${(props) => props.theme.purple};
    }
  }

  & > button:first-of-type,
  & > button:nth-child(3) {
    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  input {
    color: ${(props) => props.theme['base-title']};
    text-align: center;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  button {
    color: ${(props) => props.theme.purple};
  }

  & > button:first-of-type {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  & > button:nth-child(3) {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  @media (max-width: 1240px) {
    margin-left: 8px;

    & > button:first-of-type,
    & > button:nth-child(3),
    input {
      height: 2rem;
    }
  }

  @media (max-width: 800px) {
    & > button:first-of-type,
    & > button:nth-child(3),
    input {
      font-size: 0.625rem;

      width: 1.125rem;
      height: 1.375rem;

      svg {
        width: 0.625rem;
        height: 0.625rem;
      }
    }
  }
`

export const AddToCartButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 8px;

  border-radius: 6px;

  width: 2.375rem;
  height: 2.375rem;

  background-color: ${(props) => props.theme['purple-dark']};
  border: none;

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${(props) => props.theme.purple};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  @media (max-width: 1240px) {
    width: 2rem;
    height: 2rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }

  @media (max-width: 800px) {
    width: 1.375rem;
    height: 1.375rem;

    svg {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`
