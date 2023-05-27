import { BsFillMoonStarsFill } from 'react-icons/bs'

const cvLink = 'https://drive.google.com/file/d/1eaouZPaEMcRqp2aP9QNIT4MvwPSM4dYD/view'

const Navbar = ({ darkMode, setDarkMode }) => {
    return (
        <nav className='py-10 md:px-6 flex justify-between'>
            <h1 className='text-2xl font-bebas dark:text-slate-400'>JMT Codes</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-slate-400' />
              </li>
              <li>
                <a href={cvLink} target='_blank' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'>
                My CV
                </a>
              </li>
            </ul>
          </nav>
    )
}

export default Navbar