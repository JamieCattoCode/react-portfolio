import Image from "next/image"
import { AiFillGithub } from 'react-icons/ai'
import tblScreenshot from '../assets/travel-bucket-list.jpg';
import nasaSearchScreenshot from '../assets/nasa-image-search.png';


const ProjectCard = ({ projectData, count }) => {
    const {
        title, 
        imageName,
        description,
        githubLink
    } = projectData

    const screenshots = [tblScreenshot, nasaSearchScreenshot];

    return (
        <div className="text-center shadow-lg px-10 py-4 rounded-xl my-10  dark:dark:bg-white dark:shadow-gray-300 flex-1">
            <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
            <div className='flex justify-center my-5'>
                <Image 
                src={screenshots[count]}
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