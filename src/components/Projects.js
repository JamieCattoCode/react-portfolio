import ProjectCard from './ProjectCard'
import projectData from '../utils/projects.json'

const Projects = () => {
    const { projects } = projectData

    return (
        <div className='my-10'>
            <h3 className='text-xl font-medium text-center p-1 lg:text-3xl lg:mb-5 dark:text-teal-600'>My Projects</h3>
            <div className='lg:flex flex-wrap gap-10 lg:p-10 m-8'>
                {projects.map(project => (
                    <ProjectCard
                    projectData={project}
                    key={project.title} />
                ))}
            </div>
        </div>
    )
}

export default Projects