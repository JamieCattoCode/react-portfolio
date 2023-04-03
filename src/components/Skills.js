import skills from '../utils/skills.json'
import SkillCard from './SkillCard'

const Skills = () => {
    const { cards } = skills
    
    return (
        <div className='py-10'>
            <h3 className='text-xl font-medium text-center p-1 lg:text-3xl lg:mb-5 dark:text-teal-600'>My Skills</h3>
            <div className='flex justify-center px-4'>
                <p className='text-base text-center max-w-screen-md dark:text-slate-400 lg:text-lg'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu 
                    volutpat odio facilisis mauris. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ultrices in iaculis nunc 
                    sed augue lacus. Aenean sed adipiscing diam donec adipiscing tristique risus.
                </p>
            </div>
            <div className='lg:flex flex-wrap gap-10 lg:p-10'>
                {cards.map(card => {
                    return <SkillCard 
                    cardData={card}
                    key={card.title}/>
                })}
            </div>
        </div>
    )
}

export default Skills