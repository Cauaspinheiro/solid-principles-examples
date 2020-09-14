import React from 'react'
import City from '../../../../entities/City'

import { CardContainer } from './styles'

export interface ICardProps {
  city: City
}

const Card: React.FC<ICardProps> = ({ city }) => {
  return (
    <CardContainer>
      <h1>{JSON.stringify(city)}</h1>
    </CardContainer>
  )
}

export default Card
