import styled from 'styled-components'

export const MainContainer = styled.main`
  padding: 80px 160px;
  display: flex;

  gap: 102px;
`

export const DeliveryContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 2.6rem;

    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

const BaseContainer = styled.div`
  display: flex;
  justify-content: center;

  border-radius: 6px 36px 6px 36px;
`

export const LinearBackground = styled(BaseContainer)`
  margin-top: 40px;
  padding: 1px;

  background: linear-gradient(45deg, #dbac2c, #8047f8);
`

export const DeliveryInfoContainer = styled(BaseContainer)`
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  padding: 40px;

  background-color: white;
`

export const ImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`
