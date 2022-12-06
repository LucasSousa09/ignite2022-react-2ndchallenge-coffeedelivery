import styled from 'styled-components'

interface AddQuantityProps {
  size: number
}

export const AddQuantityContainer = styled.div<AddQuantityProps>`
  display: flex;
  align-items: center;

  button,
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

  button:first-of-type {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }

  button:last-of-type {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`
