import Image from 'next/image'
import { Player } from '@lottiefiles/react-lottie-player'
import { Row, Left, Right, Paragraph } from './style'

const AboutMe = (): React.ReactElement => {
  return (
    <Row>
      <Left>
        <Image
          loading="eager"
          src="/vercel.svg"
          alt="Picture of the author"
          width={630}
          height={160}
        />
        <Paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Paragraph>
      </Left>
      <Right>
        <Player
          autoplay
          loop
          src="/test.json"
          style={{ height: '400px', width: '400px' }}
        />
      </Right>
    </Row>
  )
}

export default AboutMe
