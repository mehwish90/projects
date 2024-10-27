"use client"
import React from 'react'
import Navbar from './Navbar'
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
const Heroo = () => {
  return (<div>
    <Navbar/>
    <section className="text-gray-900 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded mx-auto"
        alt="hero"
        width={350}
        height={1200}
        src={'require("../../../public/image1.jpg")'}
      />
    </div>

    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-10xl text-8xl mb-4 font-bold  text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-emerald-400 to-indigo-700">
    


        I am
        <br className="hidden lg:inline-block" />
        
<Typewriter
  options={{
    strings: ['Web developer', 'UI/UX Designer', 'GIAIC Student'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <br></br>
      <br></br>
     
      <div className="flex justify-center">
        
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default Heroo
