import styled from 'styled-components'

export const ProjectsGrid = styled.div`
  display: flex;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin-bottom: 30px;
  justify-content: center;
  align-content: center;
  @media (max-width: 1100px) {
    margin-bottom: 15px;
  }
`

export const Inline = styled.div`
  display: flex;
  justify-content: center;
  height: 60%;
  width: 100%;
`

export const Code = styled.div`
  width: 90%;
  @media (max-width: 1100px) {
    width: 0%;
    display: none;
  }
`

export const ProjectReview = styled.div`
  width: 60%;
  background: #1d1f2047;
  margin-right: 2em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid #2e2e2f;
  /* float: right; */
  border-radius: 10px;
  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0;
    border-radius: 30px 30px 0px 0px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  /* align-items: center; */
  /* padding: 2em; */
`
