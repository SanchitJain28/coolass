import React from 'react'

export default function Video1({className}) {
    return (
        <div>
            <video className={`w-full max-w-md lg:my-8 my-4 lg:mx-0  lg:rounded-lg rounded-2xl shadow-lg ${className}`}
                autoPlay
                muted
                loop
                playsInline>
                <source src="pf-demo_vid_01_optim (1).mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}
