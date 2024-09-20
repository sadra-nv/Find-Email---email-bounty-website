import React from 'react'

export default function HeroSection() {
    return (
        <div>
            <div className="container">
                <div className="relative overflow-y-hidden pt-10 mt-40">
                    {/* <video src="/videos/q-c3d7becf.webm" loop={true} autoPlay={true}></video> */}
                    <video autoPlay muted loop>
                        <source src="/videos/q-c3d7becf.webm" type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                    <img src="/vectors/Polygon 1.svg" alt="" className='absolute bottom-60 right-0 left-0 mx-auto' />
                </div>
            </div>
        </div>
    )
}