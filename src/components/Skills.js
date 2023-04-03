import skills from '../utils/skills.json'
import SkillCard from './SkillCard'

const Skills = () => {
    const { cards } = skills
    return (
        <div>
            <div>
                <h3 className='text-xl text-center p-1'>My Skills</h3>
                <p className='text-base text-center p-5 md:px-10'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu 
                    volutpat odio facilisis mauris. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ultrices in iaculis nunc 
                    sed augue lacus. Aenean sed adipiscing diam donec adipiscing tristique risus.
                </p>
                <div>
                    {cards.map(card => {
                        return <SkillCard 
                        cardData={card}
                        key={card.title}/>
                    })}
                </div>
            </div>
            <div className='lg:flex gap-10'>

            </div>
        </div>
    )
}

export default Skills