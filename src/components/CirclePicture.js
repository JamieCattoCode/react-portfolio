import Image from 'next/image'

const CirclePicture = () => {
    return (
        <div className='flex justify-center p-9'>
            <Image 
            src="https://i.ibb.co/ydS3J0v/profile-pic.jpg"
            width={200}
            height={200} 
            className='rounded-full w-200 h-200 lg:w-96 lg:h-96'
            alt="Jamie Catto head-shot" />
        </div>
    )
}

export default CirclePicture