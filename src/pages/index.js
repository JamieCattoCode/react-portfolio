import Head from 'next/head'
import { 
  AiFillTwitterCircle, 
  AiFillLinkedin 
} from 'react-icons/ai'
import Image from 'next/image'
import Navbar from '@/components/Navbar'


export default function Home() {
  return (
    <>
      <Head>
        <title>Jamie Catto | Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='px-5'>
          <Navbar />
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>
              Jamie Catto</h2>
            <h3 className='text-xl py-3'>Full Stack Developer</h3>
            <p className='text-base leading-6 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus diam non.</p>
          </div>
          <div className='text-5xl text-gray-500 flex justify-center gap-6 my-8'>
            <a target='_blank' href='http://twitter.com/CodesJmt'>
              <AiFillTwitterCircle /></a>
            <a><AiFillLinkedin /></a>
          </div>
          <div className='flex justify-center p-10'>
            <Image src="/../public/profile-pic.jpg" width={200} height={200}
            className='rounded-full' />
          </div>
        </section>

        <section className='my-8'>
          <div>
            <h3 className='text-xl text-center p-1'>My Skills</h3>
            <p className='text-base text-center p-5 md:px-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu 
              volutpat odio facilisis mauris. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Ultrices in iaculis nunc 
              sed augue lacus. Aenean sed adipiscing diam donec adipiscing tristique risus.</p>
          </div>
        </section>
      </main>
    </>
  )
}
