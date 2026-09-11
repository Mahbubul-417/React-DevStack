import React from 'react';
import banner from "../assets/banner-stack.png"

const Banner = () => {
    return (
        <div className='flex justify-between mx-18 my-25'>


            <div>
                <h1 className="text-5xl font-bold mb-6 ">
                    Build Your Ideal
                    <br />
                    <span className="bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
                        Development Stack
                    </span>

                </h1>

                <p className="mt-4 mb-8 max-w-lg   text-slate-500">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.
                </p>

                <button className="mt-8 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2  font-medium text-white">
                    Explore Technologies
                </button>

                <button className="ml-2 rounded-lg border border-slate-200 px-8 py-2  text-slate-600">
                    Learn More

                </button>
            </div>

            <img src={banner} className="max-w-[500px] relative -top-22" alt="Banner" />

        </div>


    );
};

export default Banner;