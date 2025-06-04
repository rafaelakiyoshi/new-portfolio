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
          Hi, I’m Rafael Akiyoshi — but you can call me Raf. I’m a Software
          Engineer with 9 years of experience working with JavaScript,
          originally from Brazil and now based in Montreal, Canada. I love
          building clean, scalable, and user-focused applications. Always
          curious and eager to grow, I enjoy diving into new technologies and
          learning more about this ever-evolving world of software development.
          If you’ve got a great resource or something interesting to share, I’m
          all ears!
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
