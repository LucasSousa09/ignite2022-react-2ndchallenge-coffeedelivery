import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'
import { CartContextProvider } from './contexts/CartContextProvider'
import { CoffeesContextProvider } from './contexts/CoffeesContextProvider'
import { ShipmentContextProvider } from './contexts/ShipingContextProvider'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <CoffeesContextProvider>
        <CartContextProvider>
          <ShipmentContextProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </ShipmentContextProvider>
        </CartContextProvider>
      </CoffeesContextProvider>
    </ThemeProvider>
  )
}
