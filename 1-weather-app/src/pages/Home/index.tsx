import React, { useState } from 'react'
import City from '../../entities/City'
import { Card, Header, Input } from './components'

import { Container } from './styles'

const Home: React.FC = () => {
  const [cities, setCities] = useState<City[]>([])
  const [cityName, setCityName] = useState('')

  return (
    <Container>
      <Header />
      <Input
        label="City"
        value={cityName}
        name="city"
        onChange={({ target }) => {
          setCityName(target.value)
        }}
      />

      {cities.map((city, index) => (
        <Card city={city} key={index} />
      ))}
    </Container>
  )
}

export default Home
