import { createContext } from 'react'

interface IProject {
  id: string
  title: string
  description: string
  technologies: string[]
  codeUrl: string
  projectUrl?: string
}

interface IContext {
  projects: IProject[]
  defaultSelectedProject: string
}
export default createContext<IContext>({
  projects: [
    {
      id: '0',
      title: 'CODE CATCH',
      description: 'A website where you can navigate through Github projects',
      technologies: [
        'javascript',
        'next',
        'swr',
        'react',
        'less',
        'ant-design'
      ],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=project-navigator',
      codeUrl: 'https://project-navigator.vercel.app'
    },
    {
      id: '1',
      title: 'MENTORHOUSE',
      description: 'A platform to find mentors in your city',
      technologies: ['javascript', 'react', 'node', 'mongodb', 'graphql'],
      codeUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai',
      projectUrl: 'https://mentorhouse.vercel.app/'
    },
    {
      id: '2',
      title: 'ALL ABOUT FOOD',
      description: 'A platform to keep record of your favorites restaurants.',
      technologies: ['typescript', 'next', 'react', 'golang', 'postgres'],
      codeUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    },
    {
      id: '3',
      title: 'RAFAEL AKIYOSHI',
      description: 'A nice and clean portfolio (This one)',
      technologies: ['typescript', 'next', 'react'],
      codeUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=portfolio',
      projectUrl: 'https://new-portfolio-ruby-five.vercel.app/'
    },
    {
      id: '4',
      title: 'NANJI',
      description: 'A personal events countdown',
      technologies: ['javascript', 'next', 'swr', 'react', 'firebase'],
      codeUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    },
    {
      id: '5',
      title: 'WALTER',
      description: 'A Fitness Ecossystem platform',
      technologies: [
        'typescript',
        'next',
        'react',
        'node',
        'postgres',
        'graphql'
      ],
      codeUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    }
  ],
  defaultSelectedProject: '0'
})
