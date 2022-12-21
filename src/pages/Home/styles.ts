import styled from 'styled-components'
import bgImg from '../../assets/background-image.png'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainContainer = styled.main`
  margin-top: 104px;
  margin-bottom: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 3.5rem;

  background-image: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  & > div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: 800;
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-title']};
  }

  p {
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: 1240px) {
    padding: 42px 84px;

    & > div {
      max-width: 425px;
    }

    h1 {
      font-size: 2rem;
      line-height: 2.6rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.3rem;
    }

    & > img {
      width: 328px;
      object-fit: contain;
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    position: relative;

    img {
      position: absolute;
      z-index: 0;

      opacity: 0.2;

      top: 50%;
      right: 50%;
      transform: translate(50%, -72%);
    }

    & > div {
      z-index: 999;
      max-width: 245px;

      & > div:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          text-align: center;
          font-size: 1.5rem;
          line-height: 1.93rem;
        }

        p {
          text-align: center;
          font-size: 0.75rem;
          line-height: 1rem;

          max-width: 204px;
        }
      }
    }
  }

  @media (min-width: 1240px) {
    padding: 5.875rem 10rem;

    & > div {
      width: 588px;
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
  }
`

export const SnippetsContainer = styled.div`
  margin-top: 50px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 12px;
  column-gap: 22px;

  @media (max-width: 1000px) {
    margin-top: 84px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  @media (min-width: 1440px) {
    margin-top: 4.125rem;

    row-gap: 20px;
    column-gap: 40px;
  }
`

export const CoffesContainer = styled.div`
  display: inline-block;

  h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.4rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 2.625rem;

    text-align: left;
  }

  @media (max-width: 800px) {
    h2 {
      text-align: center;
    }
  }
`

export const CoffeCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  row-gap: 40px;
  column-gap: 32px;

  @media (max-width: 1412px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 800px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 16px;
  }

  margin-top: 54px;
`
