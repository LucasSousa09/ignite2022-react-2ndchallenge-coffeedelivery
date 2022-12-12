import { createContext, ReactNode, useEffect, useState } from 'react'
import coffeesDb from '../../coffees.json'

interface Coffee {
  name: string
  tags: string[]
  quantity: number
  coffeeSrc: string
  description: string
}

interface CartCoffee {
  name: string
  quantity: number
  coffeeImgSrc: string
}

interface CartContextProps {
  coffees: Coffee[]
  cart: CartCoffee[]
  updateCartCoffees: (props: CartCoffee) => void
  setAmountOfCoffies: (
    coffeeName: string,
    type: 'add' | 'remove' | 'typpedValue',
    typpedValue?: string,
  ) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContainerProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContainerProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const [cart, setCart] = useState<CartCoffee[]>([])

  useEffect(() => {
    setCoffees(
      coffeesDb.coffees.map((coffee) => {
        return { ...coffee, quantity: 0 }
      }),
    )
  }, [])

  function setAmountOfCoffies(
    coffeeName: string,
    type: 'add' | 'remove' | 'typpedValue',
    typpedValue?: string,
  ) {
    if (type === 'add') {
      setCoffees((state) => {
        return state.map((coffee) => {
          if (coffee.name === coffeeName) {
            return { ...coffee, quantity: coffee.quantity + 1 }
          }
          return coffee
        })
      })
    }
    if (type === 'remove') {
      setCoffees((state) => {
        return state.map((coffee) => {
          if (coffee.name === coffeeName && coffee.quantity > 0) {
            return { ...coffee, quantity: coffee.quantity - 1 }
          }
          return coffee
        })
      })
    }
    if (type === 'typpedValue') {
      setCoffees((state) => {
        return state.map((coffee) => {
          if (coffee.name === coffeeName && typpedValue) {
            return {
              ...coffee,
              quantity: isNaN(Number(typpedValue))
                ? coffee.quantity
                : Number(typpedValue),
            }
          }
          return coffee
        })
      })
    }
  }

  function updateCartCoffees(newCoffee: CartCoffee) {
    const hasCoffeeOnCart = cart.findIndex(
      (coffee) => coffee.name === newCoffee.name,
    )
    if (hasCoffeeOnCart === -1) {
      setCart([...cart, newCoffee])
    } else {
      setCart((state) => {
        return state.map((coffee) => {
          if (coffee.name === newCoffee.name) {
            return { ...coffee, quantity: newCoffee.quantity }
          }
          return coffee
        })
      })
    }
  }

  return (
    <CartContext.Provider
      value={{ coffees, setAmountOfCoffies, updateCartCoffees, cart }}
    >
      {children}
    </CartContext.Provider>
  )
}
