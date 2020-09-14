import React from 'react'
import {
  HeaderContainer,
  HeaderContent,
  HeaderSubtitle,
  HeaderTitle,
} from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>Simple Weather App</HeaderTitle>
        <HeaderSubtitle>I hope it's a sunny day</HeaderSubtitle>
      </HeaderContent>
    </HeaderContainer>
  )
}
