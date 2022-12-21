import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  max-width: 256px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  border-top-left-radius: 6px;
  border-bottom-right-radius: 6px;

  background-color: ${(props) => props.theme['base-card']};
  padding: 0 20px 20px;

  @media (max-width: 1240px) {
    max-width: 218px;

    border-top-right-radius: 29px;
    border-bottom-left-radius: 29px;

    border-top-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  @media (max-width: 800px) {
    padding: 0 12px 12px;
    max-width: 160px;

    border-top-right-radius: 21.5px;
    border-bottom-left-radius: 21.5px;

    border-top-left-radius: 3.6px;
    border-bottom-right-radius: 3.6px;
  }
`

export const CoffeeDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -20px;
  }

  span {
    display: inline-block;
    margin-top: 12px;
    padding: 4px 8px;

    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};

    border-radius: 100px;

    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.8125rem;

    text-transform: uppercase;

    & + span {
      margin-left: 4px;
    }
  }

  strong {
    margin-top: 16px;
    font-size: 1.25rem;
    font-weight: 700;
    font-family: 'Baloo 2';

    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    margin-top: 8px;
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.125rem;

    color: ${(props) => props.theme['base-label']};
  }

  @media (max-width: 1240px) {
    img {
      width: 98px;
      height: 98px;
    }

    span {
      margin-top: 0.65rem;
      font-size: 0.6rem;
      line-height: 0.65rem;
    }

    strong {
      font-size: 1.1rem;
      line-height: 1.4rem;
    }

    p {
      font-size: 0.7rem;
      line-height: 0.9rem;
    }
  }

  @media (max-width: 800px) {
    img {
      width: 72px;
      height: 72px;
    }

    span {
      font-size: 0.5rem;
      line-height: 0.6rem;
    }

    strong {
      margin-top: 0.75rem;
      font-size: 0.825rem;
      line-height: 1rem;
    }

    p {
      font-size: 0.625rem;
    }

    & > div {
      display: flex;
      justify-content: center;
      width: 136px;
      padding: 0 12px;
      white-space: nowrap;
      overflow-x: scroll;

      -ms-overflow-style: none;
      scrollbar-width: none;

      & > .giveMarginLeft:first-of-type {
        margin-left: 28px;
      }
    }

    & > div::-webkit-scrollbar {
      display: none;
    }
  }
`

export const AddQuantityToCartContainer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;

  width: 100%;

  span {
    flex: 1;
    color: ${(props) => props.theme['base-text']};

    strong {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2';
    }
  }

  & > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 1240px) {
    margin-top: 1.3rem;

    span {
      strong {
        font-size: 1rem;
      }
    }
  }

  @media (max-width: 800px) {
    span {
      strong {
        font-size: 0.825rem;
      }
    }
  }
`
