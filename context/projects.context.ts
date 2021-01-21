import { createContext } from 'react'

interface IProject {
  id: string
  title: string
  description: string
  technologies: string[]
  projectUrl: string
}

interface IContext {
  projects: IProject[]
  defaultSelectedProject: string
}
export default createContext<IContext>({
  projects: [
    {
      id: '1',
      title: 'HAYAI',
      description: 'A Next.js boilerplate',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    },
    {
      id: '2',
      title: 'RAFAEL AKIYOSHI',
      description: 'A nice and clean portfolio (This one)',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=portfolio'
    },
    {
      id: '3',
      title: 'CODE CATCH',
      description: 'A website where you can navigate through Github projects',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=project-navigator'
    },
    {
      id: '4',
      title: 'NANJI',
      description: 'A personal events countdown',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    },
    {
      id: '5',
      title: 'WALTER',
      description: 'A Fitness Ecossystem platform',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    },
    {
      id: '6',
      title: 'ALL ABOUT FOOD',
      description: 'A platform to keep record of your favorites restaurants.',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    }
  ],
  defaultSelectedProject: '1'
})
