import coffeesDb from '../../../coffees.json'
import { ShoppingCart, Timer, Package, Coffee } from 'phosphor-react'

import { CoffeeCard } from './components/CoffeeCard'
import { Snippet } from './components/Snippet'

import { defaultTheme } from '../../styles/theme/default'

import {
  CoffeCardsContainer,
  CoffesContainer,
  MainContainer,
  SnippetsContainer,
} from './styles'

import heroImg from '../../assets/hero-image.png'
import { useEffect, useState } from 'react'

interface CoffeeProps {
  name: string
  tags: string[]
  quantity: number
  price: number
  coffeeSrc: string
  description: string
}

export function Home() {
  const [coffees, setCoffees] = useState<CoffeeProps[]>([])

  useEffect(() => {
    setCoffees(
      coffeesDb.coffees.map((coffee) => {
        return { ...coffee, quantity: 0 }
      }),
    )
  }, [])

  return (
    <>
      <MainContainer>
        <div>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </div>

          <SnippetsContainer>
            <Snippet
              iconContainerBgColor={defaultTheme.yellow}
              message="Compra simples e segura"
            >
              <ShoppingCart
                color={defaultTheme.white}
                size={16}
                weight="fill"
              />
            </Snippet>
            <Snippet
              iconContainerBgColor={defaultTheme['base-text']}
              message="Embalagem mantém o café intacto"
            >
              <Package color={defaultTheme.white} size={16} weight="fill" />
            </Snippet>
            <Snippet
              iconContainerBgColor={defaultTheme['yellow-dark']}
              message="Entrega rápida e rastreada"
            >
              <Timer color={defaultTheme.white} size={16} weight="fill" />
            </Snippet>
            <Snippet
              iconContainerBgColor={defaultTheme.purple}
              message="O café chega fresquinho até você"
            >
              <Coffee color={defaultTheme.white} size={16} weight="fill" />
            </Snippet>
          </SnippetsContainer>
        </div>
        <img src={heroImg} alt="" />
      </MainContainer>

      <CoffesContainer>
        <h2>Nossos Cafés</h2>
        <CoffeCardsContainer>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.name}
              name={coffee.name}
              tags={coffee.tags}
              price={coffee.price}
              quantity={coffee.quantity}
              coffeeImgSrc={coffee.coffeeSrc}
              description={coffee.description}
            />
          ))}
        </CoffeCardsContainer>
      </CoffesContainer>
    </>
  )
}
