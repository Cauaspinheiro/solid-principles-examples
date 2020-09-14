import React from 'react'

import { Container } from './styles'

export interface IButtonProps {
  onClick: () => {}
}

const Button: React.FC<IButtonProps> = ({ onClick }) => {
  return (
    <Container>
      <button type="button" onClick={onClick}>
        Procurar
      </button>
    </Container>
  )
}

export default Button
