import styled from 'styled-components'

export const HiddenRadioButton = styled.input.attrs({ type: 'radio' })`
  display: none;
`

export const PaymentType = styled.label`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 16px;

  font-size: 0.75rem;
  line-height: 1.2rem;

  border-radius: 6px;

  color: ${(props) => props.theme['base-text']};
  background-color: ${(props) => props.theme['base-button']};

  text-transform: uppercase;

  transition: background-color 0.2s ease;

  ${HiddenRadioButton}:checked + && {
    outline: 1px solid ${(props) => props.theme.purple};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
  }
`
