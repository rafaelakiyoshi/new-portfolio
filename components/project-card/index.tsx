import Image from 'next/image'
import { CardContainer, CardFooter } from './project-card.styles'

interface ProjectCardProps {
  setSelectedProject: (key: string) => void
  projectID: string
  title: string
  description: string
  selected: boolean
  technologies: string[]
}
const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  projectID,
  description,
  selected,
  technologies,
  setSelectedProject
}) => {
  return (
    <CardContainer
      selected={selected}
      onClick={() => {
        console.log(projectID)
        setSelectedProject(projectID)
      }}
    >
      <h2>{title}</h2>
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
