import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom';
import {BsFacebook, BsInstagram, BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'> 
        <div className='mt-5'>
        <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
        <span className='px-2 py-1 bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 rounded-lg text-white'>
            Social
        </span>
        Blog
    </Link>
        </div>
        <div className='grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6'>
          <div>
          <Footer.Title title='about'/>
          <Footer.LinkGroup col>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
            >
              100 JS Projects
            </Footer.Link>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
            >
              Social Blog
            </Footer.Link>
          </Footer.LinkGroup>
          </div>

          <div>
          <Footer.Title title='Follow us'/>
          <Footer.LinkGroup col>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
            >
              GitHub
            </Footer.Link>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
            >
              LinkedIn
            </Footer.Link>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
            >
              Twitter
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
          
          <div>
          <Footer.Title title='legal'/>
          <Footer.LinkGroup col>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
            >
              Privacy Policy
            </Footer.Link>
            <Footer.Link
            href='https://www.100jsprojects.com'
            target='_blank'
            rel='noopener noreferrer'
            >
              Terms & Conditions
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
        </div>    
        </div>  
        <Footer.Divider/>    
        <div className='w-full sm:flex sm:items-center sm:justify-between '>
          <Footer.Copyright
          href='#'
          by="Social Blog"
          year={new Date().getFullYear()}/>       
         </div>
         <div className='flex gap-6 sm:mt-0 mt-3  sm:justify-center'>
          <Footer.Icon href='#' icon={BsGithub}/>
          <Footer.Icon href='#' icon={BsLinkedin}/>
          <Footer.Icon href='#' icon={BsTwitter}/>
          <Footer.Icon href='#' icon={BsFacebook}/>
          <Footer.Icon href='#' icon={BsInstagram}/>    
         </div>  
      </div>
    </Footer>
  )
}
