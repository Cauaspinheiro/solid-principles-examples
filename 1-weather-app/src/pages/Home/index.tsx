import React, { useEffect, useState } from 'react'
import City from '../../entities/City'
import { createCityController } from '../../useCases/CreateCity'
import { reloadAllCitiesController } from '../../useCases/ReloadAllCities'
import { Card, Header, Input } from './components'

import { HomeContainer, Form, Button } from './styles'

const Home: React.FC = () => {
  const [cities, setCities] = useState<City[]>([])
  const [cityName, setCityName] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (cityName.trim() === '') return alert('INPUT NOT VALID')

    const { city, error } = await createCityController.handleCreateCity({
      name: cityName,
    })

    setCityName('')

    if (error || !city) {
      return alert(error || 'SOMETHING WENT WRONG')
    }

    setCities([...cities, city])
  }

  useEffect(() => {
    async function getAllCities() {
      const {
        cities,
        error,
      } = await reloadAllCitiesController.handleReloadAllCities()

      if (error || !cities || !(cities.length > 0)) {
        return alert(error || 'SOMETHING WENT WRONG')
      }

      setCities(cities)
    }

    getAllCities()
  }, [])

  return (
    <HomeContainer>
      <Header>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Search for a city"
            value={cityName}
            name="city"
            placeholder="My lovely city"
            onChange={({ target }) => {
              setCityName(target.value)
            }}
          />
          <Button type="submit">Procurar Cidade</Button>
        </Form>
      </Header>

      {cities.map((city, index) => (
        <Card city={city} key={index} />
      ))}
    </HomeContainer>
  )
}

export default Home
