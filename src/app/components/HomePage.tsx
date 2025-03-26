"use client"
import { Award, CornerDownRight, Lightbulb } from 'lucide-react'
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
                        Create product videos that
                        <span className='bg-gradient-to-r from-[#E65711] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent'> Convert</span>
                    </p>
                    <p className="text-xl font-sans text-zinc-500 w-11/12" >
                        Learn from more than 100+ hand selected videos of companies that create engaging, shareable product videos that not only boost brand awareness but also convert customers.
                    </p>
                    <div id="buttonrow" className='my-4'>
                        <button className='px-4 py-4 rounded-lg border border-zinc-700 lg:my-4 text-white bg-gradient-to-r from-[#E7552C] via-[#DA48D6] to-[#5446E5]'>Get access to 100+ videos now</button>
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
                        <Video1 className="px-2" />
                        <Video1 className="px-2" />
                        <Video1 className="lg:block hidden " />
                    </div>
                    <div className="flex flex-col lg:mx-12 my-12">
                        <Video1 className="px-2" />
                        <Video1 className="px-2" />
                        <Video1 className="lg:block hidden" />
                    </div>
                </div>
            </div>
            <div id='part2' className=" lg:px-40 lg:w-1/2 text-center px-12 font-sans mx-auto" >
                <div className="flex">
                    <p className='text-white lg:text-5xl text-3xl font-bold my-4 '>Finding inspiration is <span
                        className='bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent'>
                        hard.
                    </span>
                        <br className='lg:inline hidden'/> Stop wasting your time.</p>
                </div>
                <p className='text-zinc-400 lg:text-xl my-4 '>You are a SaaS founder, marketing agency or video freelancer and are planning to create a product video that will stand out from the crowd?</p>
                <p className='text-zinc-400 lg:text-xl text-sm my-8 '>We got you covered.</p>
            </div>
            <div id="part3 " className='lg:px-80  flex xl:flex-row flex-col p-8 xl:items-center'>
                <div className="flex flex-col basis-4/12 ">
                    <div className="my-4">
                        <div className="flex">
                            <Lightbulb color='#ffffff' size={30} className='' />
                            <p className='bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent text-xl mx-2'>We did the hard work for you</p>
                        </div>

                        <p className='text-zinc-400 text my-4 '>
                            Stop wasting time searching for video inspiration.
                        </p>
                        <p className='text-zinc-400 text my-4 '>
                            We spent countless weeks carefully collecting the best SaaS videos from the web so you don&apos;t have to.
                        </p>
                        <p className='text-zinc-400 text my-4'>
                            Our library is growing by the day.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className='bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent text-xl mx-2'>Filter based on your needs</p>
                        <p className='text-zinc-400 text my-4 '>
                            We have conveniently categorized all videos based on a number of features such as length, video type and industry so you can find videos that fit your intended use case.
                        </p>
                        <p className='text-zinc-400 text my-4 '>
                            Looking for action-packed 30s videos or need a 2-minute explainer demo video?
                        </p>
                        <p className='text-zinc-400 text my-4'>
                            We&#39;ve got you covered.
                        </p>
                    </div>
                    <div className="my-4">
                        <p className='bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent text-xl mx-2'>Pay once, love forever</p>
                        <p className='text-zinc-400 text my-4 '>
                            Not another annoying subscription. Get lifetime access to our library of high quality SaaS videos for single one-time payment. ROI guaranteed.                         .
                        </p>

                    </div>
                </div>
                <div className="mx-20 basis-1/12">
                    <CornerDownRight color='#ffffff' size={100} />
                </div>
                <div className="basis-7/12">
                    <video className="lg:my-8 my-4 lg:mx-0  lg:rounded-lg rounded-2xl shadow-lg"
                        autoPlay
                        muted
                        loop
                        playsInline>
                        <source src="pf-app_demo_vid.mp4 " type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div id="part4" className='text-center py-20 flex flex-col justify-center items-center'>
                <p className='text-white text-5xl font-bold my-4 '>
                    The best tools for creating SaaS<br /> product videos <span className='bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent underline decoration-[#0E4D3E]'>
                        included
                    </span>
                </p>
                <p className='text-zinc-400 text-xl my-4 w-1/3'>Ever wondered how SaaS companies create their amazing product videos? We&apos;ve compiled the ultimate list of best tools that will help you create outstanding SaaS product videos with little to no effort.</p>
                <img src='https://www.productvideoexamples.com/_nuxt/toolsmarketing.11c3fa7d.jpg' />
            </div>
            <div id="part5" className='text-center py-20 flex flex-col justify-center items-center font-sans'>
                <p className='text-white text-5xl font-bold my-4 ' >
                    People <span className='bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent underline decoration-[#3F3087]'>
                        love</span> to watch videos
                </p>
                <p className='text-zinc-400 text-xl my-4 w-1/3'>SaaS businesses use video as an important component of their interactions with customers. Video is a powerful tool for building trust, educating, and engaging with your audience.</p>
                <div className="flex py-12 flex-row justify-center items-center ">
                    <div className="flex flex-col basis-1/4 items-center border-r-[1px] border-zinc-600 px-16 py-12">
                        <p className='bg-gradient-to-r from-[#97F2B8] via-[#8BF0AF] to-[#65BFCD] bg-clip-text text-transparent text-6xl my-2 font-bold'>202%</p>
                        <p className='text-white font-bold '>Video Consumption Rate
                        </p>
                        <p className='text-zinc-400 my-4 text-sm'>More people are watching videos online than ever before. In fact, their video consumption has more than doubled since 2018.</p>
                    </div>
                    <div className="flex flex-col basis-1/4 justify-center items-center px-16">
                        <p className='bg-gradient-to-r from-[#76D1FB] via-[#72D0FB] to-[#60CAF9] bg-clip-text text-transparent text-6xl my-2 font-bold'>87%</p>
                        <p className='text-white font-bold '>Marketers report a positive ROI
                        </p>
                        <p className='text-zinc-400 my-4 text-sm'>Marketers are extremely optimistic about the return on investment provided by video, due to its big influence on traffic, sales, and education.</p>
                    </div>
                </div>
            </div>
            <div id="part6" className="flex justify-center pb-20">
                <img src='https://www.productvideoexamples.com/_nuxt/videosmarketing.3301effd.jpg'/>
            </div>
        </div>
    )
}
