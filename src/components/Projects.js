import ProjectCard from './ProjectCard'
import projectData from '../utils/projects.json'

const Projects = () => {
    const { projects } = projectData

    return (
        <div className='my-10'>
            <h3 className='text-center text-xl lg:text-3xl'>My Projects</h3>
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