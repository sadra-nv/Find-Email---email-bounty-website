import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header>
            <div className="container">
                <div className="flex justify-between items-center py-12">
                    <Link href={'/'} className='flex items-center gap-2.5'>
                        <img src="/images/logo.svg" alt="" />
                        <h4 className='text-xl text-white font-bold'>
                            FindEmail
                        </h4>
                    </Link>
                    <nav>
                        <ul className='flex items-center gap-6 bg-white/15 rounded-xl text-white text-sm px-6 py-5'>
                            <li>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <img src="/icons/Group.svg" alt="" />
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={'/blog'} className='flex items-center gap-1'>
                                    <img src="/icons/8 1.svg" alt="" />
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <img src="/icons/Group 238340.svg" alt="" />
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <img src="/icons/9079356 1.svg" alt="" />
                                    Online Tools
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <img src="/icons/11 1.svg" alt="" />
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href={'/'} className='flex items-center gap-1'>
                                    <img src="/icons/Customer Support 1.svg" alt="" />
                                    Contact us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <button>
                        <Link href={'/'} className='flex items-center gap-1 p-5 rounded-lg text-xs text-white bg-gradient-to-t from-[#2E2291] to-[#8F5CE1]'>
                            Login/Register
                            <img src="/icons/13 1.svg" alt="" />
                        </Link>
                    </button>
                </div>
            </div>
        </header>
    )
}
