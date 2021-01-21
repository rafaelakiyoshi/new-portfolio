import { useContext, useState } from 'react'
import Title from '../title'
import ProjectCard from '../project-card'
import Button from '../button'
import { ProjectsGrid, Inline, Code, ProjectReview } from './style'
import ProjectsContext from '../../context/projects.context'

const Projects: React.FC = () => {
  const { projects, defaultSelectedProject } = useContext(ProjectsContext)
  const [selectedProject, setSelectedProject] = useState<string>(
    defaultSelectedProject
  )
  return (
    <>
      <Title textOne="CHECK" textTwo="OUT MY PROJECTS" />
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
        <ProjectReview>
          <Button />
        </ProjectReview>
        <Code>
          <iframe
            style={{
              border: '1px solid #2e2e2f',
              borderRadius: '10px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
              margin: '0'
            }}
            src="https://project-navigator.vercel.app"
            // src="https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai"
            title="W3Schools Free Online Web Tutorials"
          />
        </Code>
      </Inline>
      {/* <Astronaut autoplay loop src="/animation1.json" />
      <Planet autoplay loop src="/earth.json" /> */}
    </>
  )
}

export default Projects
