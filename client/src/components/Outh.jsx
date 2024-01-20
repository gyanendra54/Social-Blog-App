import React from 'react'
import {Button} from 'flowbite-react'
import{AiFillGoogleCircle} from 'react-icons/ai';
import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import {app} from '../redux/firebase'
import {  useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { signInFailure } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
export default function Outh() {
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const auth=getAuth(app)
    const handleGoogleClick=async()=>{
    const provider=new GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'})
    try {
        const resultsFromGoogle=await signInWithPopup(auth, provider)
        console.log(resultsFromGoogle)
        const res = await fetch('/api/auth/google', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name:resultsFromGoogle.user.displayName,
                email: resultsFromGoogle.user.email,
                googlephotoUrl:resultsFromGoogle.user.photoURL
            }),
          });
          const data=await res.json();
          console.log(data)
          if(res.ok){
            dispatch(signInSuccess(data))
            navigate('/');
          }
          
    } catch (error) {
        dispatch(signInFailure(error.message))
    }
    }
  return (
   <Button gradientDuoTone='pinkToOrange' outline onClick={handleGoogleClick}>
    <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
    Continue With Google   
   </Button>
  )
}
