import Head from 'next/head'
import MyParticles from '../components/particles'
import AboutMe from '../components/about-me'
import Footer from '../components/footer'
import Header from '../components/header'
import { Container, CenteredContainer } from '../styles/home'
import Projects from '../components/projects'

const Home = (): React.ReactElement => {
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
      </Head>
      <Header />
      <CenteredContainer>
        <MyParticles />
        <AboutMe />
      </CenteredContainer>
      {/* <Container>
        <Projects />
      </Container> */}
      <Footer />
    </>
  )
}

export default Home
