import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.header`
  z-index: 99999;

  position: fixed;
  top: 0;

  max-width: 1440px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 160px;

  background: ${(props) => props.theme.background};
  div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  & > a {
    height: 40px;
  }

  @media (max-width: 1240px) {
    padding: 24px 120px;

    & > a {
      height: 32px;

      & > img {
        height: 32px;
      }
    }
  }

  @media (max-width: 800px) {
    padding: 24px 40px;

    & > a {
      height: 32px;

      & > img {
        height: 32px;
      }
    }
  }
`

interface CartLinkProps {
  hasitemoncart: number
}

export const CartLink = styled(Link)<CartLinkProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 6px;

  padding: 0.5rem;
  background-color: ${(props) => props.theme['yellow-light']};

  &::after {
    content: '${(props) => String(props.hasitemoncart)}';
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;

    display: ${(props) => (props.hasitemoncart ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    border-radius: 999px;

    font-weight: 700;
    font-size: 0.75rem;
    line-height: 0.975rem;

    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 1240px) {
    svg {
      width: 1rem;
      height: 1rem;
    }
  }
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

  @media (max-width: 1240px) {
    font-size: 0.625rem;
    line-height: 1rem;

    svg {
      width: 1rem;
      height: 1rem;
    }
  }
`
