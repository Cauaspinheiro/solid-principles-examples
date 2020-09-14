import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  width: 90vw;
  max-width: 800px;
`

export default createGlobalStyle`
  :root {
    --color-background: #F5F5F5;
    --color-primary: #4D9FFF;
    --color-primary-light: #77B6FF;
    --color-primary-dark: #00418E;
    --color-title-primary: #ffffff;
    --color-input-background: #f8f8fc;
    --color-input-text: #BCC4CC;
    --color-text-base: #f5f5f5;

    font-size: 60%;
}

  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100vh;
    overflow-x: hidden
  }

  body {
    background: var(--color-background);
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: var(--color-text-base);
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
}
`
