import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContextProvider'
import { CoffeesContextProvider } from './contexts/CoffeesContextProvider'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CoffeesContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartContextProvider>
      </CoffeesContextProvider>
    </ThemeProvider>
  )
}
