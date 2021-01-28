import styled from 'styled-components'

interface YourProps {
  selected: boolean
}

export const CardContainer = styled.div`
  cursor: pointer;
  height: 150px;
  min-width: 220px;
  max-width: 220px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background: #1d1f2047;
  position: relative;
  /* padding: 1rem; */
  position: relative;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */

  border: 1px solid
    ${(p: YourProps) => (p.selected ? 'transparent' : '#2e2e2f')};

  -moz-border-image: ${(p: YourProps) =>
    p.selected
      ? '-moz-linear-gradient(top left, #cc5566 0%, #f8902a 100%)'
      : 'unset'};
  -webkit-border-image: ${(p: YourProps) =>
    p.selected
      ? '-webkit-linear-gradient(top left, #cc5566 0%, #f8902a 100%)'
      : 'unset'};
  border-image: ${(p: YourProps) =>
    p.selected
      ? 'linear-gradient(to bottom right, #cc5566 0%, #f8902a 100%)'
      : 'unset'};
  border-image-slice: 1;
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
  }
  &:hover {
    background: #1d1f2073;
  }
  @media (max-width: 1100px) {
    min-width: 330px;
    max-width: 330px;
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

export const ProjectDescription = styled.div`
  /* align-items: center; */
  margin: 10px auto;
`

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #2e2e2f;
`
