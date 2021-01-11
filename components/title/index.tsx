import { FunctionComponent } from 'react'
import { Inline, DividerLeft, Columns, TextOne, TextTwo } from './title.styles'

type TitleProps = {
  text: string
}
const Title: FunctionComponent<TitleProps> = ({ text }) => {
  return (
    <>
      <Inline>
        <DividerLeft />
        <Columns>
          <TextOne>CHECK</TextOne>
          <TextTwo>OUT MY PROJECTS</TextTwo>
        </Columns>
        {/* <DividerRigth /> */}
      </Inline>
    </>
  )
}

export default Title
