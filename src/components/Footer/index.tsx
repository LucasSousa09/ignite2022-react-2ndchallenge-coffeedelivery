import { FooterContainer, Separator } from './styles'
import { GithubLogo, FigmaLogo } from 'phosphor-react'

export function Footer() {
  return (
    <FooterContainer>
      <Separator />
      <strong>Other Links</strong>
      <a href="https://github.com/LucasSousa09/ignite2022-react-2ndchallenge-coffeedelivery">
        <GithubLogo weight="fill" size={28} /> Github
      </a>
      <a href="https://www.figma.com/file/NhuOVCEdKFHBSmSeE7FUF8/Coffee-Delivery-(Copy)?node-id=7445%3A697&t=6JWOLt9cGgsJlIUF-0">
        <FigmaLogo size={28} /> Figma
      </a>
    </FooterContainer>
  )
}
