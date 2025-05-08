import { SignIn } from '@clerk/clerk-react'
import React from 'react'

export default function Signin() {
    return (
        <div className="flex justify-center items-center h-screen">
            <SignIn routing="path" path="/sign-up" redirectUrl="/dashboard/profile" />
        </div>
    )
}
