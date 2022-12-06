import styled from 'styled-components'
import bgImg from '../../assets/background-image.png'

export const MainContainer = styled.main`
  display: flex;
  padding: 5.75rem 160px;
  gap: 3.5rem;

  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  & > div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 3.875rem;

    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};

    font-size: 1.25rem;
    line-height: 1.625rem;
  }
`

export const SnippetsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  column-gap: 40px;

  margin-top: 4.125rem;
`

export const CoffesContainer = styled.div`
  padding: 32px 160px;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 2rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 2.625rem;
  }
`

export const CoffeCardsContainer = styled.div`
  margin-top: 54px;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  row-gap: 40px;
  column-gap: 32px;
`
