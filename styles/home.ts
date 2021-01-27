import styled from 'styled-components'

export const Container = styled.div`
  padding-top: 50px;
  height: 100vh;
  width: 70%;
  margin: 0 auto;
  @media (max-width: 1100px) {
    height: 95vh;
    width: 100%;
  }
`

export const CenteredContainer = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 1100px) {
    width: 100%;
  }
`
