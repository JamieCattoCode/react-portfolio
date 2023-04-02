const SkillCard = ({ cardData }) => {
    const { title, description, technologies } = cardData
    return (
        <div className="text-center md:w-6/10 shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <h3 className="text-lg font-medium pt-8 pb-2  ">{title}</h3>
            <p className="py-2">{description}</p>
            <h4 className="py-4 text-teal-600">Technologies I use</h4>
            <ul className="list-none">
                {technologies.map(technology => {
                    return <li className="text-gray-800 py-1">{technology.name}</li>
                })}
            </ul>
        </div>
    )
}

export default SkillCard