import Head from 'next/head'
import Image from 'next/image'
import MyParticles from '../components/particles'
import { Container, CenteredContainer } from '../styles/home'
import Projects from '../components/projects'
const Home: React.FC = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="symbol.svg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cutive+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <title>Rafael Akiyoshi</title>
      </Head>
      <CenteredContainer>
        <MyParticles />
        <Image
          src="/vercel.svg"
          alt="Picture of the author"
          width={430}
          height={200}
        />
      </CenteredContainer>
      <Container>
        <Projects />
      </Container>
    </>
  )
}

export default Home
