import React from 'react'

const Location = ({ Data }) => {
  return (
    <div className='w-full flex place-content-center mb-5'>
      <div class="p-6 w-1/2 text-center text-black bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <h3 className='m-3 font-bold'>{Data.name}</h3>
        <div className=' flex justify-around ' >
          <p> <strong>Type:</strong> {Data.type} </p>
          <p> <strong>Dimension:</strong> {Data.dimension}</p>
          <p> <strong>population:</strong> {Data.residents.length}</p>
        </div>
      </div>
    </div>
  )
}

export default Location