import copy from '../utils/copy.json'

const ProfileHeader = () => {
    const { profileHeader } = copy
    return (
        <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>
                {profileHeader.mainTitle}
            </h2>
            <h3 className='text-xl py-3 dark:text-slate-400'>{profileHeader.subTitle}</h3>
            <p className='text-base leading-6 text-gray-800 dark:text-slate-500'>{profileHeader.subSubTitle}</p>
        </div>
    )
}

export default ProfileHeader