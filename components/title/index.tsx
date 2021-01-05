import { FunctionComponent } from 'react'
import { Inline, DividerLeft, DividerRigth, Text } from './title.styles'

type TitleProps = {
  text: string
}
const Title: FunctionComponent<TitleProps> = ({ text }) => {
  return (
    <>
      <Inline>
        <DividerLeft />
        <Text>{text}</Text>
        <DividerRigth />
      </Inline>
    </>
  )
}

export default Title
