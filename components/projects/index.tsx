import { useContext, useState } from 'react'
import Title from '../title'
import ProjectCard from '../project-card'
import Button from '../button'
import { ProjectsGrid, Inline, Code, ProjectReview } from './style'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ProjectsContext from '../../context/projects.context'
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
const Projects: React.FC = () => {
  const { projects, defaultSelectedProject } = useContext(ProjectsContext)
  const [selectedProject, setSelectedProject] = useState<string>(
    defaultSelectedProject
  )
  const [projectUrl, setProjectUrl] = useState(
    projects[+defaultSelectedProject].projectUrl
  )
  return (
    <>
      <Title textOne="CHECK" textTwo="OUT MY PROJECTS" />
      <div style={{ margin: '20px' }}>
        <Carousel responsive={responsive}>
          {projects.map(project => {
            return (
              <ProjectCard
                key={project.id}
                projectID={project.id}
                projectUrl={project.projectUrl}
                setSelectedProject={setSelectedProject}
                setProjectUrl={setProjectUrl}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                selected={project.id === selectedProject ? true : false}
              />
            )
          })}
        </Carousel>
      </div>
      {/* <ProjectsGrid>
        {projects.map(project => {
          return (
            <ProjectCard
              key={project.id}
              projectID={project.id}
              projectUrl={project.projectUrl}
              setSelectedProject={setSelectedProject}
              setProjectUrl={setProjectUrl}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              selected={project.id === selectedProject ? true : false}
            />
          )
        })}
      </ProjectsGrid> */}
      <Inline>
        {/* <ProjectReview>
          <Button />
        </ProjectReview> */}
        <Code>
          <iframe
            id="frame"
            style={{
              border: '1px solid #2e2e2f',
              borderRadius: '10px',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
              overflow: 'hidden',
              width: '100%',
              height: '100%',
              margin: '0'
            }}
            src={projectUrl}
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
