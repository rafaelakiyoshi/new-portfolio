import { createContext } from 'react'

export default createContext({
  projects: [
    {
      id: '1',
      title: '早い',
      description: 'A Next.js boilerplate',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    },
    {
      id: '2',
      title: '秋吉',
      description: 'A nice and clean portfolio',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=portfolio'
    },
    {
      id: '3',
      title: 'コード',
      description: 'Code viewer using Github API',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=project-navigator'
    },
    {
      id: '4',
      title: '時計',
      description: 'A personal PWA countdown',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    },
    {
      id: '5',
      title: 'ウォルター',
      description: 'Fitness Ecossystem platform',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    },
    {
      id: '6',
      title: 'ヤシの木',
      description: 'Garden display website',
      technologies: ['next', 'swr', 'react', 'less', 'ant-design'],
      projectUrl:
        'https://project-navigator.vercel.app/project?profile=rafaelakiyoshi&project=Hayai'
    }
  ],
  defaultSelectedProject: '1'
})
