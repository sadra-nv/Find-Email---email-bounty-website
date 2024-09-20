import Link from 'next/link'
import React from 'react'

export default function CategoryList() {
    return (
        <div className="mb-12">
            <div className="container">
                <div className="flex justify-center gap-10 w-full">
                    <Link
                        href={"/"}
                        className="px-10 py-2 rounded-lg text-xs  bg-gradient-to-t from-[#2E2291] to-[#8F5CE1]"
                    >
                        All Tags
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2">
                        <img className="w-5" src="/icons/Email.svg" alt="" />
                        <h4 className="">Company Email</h4>
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2">
                        <img className="w-5" src="/icons/LeakedDatabase.svg" alt="" />
                        <h4 className="">Leaked Database</h4>
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2">
                        <img className="w-5" src="/icons/news.svg" alt="" />
                        <h4 className="">News</h4>
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2">
                        <img className="w-5" src="/icons/Tools.svg" alt="" />
                        <h4 className="">Tools</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}
