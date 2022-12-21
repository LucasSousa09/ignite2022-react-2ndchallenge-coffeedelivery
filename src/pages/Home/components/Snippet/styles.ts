import styled from 'styled-components'

interface SnippetsProps {
  iconContainerBgColor: string
}

export const SnippetStyle = styled.div<SnippetsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-size: 12px;
  line-height: 16px;

  svg {
    width: 12px;
    height: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) => props.iconContainerBgColor};
  }

  span {
    flex: 1;
    color: ${(props) => props.theme['base-text']};
    white-space: nowrap;
  }

  @media (min-width: 1240px) {
    font-size: 16px;
    line-height: 1.3rem;
    svg {
      width: 16px;
      height: 16px;
    }
  }
`
