import { Navbar, TextInput } from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import {AiOutlineSearch} from 'react-icons/ai';
import {FaMoon} from 'react-icons/fa';
export default function Header() {
  const path =useLocation().pathname;
  return (
  <>
  <Navbar className='border-b-2'>
    <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 rounded-lg text-white'>
            Social
        </span>
        Blog
    </Link>
    <from>
        <TextInput
        type='text'
        placeholder='Search...'
        rightIcon={AiOutlineSearch}
        className='hidden lg:inline'
        />
    </from>
    <button className='w-7 h-8 lg:hidden border-2 rounded-lg'  pill>
       <AiOutlineSearch/>
    </button>
    <div className='flex gap-2 md:order-2'>
      <button className='w-7 h-9 mt-1 hidden sm:inline' pill>
        <FaMoon/>
      </button>
      <Link to='/sign-in'>
        <button className='mt-2 border-2 rounded-lg px-2 bg-lime-500 text-cyan-50 hover:bg-lime-700' outline>
            Sign In
        </button>
      </Link>
      <Navbar.Toggle></Navbar.Toggle>
    </div>
    <Navbar.Collapse>
      <Navbar.Link active={path==="/"} as={'div'}>
        <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path==="/about"} as={'div'}>
        <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path==="/projects"} as={'div'}>
        <Link to="/projects">Projects</Link>
        </Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  </>
  )
}
