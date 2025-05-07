import React from 'react'
import { Outlet } from 'react-router-dom'


export default function AuthLayout() {
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-background'>
            <Outlet />
        </div>
    )
}
