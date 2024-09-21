import { SignIn } from '@clerk/clerk-react'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='auth flex items-center justify-center inset-0'>
      <SignIn/>
    </div>
  )
}

export default SignInPage