import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;

  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }
`

export const CartLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  padding: 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};
`

export const UserLocale = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 0.875rem;
  line-height: 1.125rem;

  padding: 0.5rem;
  border-radius: 6px;
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
`
