import React from 'react'

function Hero() {
  return (
    <div className='bg-[url(https://images.pexels.com/photos/31581062/pexels-photo-31581062/free-photo-of-pink-ceramic-plate-on-tiled-surface.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)]
     bg-cover h-screen bg-bg-center'
    >
        <div className='flex flex-col justify-center items-center font-extralight gap-10 backdrop-brightness-20 h-[80vh] text-white'>
            <h1 className='text-2xl lg:text-8xl'>Lorem, ipsum.</h1>
            <p className='lg: text-lg w-96 text-center'>Lorem ipsum incidunt officiis totam odit incidunt officiis totam odit incidunt officiis totam odit exercitationem esse enim neque incidunt officiis totam odit delectus iusto quasi id fugiat.</p>
            <button className='bg-white text-black w-20 h-10 rounded'>Explore</button>
        </div>
    </div>
  )
}

export default Hero