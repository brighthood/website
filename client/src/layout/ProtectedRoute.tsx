import { SignedIn } from '@clerk/clerk-react'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function ProtectedRoute() {
    return (
        <SignedIn>
            <Outlet />
        </SignedIn>
    )
}
