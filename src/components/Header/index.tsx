import { ShoppingCart, MapPin } from 'phosphor-react'

import { HeaderContainer, UserLocale, CartLink } from './styles'

import logoImg from '../../assets/logo.svg'
import { defaultTheme } from '../../styles/theme/default'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
      <div>
        <UserLocale>
          <MapPin weight="fill" size={20} color={defaultTheme.purple} />
          Porto Alegre, RS
        </UserLocale>
        <CartLink href="#">
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
