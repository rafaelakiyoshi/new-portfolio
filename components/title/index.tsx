import {
  Inline,
  DividerLeft,
  Columns,
  TextOne,
  TextTwo,
  DividerRigth
} from './style'

type TitleProps = {
  textOne: string
  textTwo: string
}
const Title = (props: TitleProps): React.ReactElement => {
  const { textOne, textTwo } = props
  return (
    <>
      <Inline>
        <DividerLeft />
        <Columns>
          <TextOne>{textOne}</TextOne>
          <TextTwo>{textTwo}</TextTwo>
        </Columns>
        {/* <DividerRigth /> */}
      </Inline>
    </>
  )
}

export default Title
