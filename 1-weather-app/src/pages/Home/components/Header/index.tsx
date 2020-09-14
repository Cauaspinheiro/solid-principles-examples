import React from 'react'
import {
  HeaderContainer,
  HeaderContent,
  HeaderSubtitle,
  HeaderTitle,
} from './styles'

const Header: React.FC = ({ children }) => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>Simple Weather App</HeaderTitle>
        <HeaderSubtitle>I hope it's a sunny day</HeaderSubtitle>

        {children}
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
