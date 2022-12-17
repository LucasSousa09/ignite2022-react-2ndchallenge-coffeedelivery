import { Link } from 'react-router-dom'
import { ShoppingCart, MapPin } from 'phosphor-react'

import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContextProvider'

import logoImg from '../../assets/logo.svg'

import { defaultTheme } from '../../styles/theme/default'
import { HeaderContainer, UserLocale, CartLink } from './styles'

export function Header() {
  const { cart } = useContext(CartContext)

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
        <CartLink
          to="/checkout"
          hasitemoncart={cart.length > 0 ? cart.length : 0}
        >
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
