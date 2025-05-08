import { SignUp } from '@clerk/clerk-react'
import React from 'react'

export default function Signup() {
    return (
        <div className='flex justify-center items-center h-screen'>
            <SignUp routing="path" path="/sign-up" redirectUrl="/dashboard/profile" />
        </div>
    )
}
