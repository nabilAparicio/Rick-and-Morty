import React from 'react'
import useApiCall from '../hooks/useApiCall'

const ResidentInfo = ({ Url }) => {
  const { Data } = useApiCall(Url)
  return (Data ?
    <div class="flex justify-center w-96">
      <div class="flex flex-col  md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg ">
        <img class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={Data?.image} alt={Data?.name} />
        <div class="p-6 flex flex-col justify-start dark:bg-gray-800 dark:border-gray-700 dark:text-white ">
          <h5 class="text-gray-900 dark:text-white text-xl font-medium mb-2">{Data?.name}</h5>
          <p class="text-gray-700 dark:text-white text-base mb-4"><strong>Status:</strong> {Data?.status}</p>
          <p class="text-gray-700 dark:text-white text-base mb-4"> <strong>Origin:</strong> {Data?.origin.name}</p>
          <p class="text-gray-700 dark:text-white text-base mb-4"><strong>Episodes:</strong> {Data?.episode.length}</p>
        </div>
      </div>
    </div> : <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="rounded-full bg-slate-700 h-10 w-10"></div>
        <div class="flex-1 space-y-6 py-1">
          <div class="h-2 bg-slate-700 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-2 bg-slate-700 rounded col-span-2"></div>
              <div class="h-2 bg-slate-700 rounded col-span-1"></div>
            </div>
            <div class="h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResidentInfo