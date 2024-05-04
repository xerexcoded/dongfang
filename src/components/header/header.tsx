import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const header = () => {
    return (
        <header className="bg-cream-light ">
            <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}

                <Link href="/" className="flex items-center text-xl font-semibold">
                    <Image src="/dongfangLogo.png" alt="Logo" className="w-12 h-12 mr-2" width={1920} height={1080} />
                    Dong Fang
                </Link>

                {/* Navigation Menu */}
                <div className="flex items-center space-x-6">
                    <Link href="/menu" className="text-gray-700 hover:text-red-500">Menu</Link>
                    <Link href="/reservation" className="text-gray-700 hover:text-red-500">
                        Reservation
                    </Link>
                </div>

                {/* Language Selector */}
                <div className="relative">
                    <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>EN</option>
                        <option>FR</option>
                        <option>CN</option>
                    </select>
                </div>
            </nav>
        </header>
    )
}

export default header