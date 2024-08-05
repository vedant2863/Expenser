import React from 'react'

function authLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="flex items-center justify-center min-h-screen bg-gray-100">{children}</main>
    )
}

export default authLayout