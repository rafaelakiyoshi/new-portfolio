import styled from 'styled-components'

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: end;
  @media (max-width: 1100px) {
  }
`

export const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1100px) {
    width: 90%;
  }
`

export const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  position: relative;
  @media (max-width: 1100px) {
    display: none;
    width: 0%;
  }
`

export const Paragraph = styled.div`
  padding: 20px;
  text-align: left;
  @media (max-width: 1100px) {
    display: none;
    width: 0%;
  }
`
