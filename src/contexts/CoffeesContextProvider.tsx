import { createContext, ReactNode, useEffect, useState } from 'react'
import coffeesDb from '../../coffees.json'

interface CoffeeProps {
  name: string
  tags: string[]
  quantity: number
  price: number
  coffeeSrc: string
  description: string
}

interface CoffeesContextProps {
  coffees: CoffeeProps[]
  updateCoffeesQuantity: (name: string, quantity: number) => void
}

export const CoffeesContext = createContext({} as CoffeesContextProps)

interface CoffeesContextProviderProps {
  children: ReactNode
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  useEffect(() => {
    setCoffees(
      coffeesDb.coffees.map((coffee) => {
        return { ...coffee, quantity: 0 }
      }),
    )
  }, [])

  function updateCoffeesQuantity(coffeeName: string, quantity: number) {
    setCoffees((state) =>
      state.map((coffee) => {
        if (coffeeName === coffee.name) {
          return { ...coffee, quantity }
        }
        return coffee
      }),
    )
  }

  return (
    <CoffeesContext.Provider value={{ coffees, updateCoffeesQuantity }}>
      {children}
    </CoffeesContext.Provider>
  )
}
