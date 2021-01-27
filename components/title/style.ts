import styled from 'styled-components'

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 1100px) {
    align-items: center;
  }
`

export const TextTwo = styled.h1`
  font-family: 'Anton', sans-serif;
  color: white;
  font-size: 50px;
  @media (max-width: 1100px) {
    font-size: 35px;
  }
`

export const TextOne = styled.h1`
  font-family: 'Anton', sans-serif;
  background-color: red;
  background-image: linear-gradient(180deg, #e17741, #af4261);
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  font-size: 30px;
  @media (max-width: 1100px) {
    font-size: 25px;
  }
`

export const Inline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  @media (max-width: 1100px) {
    margin-bottom: 15px;
  }
`

export const DividerLeft = styled.div`
  height: 0px;
  width: 70%;
  margin: 20px;
  background: rgba(18, 18, 18, 0);
  background: rgb(227, 122, 63);
  box-shadow: 70px 0px 50px 10px
    linear-gradient(
      90deg,
      rgba(227, 122, 63, 0) 0%,
      rgba(227, 122, 63, 1) 38%,
      rgba(202, 81, 108, 1) 100%
    );
  background: linear-gradient(
    90deg,
    rgba(227, 122, 63, 0) 0%,
    rgba(227, 122, 63, 1) 38%,
    rgba(202, 81, 108, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#121212",endColorstr="#ce822b",GradientType=1);
  @media (max-width: 1100px) {
    width: 0%;
    margin: 0px;
  }
`

export const DividerRigth = styled.div`
  height: 1px;
  width: 50%;
  margin: 20px;
  background: rgb(18, 18, 18);
  background: rgb(227, 122, 63);
  background: linear-gradient(
    270deg,
    rgba(227, 122, 63, 0) 0%,
    rgba(227, 122, 63, 1) 38%,
    rgba(202, 81, 108, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#121212",endColorstr="#ce822b",GradientType=1);
`
