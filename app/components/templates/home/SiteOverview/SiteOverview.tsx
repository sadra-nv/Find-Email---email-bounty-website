import React from 'react'

export default function SiteOverview() {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col pb-10">
                    <div className="py-6 mx-auto">
                        <img src="/images/q-7bea4872.png.png" alt="" />
                    </div>
                    <div className="flex justify-center relative items-center">
                        <img src="/vectors/Background 1.png" className='absolute h-full' alt="" />
                        <div className="absolute inset-0 mx-auto h-full aspect-square pointer-events-none research-radar-scanner-wrapper-visible m-auto animate-normal" >
                            <div className="absolute h-full w-full -rotate-[201deg] research-radar-scanner">
                                <div className="h-full w-full rounded-full before:content-[''] before:absolute before:w-full before:h-full before:bg-[linear-gradient(267deg,rgba(99,102,241,.4)13.23%,rgba(3,0,20,0)50%)] before:rounded-full before:block"></div>
                            </div>
                        </div>
                        <img src="/icons/Group 238477.svg" className='absolute' alt="" />
                        <div className="grid grid-cols-2 w-full items-center justify-center">
                            <div className="flex flex-col justify-center items-center px-20 py-12">
                                <img src="/vectors/11281907 1.svg" alt="" />
                                <span className='text-xl mt-2'>
                                    2,028,741,188
                                </span>
                                <span className='text-sm mt-2'>
                                    Logs [ url:login:pass ] Record
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center px-20 py-12">
                                <img src="/vectors/m003t0635_i_business_growth_06oct_22 1.svg" alt="" />
                                <span className='text-xl mt-2'>
                                    76,523
                                </span>
                                <span className='text-sm mt-2'>
                                    Total Search Record
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center px-20 py-12">
                                <img src="/vectors/Email 2.svg" alt="" />
                                <span className='text-xl mt-2'>
                                    496,580,230
                                </span>
                                <span className='text-sm mt-2'>
                                    Company Email Record
                                </span>
                            </div>
                            <div className="flex flex-col justify-center items-center px-20 py-12">
                                <img src="/vectors/data_management_10 1.svg" alt="" />
                                <span className='text-xl mt-2'>
                                    6,117,822,935
                                </span>
                                <span className='text-sm mt-2'>
                                    Leak database Record
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
