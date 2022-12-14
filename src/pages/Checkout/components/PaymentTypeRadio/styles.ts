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
    background-color: ${(props) => props.theme['purple-light']};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme['base-hover']};
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 8px;
    padding: 12px;

    text-align: center;
  }

  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
    font-size: 0.625rem;
  }
`
