import React, { useState } from 'react'
import City from '../../entities/City'
import CreateCity from '../../useCases/CreateCity'
import { Card, Header, Input } from './components'

import { Container, Form, Button } from './styles'

const Home: React.FC = () => {
  const [cities, setCities] = useState<City[]>([])
  const [cityName, setCityName] = useState('')

  async function handleCreateCity(e: React.FormEvent) {
    e.preventDefault()

    if (cityName.trim() === '') return alert('INPUT NOT VALID')

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
      <Form onSubmit={handleCreateCity}>
        <Input
          label="City"
          value={cityName}
          name="city"
          onChange={({ target }) => {
            setCityName(target.value)
          }}
        />
        <Button type="submit">Procurar Cidade</Button>
      </Form>

      {cities.map((city, index) => (
        <Card city={city} key={index} />
      ))}
    </Container>
  )
}

export default Home
