import styled from 'styled-components'

export const CardContainer = styled.div`
  background: var(--color-primary-light);
  width: 100%;

  margin-bottom: 2.6rem;

  border-radius: 8px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

export const CardContent = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
`

export const CardIcon = styled.img`
  padding-right: 4rem;

  @media (max-width: 700px) {
    display: none;
  }
`

export const CardRow = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`

export const CardTitle = styled.h2`
  font-family: Poppins;
  font-weight: bold;
  font-size: 2rem;

  letter-spacing: 0.03em;
`

export const CardTitleDate = styled.span`
  font-family: Poppins;
  font-weight: 500;
  font-size: 1.6rem;

  margin-left: 1.6rem;

  margin-bottom: 2px;

  color: #ffffff;
`

export const CardTemp = styled.h1`
  font-family: Ubuntu;
  font-style: normal;
  font-weight: bold;
  font-size: 3.6rem;

  color: #ffffff;
`

export const CardTempSpan = styled.span`
  margin-top: 4px;
  margin-left: 0.6rem;
`

export const CardTempDescription = styled.p`
  font-size: 1.4rem;
`

export const CardContentVerticalDivider = styled.div`
  border-left: 2px solid rgba(256, 256, 256, 0.25);
  height: 5.6em;
  width: 1px;
  top: 0;
  align-self: center;
`

export const CardTempDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const CardTempDetailsLabel = styled.h4`
  font-weight: 500;
  font-size: 1.6rem;

  color: #ffffff;
`

export const CardTempDetailsValue = styled.h3`
  margin-left: 1.2rem;

  font-weight: 500;
  font-size: 16px;

  color: #ffffff;
`
