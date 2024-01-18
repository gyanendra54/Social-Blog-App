import { TextInput } from 'flowbite-react'
import {Link} from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/*left side*/}
      <div className='flex-1'>
      <Link to="/" className=' font-bold dark:text-white text-4xl'>
      <span className='px-2 py-1 bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 rounded-lg text-white'>
          Social
      </span>
      Blog
  </Link>
  <p className='text-sm mt-5'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem quas ipsum recusandae, dolore ullam atque ea laboriosam? Similique, fuga.
  </p>
      </div>
      <div className='flex-1'>
        <form className='flex flex-col gap-4'>
        <div className=''>
           <label htmlFor='username'>Your username</label>
             <TextInput type='text' placeholder='Username' id='username'/>
        </div>
        <div className=''>
            <label htmlFor='email'>Your email</label>
               <TextInput type='email' placeholder='Email' id='email'/>
        </div>
        <div className=''>
             <label htmlFor='password'>Password</label>
              <TextInput type='password' placeholder='Password' id='password'/>
        </div>
        <button className='px-2 py-1 bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 rounded-lg text-white' type='submit'>
           Sign Up
        </button>
        </form>
        <div className='mt-5 flex gap-2 text-sm'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
            Sign In
          </Link>
        </div>
      </div>
    </div>
    </div>
  )
}
