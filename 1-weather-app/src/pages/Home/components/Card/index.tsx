import React from 'react'
import City from '../../../../entities/City'

import { CardContainer } from './styles'

export interface ICardProps {
  city: City
}

const Card: React.FC<ICardProps> = ({ city }) => {
  return (
    <CardContainer>
      <p style={{ color: '#000' }}>{JSON.stringify(city)}</p>
    </CardContainer>
  )
}

export default Card
