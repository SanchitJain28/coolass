"use client"
import { Award } from 'lucide-react'
import React from 'react'

export default function HomePage() {
    return (
        <div>
            <div id="part1" className='lg:px-60 py-40 p-8 flex justify-between'>
                <div className="flex flex-col basis-1/2">
                    {/* //BUTTON */}
                    <div className="flex bg-[#221D21] px-4 py-2 w-1/3 rounded-lg my-4">
                        <div className="basis-1/4">
                        <Award size={48} color='#ffffff'/>                     
                        </div>
                        <div className="flex flex-col basis-3/4">
                            <p className='text-white'>Product hunt</p>
                            <p className='text-white'>#2 Product of the day</p>
                        </div>
                    </div>
                    <div className="border py-2 px-4 border-zinc-900 rounded-2xl w-2/3 my-4">
                       <p className='text-zinc-700'>Get inspired & unlock the full potential of video marketing</p> 
                    </div>
                    <p className="text-6xl font-sans font-bold text-white w-5/6 my-4" id="mainHEading">
                    Create product videos that convert
                    </p>
                    <p className="text-xl font-sans text-zinc-500 w-3/4" >
                    Learn from more than 100+ hand selected videos of companies that create engaging, shareable product videos that not only boost brand awareness but also convert customers.
                    </p>
                    <div id="buttonrow">
                        <button></button>
                    </div>
                </div>
                <div className="flex flex-col basis-1/2">

                </div>
            </div>
        </div>
    )
}
