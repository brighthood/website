import { useUser } from '@clerk/clerk-react';
import React from 'react'

export default function Profile() {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>;
    }

    if (!isSignedIn || !user) {
        return <div>Not signed in</div>;
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <h1>Welcome, {user.firstName} {user.lastName}!</h1>
            <p>Email: {user.emailAddresses[0].emailAddress}</p>

        </div>
    )
}
