import Image from 'next/image'
import {
  CardContainer,
  CardFooter,
  Divider,
  ProjectTitle,
  ProjectDescription
} from './style'

interface ProjectCardProps {
  setSelectedProject: (key: string) => void
  setProjectUrl: (key: string | undefined) => void
  projectID: string
  projectUrl?: string
  title: string
  description: string
  selected: boolean
  technologies: string[]
}
const ProjectCard = ({
  title,
  projectID,
  projectUrl,
  description,
  selected,
  technologies,
  setSelectedProject,
  setProjectUrl
}: ProjectCardProps): React.ReactElement => {
  const onClickHandler = (): void => {
    setProjectUrl(projectUrl)
    setSelectedProject(projectID)
  }

  return (
    <CardContainer selected={selected} onClick={() => onClickHandler()}>
      <ProjectTitle>
        <h3>{title}</h3>
      </ProjectTitle>
      <Divider />
      <ProjectDescription>
        <p>{description}</p>
      </ProjectDescription>
      <CardFooter>
        {technologies.map(tech => {
          return (
            <Image
              key={tech}
              src={`/${tech}.svg` || `/${tech}.png`}
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
