import Image from 'next/image'
import profilePic from '../assets/profile-pic.jpg'

const CirclePicture = () => {
    return (
        <div className='flex justify-center p-9'>
            <Image 
            src={profilePic}
            width={200}
            height={200} 
            className='rounded-full w-200 h-200 lg:w-96 lg:h-96'
            alt="Jamie Catto head-shot" />
        </div>
    )
}

export default CirclePicture