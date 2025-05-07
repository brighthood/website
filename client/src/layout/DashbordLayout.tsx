import React from 'react'
import { useUser } from '@clerk/clerk-react';

export default function DashbordLayout() {


    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
        return <div>Loading...</div>; // or a spinner
    }

    if (!isSignedIn || !user) {
        return <div>Not signed in</div>;
    }

    console.log(user)
    return (
        <div>
            <h1>Welcome, {user.firstName} {user.lastName}!</h1>
            <p>Email: {user.emailAddresses[0].emailAddress}</p>
            {/* Display other user data as needed */}
        </div>
    );
}
