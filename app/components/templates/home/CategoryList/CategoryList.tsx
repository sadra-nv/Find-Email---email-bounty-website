import Link from 'next/link'
import React from 'react'

export default function CategoryList() {
    return (
        <div className="mb-12">
            <div className="">
                <div className="flex sm:justify-center gap-6 md:gap-10 w-full overflow-auto">
                    <Link
                        href={"/"}
                        className="px-10 py-2 rounded-lg text-xs ml-6 bg-gradient-to-t from-[#2E2291] to-[#8F5CE1] shrink-0"
                    >
                        All Tags
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2 shrink-0">
                        <img className="w-5" src="/icons/Email.svg" alt="" />
                        <h4 className="text-sm md:text-base">Company Email</h4>
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2 shrink-0">
                        <img className="w-5" src="/icons/LeakedDatabase.svg" alt="" />
                        <h4 className="text-sm md:text-base">Leaked Database</h4>
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2 shrink-0">
                        <img className="w-5" src="/icons/news.svg" alt="" />
                        <h4 className="text-sm md:text-base">News</h4>
                    </Link>
                    <Link href={"/"} className="flex items-center gap-2 shrink-0 mr-6">
                        <img className="w-5" src="/icons/Tools.svg" alt="" />
                        <h4 className="text-sm md:text-base">Tools</h4>
                    </Link>
                </div>
            </div>
        </div>
    )
}
