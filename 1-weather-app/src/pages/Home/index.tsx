import React, { useState } from 'react'
import City from '../../entities/City'
import CreateCity from '../../useCases/CreateCity'
import { Card, Header, Input, Button } from './components'

import { Container, Row } from './styles'

const Home: React.FC = () => {
  const [cities, setCities] = useState<City[]>([])
  const [cityName, setCityName] = useState('')

  async function handleCreateCity() {
    const {
      city,
      error,
    } = await CreateCity.createCityController.handleCreateCity({
      name: cityName,
    })

    setCityName('')

    if (error || !city) {
      return alert(error || 'SOMETHING WENT WRONG')
    }

    setCities([...cities, city])
  }

  return (
    <Container>
      <Header />
      <Row>
        <Input
          label="City"
          value={cityName}
          name="city"
          onChange={({ target }) => {
            setCityName(target.value)
          }}
        />
        <Button onClick={handleCreateCity} />
      </Row>

      {cities.map((city, index) => (
        <Card city={city} key={index} />
      ))}
    </Container>
  )
}

export default Home
