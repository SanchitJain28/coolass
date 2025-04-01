"use client"
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center p-4'>
            <div className="flex p-4">
                <img
                    src='https://www.productvideoexamples.com/_nuxt/product_video_examples_logo.ce3a8ea9.png'
                    className='w-52 lg:mx-20' />
            </div>
            <div className="flex items-center lg:mx-8">
                <a className='text-white mx-4 text-lg lg:inline hidden'>Features</a>
                <a className='text-white mx-4 text-lg lg:inline hidden'>Blog</a>
                <a className='text-white mx-4 text-lg lg:inline hidden'>Pricing</a>
                <a className='text-white mx-4 text-lg lg:inline hidden'>Login</a>
                <div className="p-[1px] bg-gradient-to-r from-[#5246E6] via-[#C847EE] to-[#F7711D]  ">
                <button className='py-2 px-4 hover:bg-transparent transition bg-black lg:inline hidden border-zinc-400  text-white'>
                    Get access now
                    </button>
                </div>
                
            </div>
        </div>
    )
}
