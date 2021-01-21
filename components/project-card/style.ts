import styled from 'styled-components'

interface YourProps {
  selected: boolean
}

export const CardContainer = styled.div`
  cursor: pointer;
  height: 150px;
  min-width: 200px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  text-align: center;
  --borderWidth: 2px;
  background: #1d1f2047;
  border: 1px solid #2e2e2f;
  position: relative;
  border-radius: 10px;
  transition: 150ms;
  transform: translateY(${(p: YourProps) => (p.selected ? '-1em' : '0em')});
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
  }
  &:hover {
    background: #1d1f2073;
  }
  @media (max-width: 1100px) {
    min-width: 150px;
    max-width: 150px;
  }
`

export const CardFooter = styled.div`
  position: absolute;
  bottom: 0;
  border-top: 1px solid #2e2e2f;
  width: 100%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const ProjectTitle = styled.div`
  text-align: center;
  max-height: 40px;
  min-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Anton', sans-serif;
  color: #efefef;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #2e2e2f;
`
