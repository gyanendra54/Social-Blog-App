import { Alert, Spinner, TextInput, Button } from 'flowbite-react'
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import Outh from '../components/Outh';
export default function SignUp() {
  const [formData, setFormData]=useState({});
  const [errorMessage, setErrorMessages]=useState([null]);
  const [loading, setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({...formData, [e.target.id]:e.target.value.trim()})
  }
  console.log(formData);
  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
      return setErrorMessages("please fil out all fields.");
    }
    try {
      setLoading(true);
      setErrorMessages(null);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data=await res.json();
      if(data.success===false){
        return setErrorMessages(data.message);
      }
      setLoading(false);
      if(res.ok){
        navigate('/sign-in');
      }
    } catch (error) {
      setErrorMessages(error.message);
    }
  }
  return (
    <div className='min-h-screen mt-20'>
    <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/*left side*/}
      <div className='flex-1'>
      <Link to="/" className=' font-bold dark:text-white text-4xl'>
      <span className='px-2 py-1 bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 rounded-lg text-white  hover:from-pink-500 hover:to-yellow-500'>
          Social
      </span>
      Blog
  </Link>
  <p className='text-sm mt-5'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis exercitationem quas ipsum recusandae, dolore ullam atque ea laboriosam? Similique, fuga.
  </p>
      </div>
      <div className='flex-1'>
        <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className=''>
           <label htmlFor='username'>Your username</label>
             <TextInput type='text' placeholder='Username' id='username'onChange={handleChange}/>
        </div>
        <div className=''>
            <label htmlFor='email'>Your email</label>
               <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/>
        </div>
        <div className=''>
             <label htmlFor='password'>Password</label>
              <TextInput type='password' placeholder='Password' id='password'onChange={handleChange}/>
        </div>
        <Button className='px-2 py-1 bg-gradient-to-r from-orange-500 via-gray-500 to-green-500 rounded-lg text-white  hover:from-pink-500 hover:to-yellow-500' type='submit' disabled={loading}>
          {
            loading ? (
             <>
              <Spinner size='sm'/>
              <span className='pl-3'>Loading....</span>
             </>
            ): 'Sign Up'
          }           
        </Button>
        <Outh/>
        </form>
        <div className='mt-5 flex gap-2 text-sm'>
          <span>Have an account?</span>
          <Link to='/sign-in' className='text-blue-500'>
            Sign In
          </Link>
        </div>
       {
         errorMessage && (
          <Alert className='mt-5 text-red-500 text-sm'>
            {errorMessage}
          </Alert>
        )
       }
      </div>
    </div>
    </div>
  )
}
