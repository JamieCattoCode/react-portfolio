import Image from "next/image"
import nodeIcon from '../assets/icons/node_js_icon.svg'
import postgreIcon from '../assets/icons/postgresql_icon.svg'
import reactIcon from '.../assets/icons/react_icon.svg'

const SkillCard = ({ cardData, count }) => {
    const { title, description, technologies } = cardData
    const icons = [postgreIcon, nodeIcon, reactIcon]
    return (
        <div className="max-w-800 text-center shadow-lg px-10 py-4 rounded-xl my-10  dark:dark:bg-white dark:shadow-gray-300 flex-1">
            <div className="flex justify-center p-4">
                <Image 
                src={icons[count]}
                alt={`${count} icon`}
                width={80} />
            </div>

            <h3 className="text-lg font-medium pt-8 pb-2">{title}</h3>
            <p className="py-2">{description}</p>
            <h4 className="py-4 text-teal-600">Technologies I use</h4>
            <ul className="list-none">
                {technologies.map(technology => {
                    return (
                    <li 
                    className="text-gray-800 py-1"
                    key={technology.name}>
                        {technology.name}
                    </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default SkillCard