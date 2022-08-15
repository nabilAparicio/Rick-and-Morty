import React from 'react'
import InputLocation from './InputLocation'

const Hero = ({ handleChange, handleLocation }) => {
  return (
    <div className="hero  bg-base-200 p-5">
      <div className="hero-content flex lg:flex-row place-content-center">
        <img src="src/assets/images/rickmority.jpg" className=" w-40 rounded-lg shadow-2xl" />
        <div className='flex flex-col text-center place-content-center p-5'>
          <h1 className="text-5xl mb-5 font-bold dark:text-white">Rick and Morty</h1>
          <p className="py-6 max-w-md dark:text-white ">Rick and Morty api consumption, type a number between 1 - 126 to see all possible universes.</p>
          <InputLocation handleLocation={handleLocation} handleChange={handleChange} />
        </div>
      </div>
    </div>
  )
}

export default Hero