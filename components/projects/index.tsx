import { useContext, useState } from 'react'
import Title from '../title'
import ProjectCard from '../project-card'
import { ProjectsGrid, Inline } from './projects.styles'
import { Browser } from 'react-window-ui'
import styled from 'styled-components'
import ProjectsContext from '../../context/projects.context'
import { Player } from '@lottiefiles/react-lottie-player'
const NewBrowser = styled(Browser)`
  padding: 0 !important;
  padding-top: 2.2em !important;
  box-shadow: unset !important;
  width: 60%;
  height: 60%;
  overflow: hidden;
  float: left;
`

const Code = styled.div`
  height: 100%;
`

const ProjectReview = styled.div`
  width: 38%;
  height: 60%;
  background: #1d1f2047;
  border: 1px solid #2e2e2f;
  float: right;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

const Projects: React.FC = () => {
  const { projects, defaultSelectedProject } = useContext(ProjectsContext)
  const [selectedProject, setSelectedProject] = useState(defaultSelectedProject)
  return (
    <>
      <Title text="Projects" />
      <ProjectsGrid>
        {projects.map(project => {
          return (
            <ProjectCard
              key={project.id}
              projectID={project.id}
              setSelectedProject={setSelectedProject}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              selected={project.id === selectedProject ? true : false}
            />
          )
        })}
      </ProjectsGrid>
      <Inline>
        <NewBrowser background="transparent" padding={0} border={0}>
          <Code>
            <iframe
              style={{
                border: 'none',
                overflow: 'hidden',
                width: '100%',
                height: '100%',
                margin: 0
              }}
              src="https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai"
              title="W3Schools Free Online Web Tutorials"
            />
          </Code>
        </NewBrowser>
        <ProjectReview />
      </Inline>
      <Player
        autoplay
        loop
        src="/animation1.json"
        style={{
          height: '300px',
          width: '300px',
          position: 'absolute',
          left: '-2em',
          bottom: '-60em'
        }}
      />
      <Player
        autoplay
        loop
        src="/earth.json"
        style={{
          height: '100px',
          width: '100px',
          position: 'absolute',
          right: '5em',
          bottom: '-53em'
        }}
      />
    </>
  )
}

export default Projects
