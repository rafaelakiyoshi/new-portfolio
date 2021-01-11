import styled, { keyframes } from 'styled-components'

interface YourProps {
  selected: boolean
}

const animatedgradient = keyframes`
 50% {
    background-position: 100% 50%;
  }
`
export const CardContainer = styled.div`
  cursor: pointer;
  height: 150px;
  width: 200px;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* border-radius: 10px; */
  --borderWidth: 2px;
  background: #1d1f2047;
  border: 1px solid #2e2e2f;
  position: relative;
  border-radius: 10px;
  transition: 150ms;
  /* border-color: ${(p: YourProps) => (p.selected ? 'white' : '#2e2e2f')}; */
  transform: translateY(${(p: YourProps) => (p.selected ? '-1em' : '0em')});
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:after {
    content: '';
    position: absolute;
    /* top: calc(-1 * var(--borderWidth));
    left: calc(-1 * var(--borderWidth));
    height: calc(100% + var(--borderWidth) * 2);
    width: calc(100% + var(--borderWidth) * 2); */
    /* border-color: ${(p: YourProps) =>
      p.selected
        ? 'linear-gradient(60deg, #fca311 0%, #e37a3f 50%, #ca516c 100%)'
        : 'transparent'}; */
    /* background-position: 0 50%;
    border-radius: calc(2 * var(--borderWidth)); */
    z-index: -1;
    /* animation: ${animatedgradient} 3s alternate infinite; */
    /* background-size: 300% 300%; */
  }
  &:hover {
    background: #1d1f2073;
    /* transform: translateY(-1em);
    transition: transform 150ms ease-in-out; */
    /* border-color: #454545; */
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
