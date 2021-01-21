import styled from 'styled-components'

export const StyledButton = styled.button`
  font-family: 'Anton', sans-serif;
  cursor: pointer;
  background: transparent;
  padding: 7px 12px;
  border-radius: 3px;
  border: 0;
  /* border-image-source: linear-gradient(45deg, #e17741, #af4261); */
  /* border-image-slice: 1; */
  /* font-family: 'Anton', sans-serif; */
  /* background-color: red; */
  background-image: linear-gradient(180deg, #d76c47, #ba4e59);
  /* background-size: 100%; */
  /* background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent; */
  /* background: linear-gradient(45deg, #e17741, #af4261); */
  transition: all 100ms;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    background-image: linear-gradient(90deg, #d76c47, #ba4e59);
  }
`
