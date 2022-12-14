import styled from 'styled-components'

export const LayoutContainer = styled.div`
  position: relative;
  max-width: 90rem;
  margin: 0 auto;

  background-color: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
