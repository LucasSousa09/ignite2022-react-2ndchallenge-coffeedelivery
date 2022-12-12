import { ShoppingCart, MapPin } from 'phosphor-react'

import { HeaderContainer, UserLocale, CartLink } from './styles'

import logoImg from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/theme/default'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logoImg} alt="" />
      </Link>
      <div>
        <UserLocale>
          <MapPin weight="fill" size={20} color={defaultTheme.purple} />
          Porto Alegre, RS
        </UserLocale>
        <CartLink to="/checkout">
          <ShoppingCart
            weight="fill"
            size={19}
            color={defaultTheme['yellow-dark']}
          />
        </CartLink>
      </div>
    </HeaderContainer>
  )
}
