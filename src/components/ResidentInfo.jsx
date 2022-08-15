/* eslint-disable react/prop-types */
import React from 'react'
import useApiCall from '../hooks/useApiCall'

const ResidentInfo = ({ Url }) => {
  const { Data } = useApiCall(Url)
  return (Data
    ? <div className="flex justify-center w-96">
      <div className="flex flex-col  md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
        <img className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={Data?.image} alt={Data?.name} />
        <div className="p-6 flex flex-col  justify-start dark:bg-gray-900 dark:border-gray-700 dark:text-white ">
          <h5 className="text-gray-900 dark:text-white text-xl font-medium mb-2">{Data?.name}</h5>
          <p className="text-gray-700 dark:text-white text-base mb-4"><strong>Status:</strong> {Data?.status}</p>
          <p className="text-gray-700 dark:text-white text-base mb-4"> <strong>Origin:</strong> {Data?.origin.name}</p>
          <p className="text-gray-700 dark:text-white text-base mb-4"><strong>Episodes:</strong> {Data?.episode.length}</p>
        </div>
      </div>
    </div>
    : <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-800 h-10 w-10"></div>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-2 bg-slate-800 rounded"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-800 rounded col-span-2"></div>
              <div className="h-2 bg-slate-800 rounded col-span-1"></div>
            </div>
            <div className="h-2 bg-slate-800 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResidentInfo
