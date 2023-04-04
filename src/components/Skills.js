import skills from '../utils/skills.json'
import SkillCard from './SkillCard'
import copy from '../utils/copy.json'

const Skills = () => {
    const { cards } = skills
    const { skillsSection } = copy
    
    return (
        <div className='py-10'>
            <h3 className='text-xl font-medium text-center p-1 lg:text-3xl lg:mb-5 dark:text-teal-600'>My Skills</h3>
            <div className='flex justify-center px-4'>
                <p className='text-base text-center max-w-screen-md dark:text-slate-400 lg:text-lg'>
                    {skillsSection.summaryParagraph}
                </p>
            </div>
            <div className='lg:flex flex-wrap gap-10 lg:p-10'>
                {cards.map((card, count)=> {
                    return <SkillCard 
                    cardData={card}
                    key={card.title}
                    count={count} />
                })}
            </div>
        </div>
    )
}

export default Skills