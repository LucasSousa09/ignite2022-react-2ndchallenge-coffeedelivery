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
`
