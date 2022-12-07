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
import coffees from '../../../coffees.json'

export function Home() {
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
          {coffees.coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.name}
              coffeeImgSrc={coffee.coffeeSrc}
              name={coffee.name}
              description={coffee.description}
              tags={coffee.tags}
            />
          ))}
        </CoffeCardsContainer>
      </CoffesContainer>
    </>
  )
}
