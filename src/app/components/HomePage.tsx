"use client";
import {
  Award,
  CornerDownRight,
  GraduationCap,
  Heart,
  Layers,
  Lightbulb,
} from "lucide-react";
import React from "react";
import Video1 from "./Video1";

export default function HomePage() {
  return (
    <div>
      {/* PART1  */}
      <div
        id="part1"
        className="lg:px-40 lg:py-20 p-12 flex xl:flex-row flex-col justify-between"
      >
        <div className="flex flex-col lg:basis-1/2 lg:pl-28 lg:py-12  ">
          {/* //BUTTON */}
          <div className="flex bg-[#221D21] items-center px-4 py-2 w-60 rounded-lg my-2">
            <div className="basis-1/4">
              <Award size={36} color="#ffffff" />
            </div>
            <div className="flex flex-col basis-3/4">
              <p className="text-white text-xs">Product hunt</p>
              <p className="text-white text-sm font-bold">
                #2 Product of the day
              </p>
            </div>
          </div>
          <div className="border py-2 px-4 border-zinc-900 rounded-2xl w-2/3 my-4">
            <p className="text-zinc-700">
              Get inspired & unlock the full potential of video marketing
            </p>
          </div>
          <p
            className="lg:text-6xl text-4xl font-sans font-bold text-white  my-4"
            id="mainHEading"
          >
            Create product videos that
            <span className="bg-gradient-to-r from-[#E65711] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent">
              {" "}
              Convert
            </span>
          </p>
          <p className="text-xl font-sans text-zinc-500 w-11/12">
            Learn from more than 100+ hand selected videos of companies that
            create engaging, shareable product videos that not only boost brand
            awareness but also convert customers.
          </p>
          <div id="buttonrow" className="my-4">
            <button className="px-4 py-4 rounded-lg border border-zinc-700 lg:my-4 text-white bg-gradient-to-r from-[#E7552C] via-[#DA48D6] to-[#5446E5]">
              Get access to 100+ videos now
            </button>
            <button className="px-4 py-4 lg:mx-4 rounded-lg border border-zinc-700 lg:my-4 my-2 text-white ">
              Learn more
            </button>
          </div>
          <div id="imageSection" className="my-8">
            <div className="flex flex-row">
              <div id="image">
                <img
                  src="https://avatars.githubusercontent.com/u/1665273?v=4"
                  className="lg:w-20 w-28 rounded-lg"
                />
              </div>
              <div className="flex flex-col ">
                <p className="text-sm font-sans text-zinc-500 lg:w-1/2 mx-4">
                  “I am about to launch a new product and needed inspiration for
                  creating our new Product Hunt launch video. This site has been
                  an amazing resource for us.”
                </p>
                <p className="text-sm my-2 font-sans text-white lg:w-1/2 mx-4">
                  Alex Styl, founder of Composables
                </p>
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

      {/* PART2  */}
      <div
        id="part2"
        className=" lg:px-40 xl:w-1/2 text-center px-12 font-sans mx-auto"
      >
       
          <p className="text-white xl:text-5xl my-8 text-3xl text-center font-bold my-4 ">
            Finding inspiration is{" "}
            <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">
              hard.
            </span>
            <br className="lg:inline hidden" /> Stop wasting your time.
          </p>
        <p className="text-zinc-400 lg:text-xl my-4 ">
          You are a SaaS founder, marketing agency or video freelancer and are
          planning to create a product video that will stand out from the crowd?
        </p>
        <p className="text-zinc-400 lg:text-xl text-sm my-8 ">
          We got you covered.
        </p>
      </div>

      {/* PART3  */}
      <div
        id="part3 "
        className="lg:px-40  flex xl:flex-row flex-col px-12 py-12 xl:items-center"
      >
        <div className="flex flex-col basis-4/12 ">
          <div className="my-4">
            <div className="flex items-center">
              <div className="bg-[#0F172A] p-2 rounded-lg ">
                <Lightbulb
                  color="#ffffff"
                  size={25}
                  className="stroke-[#B543C9]"
                />
              </div>
              <p className="bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent text-xl mx-2">
                We did the hard work for you
              </p>
            </div>

            <p className="text-zinc-400 text my-4 ">
              Stop wasting time searching for video inspiration.
            </p>
            <p className="text-zinc-400 text my-4 ">
              We spent countless weeks carefully collecting the best SaaS videos
              from the web so you don&apos;t have to.
            </p>
            <p className="text-zinc-400 text my-4">
              Our library is growing by the day.
            </p>
          </div>
          <div className="my-4">
            <div className="flex items-center">
              <div className="bg-[#0F172A] p-2 rounded-lg ">
                <Lightbulb
                  color="#ffffff"
                  size={25}
                  className="stroke-[#B543C9]"
                />
              </div>
              <p className="bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent text-xl mx-2">
                Filter based on your needs
              </p>
            </div>

            <p className="text-zinc-400 text my-4 ">
              We have conveniently categorized all videos based on a number of
              features such as length, video type and industry so you can find
              videos that fit your intended use case.
            </p>
            <p className="text-zinc-400 text my-4 ">
              Looking for action-packed 30s videos or need a 2-minute explainer
              demo video?
            </p>
            <p className="text-zinc-400 text my-4">
              We&#39;ve got you covered.
            </p>
          </div>
          <div className="my-4">
            <div className="flex items-center">
              <div className="bg-[#0F172A] p-2 rounded-lg ">
                <Lightbulb
                  color="#ffffff"
                  size={25}
                  className="stroke-[#B543C9]"
                />
              </div>
              <p className="bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent text-xl mx-2">
                Pay once, love forever
              </p>
            </div>

            <p className="text-zinc-400 text my-4 ">
              Not another annoying subscription. Get lifetime access to our
              library of high quality SaaS videos for single one-time payment.
              ROI guaranteed. .
            </p>
          </div>
        </div>
        <div className="mx-20 basis-1/12 my-8">
          <CornerDownRight
            color="#ffffff"
            size={100}
            className="xl:block hidden"
          />
        </div>
        <div className="bg-[#181546] pb-4 pl-4 rounded-xl -mx-2 -my-2">
          <div className="bg-[#512479] pb-4 pl-2 rounded-xl -mx-2 -my-2">
            <div className="basis-7/12 bg-gradient-to-r from-[#F77025] via-[#E65895] to-[#5246E5] pt-8 pl-8 rounded-xl shadow-lg">
              <video
                className="rounded-t-lg -my-2"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src="pf-app_demo_vid.mp4 " type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>

      {/* PART4  */}
      <div
        id="part4"
        className="text-center lg:py-16 py-12 flex lg:px-0 px-8 flex-col justify-center items-center"
      >
        <p className="text-white lgtext-5xl text-3xl font-bold my-4 ">
          The best tools for creating SaaS
          <br /> product videos{" "}
          <span className="bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent underline decoration-[#0E4D3E]">
            included
          </span>
        </p>
        <p className="text-zinc-400 text-xl my-4 lg:w-1/3">
          Ever wondered how SaaS companies create their amazing product videos?
          We&apos;ve compiled the ultimate list of best tools that will help you
          create outstanding SaaS product videos with little to no effort.
        </p>
        <img src="https://www.productvideoexamples.com/_nuxt/toolsmarketing.11c3fa7d.jpg" />
      </div>

      {/* PART5  */}
      <div
        id="part5"
        className="text-center py-20 lg:px-0 px-8 flex flex-col justify-center items-center font-sans"
      >
        <p className="text-white lg:text-5xl text-3xl font-bold my-4 ">
          People{" "}
          <span className="bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent underline decoration-[#3F3087]">
            love
          </span>{" "}
          to watch videos
        </p>
        <p className="text-zinc-400 text-xl my-4 lg:w-1/2 xl:1/4">
          SaaS businesses use video as an important component of their
          interactions with customers. Video is a powerful tool for building
          trust, educating, and engaging with your audience.
        </p>
        <div className="flex py-12 flex-col lg:flex-row justify-center items-center ">
          <div className="flex flex-col basis-1/4 items-center lg:border-r-[1px] border-none border-zinc-600 px-16 py-12">
            <p className="bg-gradient-to-r from-[#97F2B8] via-[#8BF0AF] to-[#65BFCD] bg-clip-text text-transparent text-6xl my-2 font-bold">
              202%
            </p>
            <p className="text-white font-bold ">Video Consumption Rate</p>
            <p className="text-zinc-400 my-4 text-sm">
              More people are watching videos online than ever before. In fact,
              their video consumption has more than doubled since 2018.
            </p>
          </div>
          <div className="flex flex-col basis-1/4 justify-center items-center px-16">
            <p className="bg-gradient-to-r from-[#76D1FB] via-[#72D0FB] to-[#60CAF9] bg-clip-text text-transparent text-6xl my-2 font-bold">
              87%
            </p>
            <p className="text-white font-bold ">
              Marketers report a positive ROI
            </p>
            <p className="text-zinc-400 my-4 text-sm">
              Marketers are extremely optimistic about the return on investment
              provided by video, due to its big influence on traffic, sales, and
              education.
            </p>
          </div>
        </div>
      </div>
      {/* PART6  */}
      <div id="part6" className="flex justify-center pb-20">
        <img src="https://www.productvideoexamples.com/_nuxt/videosmarketing.3301effd.jpg" />
      </div>

      {/* PART7  */}
      <div
        id="part7"
        className="flex flex-col justify-center items-center py-8 lg:px-12  mx-auto lg:w-2/3"
      >
        <p className="text-white lg:text-5xl text-3xl font-bold my-4 ">
          Pay{" "}
          <span className="bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent">
            once
          </span>{" "}
          use forever
        </p>
        <div className="flex xl:flex-row flex-col py-8 lg:px-0 px-4">
          <div className="flex flex-col justify center bg-[#030405] lg:pr-32 lg:pl-8 px-4 py-8  rounded-lg ">
            <p className="text-white lg:text-4xl text-3xl  my-4 ">
              Learn from a growing library
              <br /> of{" "}
              <span className="bg-gradient-to-r from-[#D24E1C] via-[#C540C8] to-[#4E3FD0] bg-clip-text text-transparent">
                product videos
              </span>
            </p>
            <div className="flex items-center my-4">
              <div className="bg-[#F79533] p-2 rounded-lg mr-4">
                <Layers color="#FFFFFF" />
              </div>
              <div className="flex flex-col">
                <p className="text-white font-bold lg:text-lg">
                  134+ product video examples
                </p>
                <p className="text-zinc-500 lg:text text-sm">
                  Full access to hundreds of product video examples for
                  inspiration.
                </p>
              </div>
            </div>
            <div className="flex items-center my-4">
              <div className="bg-[#F37055] p-2 rounded-lg mr-4">
                <GraduationCap color="#FFFFFF" />
              </div>
              <div className="flex flex-col">
                <p className="text-white font-bold lg:text-lg">
                  Tools and Tutorials
                </p>
                <p className="text-zinc-500 text-sm">
                  Get access to tools and tutorials (soon) on how you can easily
                  create your own engaging product videos with little effort.
                </p>
              </div>
            </div>
            <div className="flex my-4">
              <div className="bg-[#EF4E7B] p-2 rounded-lg mr-4 h-10">
                <Heart color="#ffffff" />
              </div>
              <div className="flex flex-col items-start">
                <p className="text-white font-bold lg:text-lg">
                  Pay once, love forever
                </p>
                <p className="text-zinc-500 text-sm">
                  Not another annoying subscription. Get lifetime access to our
                  library of high quality product videos for single one-time
                  payment. ROI guaranteed.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col bg-[#111827] basis-1/2 p-8 items-center mx-2 rounded-lg"
            id=""
          >
            <button className="bg-gradient-to-r from-[#E85629] via-[#C746ED] to-[#5546E5] text-sm text-white px-4 rounded-xl py-2 font-bold">
              LIMITED TIME OFFER
            </button>
            <div className="flex flex-col py-4 justify-center items-center">
              <p className="text-white text-4xl font-bold my-2">$29</p>
              <p className="text-zinc-400 my-1">
                One-time payment, access forever!
              </p>
              <p className="text-zinc-400 my-1">
                <span className="bg-gradient-to-r from-[#B667CF] via-[#9D73DB] to-[#686CC0] text-transparent bg-clip-text">
                  Forever
                </span>{" "}
                full access
              </p>
              <p className="text-green-600 text-xs my-1">
                {" "}
                Unlimited views and access.
              </p>
            </div>
            <button className="px-6 py-3 text-white bg-black rounded-full border-[1px] border-red-600">
              Get full access now
            </button>
            <div className="flex flex-col items-center justify-center py-6">
              <p className="text-zinc-500 ">14 Days Money Back Guarantee</p>
              <p className="text-zinc-700 text-center text-sm">
                Buy clicking the purchase button above you agree with our terms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PART8  */}

      <div
        className="lg:w-1/3 mx-auto py-12 lg:px-0 px-8 flex flex-col items-center"
        id="part8"
      >
        <p className="text-zinc-400 text-center lg:text-lg text-sm">
          Discovering Product Video Examples was a game-changer for our product
          launch! The platform saved us countless hours searching for inspiring
          videos. With their incredible library, we found the perfect
          inspiration for our Product Hunt launch in no time. Product Video
          Examples is truly the ultimate site for creative SaaS video
          inspiration!&quot;
        </p>
        <img
          src="https://tailscan.com/erwin.jpg"
          className="rounded-full w-12 h-12 mt-8 mv-4"
        />
        <p className="font-sans my-2 font-light text-zinc-400">
          Erwin, CEO of Tailscan
        </p>
        <img
          src="https://tailscan.com/mediakit/4_Colour_Logo.png"
          alt=""
          className="w-28"
        />
      </div>

      {/* PART9  */}

      <div className="" id="">
        <img
          src="https://www.productvideoexamples.com/_nuxt/gradient-bg-footer.51e46e1d.svg"
          className="z-0 absolute xl:block hidden"
        />
        <div className="flex xl:flex-row flex-col absolute  justify-center mx-auto py-12 lg:px-40 px-4">
          <div className="flex flex-col px-4 basis-1/2 lg:px-12">
            <img
              src="https://www.productvideoexamples.com/_nuxt/product_video_examples_logo.ce3a8ea9.png"
              alt=""
              className="w-48 -ml-2"
            />
            <p className="text-zinc-400 lg:text-sm text-xs my-4">
              Learn from more than 100+ carefully selected videos of companies
              that creat engaging, shareable videos that not only boost brand
              awareness but also convert customers.
            </p>
            <div className="inline-flex bg-[#221D21] items-center px-4 py-2 w-fit rounded-lg my-2">
              <div className="">
                <Award size={24} color="#ffffff" />
              </div>
              <div className="flex flex-col ">
                <p className="text-white text-xs">Product hunt</p>
                <p className="text-white text-sm font-bold">
                  #2 Product of the day
                </p>
              </div>
            </div>
            <p className="text-zinc-500">
              © Copyright 2025. All Rights Reserved by Seven Degrees Labs LLC.
            </p>
          </div>
          <div className="flex flex-col basis-1/4 lg:px-12 px-4 py-4">
            <p className="text-zinc-400">Company</p>
            <p className="my-2 text-white">Features</p>
            <p className="my-2 text-white">Pricing</p>
            <p className="my-2 text-white">Blog</p>
            <p className="my-2 text-white">Terms</p>
            <p className="my-2 text-white">Privacy</p>
          </div>
          <div className="flex flex-col basis-1/4 lg:px-12 px-4 py-4">
            <p className="text-zinc-400">Support</p>
            <p className="my-2 text-white">Contact us</p>
          </div>
          <div className="flex flex-col basis-1/4 lg:px-12 px-4 py-4">
            <p className="text-zinc-400">About</p>
            <p className="my-2 text-white">Made by Sanchit jain ツ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
