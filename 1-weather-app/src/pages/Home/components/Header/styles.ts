import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);

  justify-content: center;

  @media (min-width: 800px) {
    height: 260px;
  }
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-primary);
  padding: 1.6rem 0;
  align-self: flex-start;

  @media (min-width: 800px) {
    flex: 1;

    width: 100%;
    max-width: 800px;

    margin: 0 auto;
    padding-bottom: 48px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`

export const HeaderTitle = styled.h1`
  font-weight: 700;
  font-size: 3.6rem;
`

export const HeaderSubtitle = styled.h3`
  font-weight: 500;
  font-size: 1.8rem;
`
