"use client"
import React from 'react'

export default function Navbar() {
    return (
        <div className='flex justify-between items-center'>
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
                <button className='py-2 px-4 border lg:inline hidden border-zinc-400 mx-4 text-white'>
                    Get access now
                    </button>
            </div>
        </div>
    )
}
