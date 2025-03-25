"use client"
import { Award } from 'lucide-react'
import React from 'react'
import Video1 from './Video1'

export default function HomePage() {
    return (
        <div>
            <div id="part1" className='lg:px-40 lg:py-20 p-12 flex xl:flex-row flex-col justify-between'>
                <div className="flex flex-col lg:basis-1/2 lg:pl-28 lg:py-12">
                    {/* //BUTTON */}
                    <div className="flex bg-[#221D21] items-center px-4 py-2 w-60 rounded-lg my-2">
                        <div className="basis-1/4">
                            <Award size={36} color='#ffffff' />
                        </div>
                        <div className="flex flex-col basis-3/4">
                            <p className='text-white text-xs'>Product hunt</p>
                            <p className='text-white text-sm font-bold'>#2 Product of the day</p>
                        </div>
                    </div>
                    <div className="border py-2 px-4 border-zinc-900 rounded-2xl w-2/3 my-4">
                        <p className='text-zinc-700'>Get inspired & unlock the full potential of video marketing</p>
                    </div>
                    <p className="lg:text-6xl text-4xl font-sans font-bold text-white  my-4" id="mainHEading">
                        Create product videos that convert
                    </p>
                    <p className="text-xl font-sans text-zinc-500 w-11/12" >
                        Learn from more than 100+ hand selected videos of companies that create engaging, shareable product videos that not only boost brand awareness but also convert customers.
                    </p>
                    <div id="buttonrow" className='my-4'>
                        <button className='px-4 py-4 rounded-lg border border-zinc-700 lg:my-4 text-white '>Get access to 100+ videos now</button>
                        <button className='px-4 py-4 lg:mx-4 rounded-lg border border-zinc-700 lg:my-4 my-2 text-white '>Learn more</button>
                    </div>
                    <div id="imageSection" className='my-8'>
                        <div className="flex flex-row">
                            <div id="image">
                                <img src='https://avatars.githubusercontent.com/u/1665273?v=4' className='lg:w-20 w-28 rounded-lg' />
                            </div>
                            <div className="flex flex-col ">
                                <p className='text-sm font-sans text-zinc-500 lg:w-1/2 mx-4'>“I am about to launch a new product and needed inspiration for creating our new Product Hunt launch video. This site has been an amazing resource for us.”</p>
                                <p className='text-sm my-2 font-sans text-white lg:w-1/2 mx-4'>Alex Styl, founder of Composables</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex  basis-1/2">
                    <div className="flex flex-col lg:mx-12">
                        <Video1 className="px-2"/>
                        <Video1 className="px-2"/>
                        <Video1 className="lg:block hidden "/>
                    </div>
                    <div className="flex flex-col lg:mx-12 my-12">
                        <Video1 className="px-2"/>
                        <Video1 className="px-2"/>
                        <Video1 className="lg:block hidden"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
