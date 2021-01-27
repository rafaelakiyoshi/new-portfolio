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
          Hello! I am Rafael Akiyoshi, but people usually call me Akiyoshi. I am
          a Software Engineer graduated in Brazil, but currently living/working
          in Montreal-Canada. I love coding anything, but mostly JavaScript! I
          am always willing to learn new things about this endless world of
          software development, so if you have a great resource, please share it
          with me!
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
