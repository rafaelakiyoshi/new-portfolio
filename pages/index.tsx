import Head from 'next/head'
import Image from 'next/image'
import MyParticles from '../components/particles'
import { Container, CenteredContainer } from '../styles/home'
import Projects from '../components/projects'
import { Player } from '@lottiefiles/react-lottie-player'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="symbol.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        ></link>
        <title>Rafael Akiyoshi</title>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
      </Head>
      <CenteredContainer>
        <MyParticles />
        <div
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'end'
          }}
        >
          <div
            style={{
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <Image
              src="/vercel.svg"
              alt="Picture of the author"
              width={630}
              height={160}
            />
            <span
              style={{ position: 'absolute', bottom: '-12em', left: '2em' }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </span>
          </div>
          <div style={{ width: '50%' }}>
            <Player
              autoplay
              loop
              src="/test.json"
              style={{ height: '400px', width: '400px' }}
            />
          </div>
        </div>
      </CenteredContainer>
      <Container>
        <Projects />
      </Container>
    </>
  )
}

export default Home
