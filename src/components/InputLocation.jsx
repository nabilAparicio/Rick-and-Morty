import React from 'react'
import { useState } from 'react'

const InputLocation = ({ handleLocation, handleChange }) => {
  return (
    <form className='   flex place-items-center justify-center' >
      <div className='flex items-baseline gap-2'>
        <input onChange={handleChange} type="number" placeholder='Type a location id' id="base-input" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
        <button onClick={handleLocation} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
          <span class="relative px-9 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Search
          </span>
        </button>
      </div>
    </form>
  )
}

export default InputLocation