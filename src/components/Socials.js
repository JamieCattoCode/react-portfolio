import { 
    AiFillTwitterCircle, 
    AiFillLinkedin,
    AiFillGithub 
  } from 'react-icons/ai'

const Socials = () => {
    return (
        <div className='text-5xl text-gray-500 flex justify-center gap-6 my-8'>
            <a target='_blank' href='http://twitter.com/CodesJmt'>
              <AiFillTwitterCircle />
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/jamie-catto-6876421b8/'>
              <AiFillLinkedin />
            </a>
            <a target='_blank' href='https://github.com/JamieCattoCode'>
              <AiFillGithub />
            </a>
        </div>
    )
}

export default Socials