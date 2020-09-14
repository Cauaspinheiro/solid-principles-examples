import styled from 'styled-components'
import { Container } from '../../styles/GlobalStyles'

export const HomeContainer = styled(Container)`
  width: 100vw;
  height: 100vh;

  @media (min-width: 800px) {
    max-width: 100%;
  }
`

export const Form = styled.form`
  display: flex;

  width: 100%;

  flex-direction: column;

  margin-top: 16px;

  @media (min-width: 800px) {
    flex-direction: column;
    justify-content: flex-start;

    margin-top: 3.2rem;
  }
`

export const Button = styled.button`
  width: 90%;
  height: 44px;

  margin-top: 16px;
  align-self: center;

  background: var(--color-primary-light);

  border: none;
  border-radius: 6px;

  outline: none;

  transition: background 0.3s;

  &:hover {
    background: #5ea8ff;
  }

  color: var(--color-title-primary);
  font: 500 1.6rem Poppins;

  @media (min-width: 800px) {
    width: 40%;
    align-self: flex-start;
  }
`
