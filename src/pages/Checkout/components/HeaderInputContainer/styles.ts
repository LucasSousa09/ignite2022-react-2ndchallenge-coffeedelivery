import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: top;
  gap: 8px;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    margin-top: 2px;

    font-size: 0.875rem;
    line-height: 1.125rem;

    color: ${(props) => props.theme['base-text']};
  }
`
