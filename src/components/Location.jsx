import React from 'react';

const Location = ({ Data }) => {
  return (
    <div className="mb-5 flex w-full place-content-center">
      <div class="w-1/2 rounded-lg border border-gray-200 bg-white p-6 text-center text-black shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-white">
        <h3 className="m-3 font-bold">{Data.name}</h3>
        <div className=" flex justify-around ">
          <p>
            {' '}
            <strong>Type:</strong> {Data.type}{' '}
          </p>
          <p>
            {' '}
            <strong>Dimension:</strong> {Data.dimension}
          </p>
          <p>
            {' '}
            <strong>population:</strong> {Data.residents.length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
