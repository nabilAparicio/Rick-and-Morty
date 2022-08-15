import React from 'react';
import InputLocation from './InputLocation';

const Hero = ({ handleChange, handleLocation }) => {
  return (
    <div className="hero  bg-base-200 p-5">
      <div className="hero-content flex place-content-center lg:flex-row">
        <img
          src="https://i.pinimg.com/564x/8c/de/a5/8cdea5a04c79cf3098f19752e5bcf0d8.jpg"
          className=" w-40 rounded-lg shadow-2xl"
        />
        <div className="flex flex-col place-content-center p-5 text-center">
          <h1 className="mb-5 text-5xl font-bold dark:text-white">
            Rick and Morty
          </h1>
          <p className="max-w-md py-6 dark:text-white ">
            Rick and Morty api consumption, type a number between 1 - 126 to see
            all possible universes.
          </p>
          <InputLocation
            handleLocation={handleLocation}
            handleChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
