import styled from 'styled-components'

export const StyledImage = styled.div`
  margin-right: 10px;
`
export const StyledHeader = styled.div`
  position: absolute;
  display: flex;
  height: 60px;
  width: 95%;
  align-items: center;
  justify-content: flex-end;
  margin-left: 2%;
  @media (max-width: 1100px) {
    margin-left: 0;
    position: unset;
  }
`

export const HeaderItem = styled.div`
  font-size: 20px;
  margin: 40px;
  text-decoration: none;
  font-family: 'Anton', sans-serif;
`

export const A = styled.a`
  display: flex;
  color: #b3b3b3;
  align-items: center;
  text-decoration: none;
`
