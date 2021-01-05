import Particles from 'react-tsparticles'
import styled from 'styled-components'

const StyledParticles = styled(Particles)`
  position: fixed;
  top: 0;
  margin: 0;
  left: 0;
  z-index: -10;
  height: 100%;
  width: 100%;
`
const MyParticles: React.FC = () => {
  return (
    <StyledParticles
      id="tsparticles"
      options={{
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 1500
            }
          },
          line_linked: {
            enable: true,
            opacity: 0.02
          },
          move: {
            direction: 'right',
            speed: 0.15
          },
          size: {
            value: 1
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05
            }
          }
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: 'push'
            }
          },
          modes: {
            push: {
              particles_nb: 1
            }
          }
        },
        retina_detect: true
      }}
    />
  )
}

export default MyParticles
