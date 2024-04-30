import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { Link } from 'react-router-dom';

const DownloadApps = () => {
    return (
        <div className='bg-[url("https://i.ibb.co/PTjbqYS/beautiful-girl-running-wooden-path-koh-nang-yuan-island-near-koh-tao-island-surat-thani-thailand.jpg")] h-[80vh] bg-center bg-cover relative my-10 rounded-lg'>
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000099]">

          {/* login banner */}
          <div className="flex justify-center items-center lg:w-1/5 md:w-2/3 w-2/3 mx-auto h-full">
            <div className="p-6 rounded-md text-center space-y-2 border-2 border-green-500">
              <h3 className="text-4xl font-bold uppercase text-green-500">
                Login
              </h3>
              <div className="flex justify-center items-center gap-2">
                <Link
                  to={"/"}
                  className="text-xl font-medium text-white hover:text-green-500 duration-300"
                >
                  Home
                </Link>
                <div className="flex justify-center items-center gap-1">
                  <span className="text-white text-xl font-medium">
                    <MdOutlineKeyboardDoubleArrowRight />
                  </span>
                  <p className="text-xl font-medium text-white">Login</p>
                </div>
              </div>
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default DownloadApps;