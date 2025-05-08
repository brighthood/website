import React from 'react'
import { Outlet } from 'react-router-dom';

export default function DashbordLayout() {
    return (
        <>
            <header>
                sidebar
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}
