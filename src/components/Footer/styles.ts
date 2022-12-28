import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  padding: 24px 0 48px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: 'Baloo 2';

  strong {
    margin-top: 24px;

    font-size: 20px;
    line-height: 31.2px;

    color: #5f5f73;
  }

  a {
    margin-top: 16px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    text-decoration: none;
    text-align: center;

    font-size: 18px;
    line-height: 23px;

    color: #7e7e99;

    transition: filter 0.2s ease;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const Separator = styled.span`
  width: 80%;
  height: 2px;

  background-color: ${(props) => props.theme['purple-light']};
`
