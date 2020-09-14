import styled from 'styled-components'

export const InputContainer = styled.div`
  flex-direction: column;
  display: flex;
`

export const InputLabel = styled.label`
  margin-bottom: 8px;
  font-family: Archivo, sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
`

export const HTMLInput = styled.input`
  height: 44px;
  min-width: 200px;
  padding: 0 1.6rem;

  color: #2d2d2d;
  font: 400 1.5rem Archivo;

  border-radius: 6px;

  border: 1px solid #aaa;
  outline: none;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (min-width: 800px) {
    width: 60%;
  }
`
