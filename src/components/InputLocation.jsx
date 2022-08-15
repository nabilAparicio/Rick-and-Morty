import React from "react";

// eslint-disable-next-line react/prop-types
function InputLocation({ handleLocation, handleChange }) {
  return (
    <form className="   flex place-items-center justify-center">
      <div className="flex items-baseline gap-2">
        <input
          onChange={handleChange}
          type="number"
          placeholder="Type a location id"
          id="base-input"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        />
        <button
          type="submit"
          onClick={handleLocation}
          className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-teal-300 to-lime-300 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-lime-200 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 dark:focus:ring-lime-800"
        >
          <span className="relative rounded-md bg-white px-9 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
            Search
          </span>
        </button>
      </div>
    </form>
  );
}

export default InputLocation;
