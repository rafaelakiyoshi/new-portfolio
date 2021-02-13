import { StyledButton } from './style'

interface IButton {
  text: string
  children: React.ReactElement
}
const Button = (props: IButton): React.ReactElement => {
  return (
    <StyledButton>
      <p>{props.children}</p>
    </StyledButton>
  )
}

export default Button
