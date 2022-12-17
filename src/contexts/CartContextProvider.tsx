import { createContext, ReactNode, useState } from 'react'

interface CartCoffee {
  name: string
  price: number
  quantity: number
  coffeeImgSrc: string
}

interface updateCoffeeQuantityProps {
  name: string
  quantity: number
}

interface CartContextProps {
  cart: CartCoffee[]
  addCoffeeToCart: (props: CartCoffee) => void
  updateCartCoffees: (props: updateCoffeeQuantityProps) => void
  removeCartCoffees: (coffeeName: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContainerProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContainerProviderProps) {
  const [cart, setCart] = useState<CartCoffee[]>([])

  function addCoffeeToCart({
    name,
    price,
    quantity,
    coffeeImgSrc,
  }: CartCoffee) {
    const hasCoffeeOnCartIndex = cart.findIndex(
      (coffee) => coffee.name === name,
    )
    if (hasCoffeeOnCartIndex === -1) {
      setCart([...cart, { name, price, quantity, coffeeImgSrc }])
    }
  }

  function updateCartCoffees({ name, quantity }: updateCoffeeQuantityProps) {
    setCart((state) => {
      return state.map((coffee) => {
        if (coffee.name === name) {
          return { ...coffee, quantity }
        }
        return coffee
      })
    })
  }

  function removeCartCoffees(coffeeName: string) {
    setCart((state) => state.filter((coffee) => coffeeName !== coffee.name))
  }

  return (
    <CartContext.Provider
      value={{
        addCoffeeToCart,
        updateCartCoffees,
        removeCartCoffees,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
