import Image from 'next/image'
import { CardContainer, CardFooter, Divider, ProjectTitle } from './style'

interface ProjectCardProps {
  setSelectedProject: (key: string) => void
  projectID: string
  title: string
  description: string
  selected: boolean
  technologies: string[]
}
const ProjectCard = ({
  title,
  projectID,
  description,
  selected,
  technologies,
  setSelectedProject
}: ProjectCardProps): React.ReactElement => {
  return (
    <CardContainer
      selected={selected}
      onClick={() => setSelectedProject(projectID)}
    >
      <ProjectTitle>
        <h2>{title}</h2>
      </ProjectTitle>
      <Divider />
      <p>{description}</p>
      <CardFooter>
        {technologies.map(tech => {
          return (
            <Image
              key={tech}
              src={`/${tech}.svg`}
              alt={tech}
              width={25}
              height={25}
            />
          )
        })}
      </CardFooter>
    </CardContainer>
  )
}

export default ProjectCard
