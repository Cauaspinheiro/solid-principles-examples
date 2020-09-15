import React from 'react'
import City from '../../../../entities/City'

import {
  CardContainer,
  CardContent,
  CardContentVerticalDivider,
  CardIcon,
  CardRow,
  CardTemp,
  CardTempDescription,
  CardTempDetailsContainer,
  CardTempSpan,
  CardTitle,
  CardTitleDate,
  CardTempDetailsLabel,
  CardTempDetailsValue,
} from './styles'

export interface ICardProps {
  city: City
}

const Card: React.FC<ICardProps> = ({ city }) => {
  return (
    <CardContainer>
      <CardRow
        style={{
          justifyContent: 'space-between',
        }}
      >
        <CardContent>
          <CardRow style={{ marginBottom: 12, alignItems: 'flex-end' }}>
            <CardTitle>{`${city.name}, ${city.country}`}</CardTitle>

            <CardTitleDate>{city.date.toLocaleDateString()}</CardTitleDate>
          </CardRow>

          <CardRow
            style={{
              justifyContent: 'space-around',
            }}
          >
            <div
              style={{
                marginRight: '1.6rem',
              }}
            >
              <CardRow
                style={{
                  alignItems: 'flex-start',
                }}
              >
                <CardTemp>{city.temperature.toFixed(0)}°</CardTemp>

                <CardTempSpan>Celsius</CardTempSpan>
              </CardRow>

              <CardTempDescription>
                {city.climateDescription[0].toUpperCase() +
                  city.climateDescription.substring(1)}
              </CardTempDescription>
            </div>

            <CardContentVerticalDivider />

            <CardTempDetailsContainer
              style={{
                marginLeft: '1.6rem',
              }}
            >
              <CardRow>
                <CardTempDetailsLabel>Min. temperature:</CardTempDetailsLabel>
                <CardTempDetailsValue>
                  {city.minTemperature.toFixed(0)}°C
                </CardTempDetailsValue>
              </CardRow>

              <CardRow>
                <CardTempDetailsLabel>Max. temperature:</CardTempDetailsLabel>
                <CardTempDetailsValue>
                  {city.maxTemperature.toFixed(0)}°C
                </CardTempDetailsValue>
              </CardRow>

              <CardRow>
                <CardTempDetailsLabel>Humidity:</CardTempDetailsLabel>
                <CardTempDetailsValue>
                  {city.humidity.toFixed(0)}%
                </CardTempDetailsValue>
              </CardRow>
            </CardTempDetailsContainer>
          </CardRow>
        </CardContent>

        <CardIcon src={city.climateIcon} />
      </CardRow>
    </CardContainer>
  )
}

export default Card
