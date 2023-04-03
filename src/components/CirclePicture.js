import Image from 'next/image'

const CirclePicture = () => {
    return (
        <div className='flex justify-center p-10'>
            <Image 
            src="/../public/profile-pic.jpg" 
            width={200} 
            height={200}
            className='rounded-full'
            alt="Jamie Catto head-shot" />
        </div>
    )
}

export default CirclePicture