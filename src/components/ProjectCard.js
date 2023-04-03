import Image from "next/image"
import { AiFillGithub } from 'react-icons/ai'

const ProjectCard = ({ projectData }) => {
    const {
        title, 
        imageName,
        description,
        githubLink
    } = projectData

    return (
        <div className="text-center shadow-lg px-10 py-4 rounded-xl my-10  dark:dark:bg-white dark:shadow-gray-300 flex-1">
            <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
            <div className='flex justify-center my-5'>
                <Image 
                src={`/../public/projects/${imageName}`}
                width={200}
                height={200}
                alt={`Screenshot of ${title}`} />
            </div>
            <div className='flex justify-center text-3xl my-3'>
                <a href={githubLink} target="_blank">
                    <AiFillGithub />
                </a>
            </div>
            <p>{description}</p>
        </div>
    )
}

export default ProjectCard