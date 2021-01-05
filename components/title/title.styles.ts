import styled from 'styled-components'

export const Text = styled.h1`
  color: #e1e1e1;
  text-align: center;
  margin-bottom: 0px;
  margin-top: 0;
`

export const Inline = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DividerLeft = styled.div`
  height: 1px;
  width: 50%;
  margin: 20px;
  background: rgba(18, 18, 18, 0);
  background: rgb(227, 122, 63);
  background: linear-gradient(
    90deg,
    rgba(227, 122, 63, 0) 0%,
    rgba(227, 122, 63, 1) 38%,
    rgba(202, 81, 108, 1) 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#121212",endColorstr="#ce822b",GradientType=1);
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
