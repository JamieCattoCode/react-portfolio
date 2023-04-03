import Head from 'next/head'
import Navbar from '@/components/Navbar'
import ProfileHeader from '@/components/ProfileHeader'
import Socials from '@/components/Socials'
import CirclePicture from '@/components/CirclePicture'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <>
      <Head>
        <title>Jamie Catto | Full Stack Developer</title>
        <meta name="description" content="Jamie Catto is a full stack developer who works with NodeJS, HTML, CSS, React, and much more." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${darkMode ? 'dark': ''} dark:bg-gray-900`}>
        <section className='px-5 dark:bg-gray-900'>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <ProfileHeader />
          <CirclePicture />
          <Socials />
        </section>

        <section className="lg:py-10 dark:bg-gray-900">
          <Skills />
          <Projects />
        </section>
      </main>
    </>
  )
}
