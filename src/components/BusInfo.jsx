import React from 'react';

function BusInfo() {
  return (
    
      <div className="w-[40vw] fixed z-10  bg-white rounded-xl h-[14vh] right-[40vh] top-[12vh] shadow-md flex items-center justify-between p-4">
        {/* first section */}
        <div className="flex items-center space-x-4">
          <img
            className="w-8 h-8 rounded-full"
            src="/busInfo.svg"
            alt="Driver Avatar"
          />
          <div>
            <span className="block text-sm text-gray-500">Bus Number</span>
            <div className="flex items-center space-x-2">
              <span className="block text-md font-semibold">KL 01 Q 4598</span>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex items-center space-x-2">
          <div>
            <span className="block text-sm text-gray-500">Bus Number</span>
            <div className="flex items-center space-x-2 text-[#334155]">
              <span className="block text-md font-semibold">
               Kaloor Bus Stand{' '}
                <span className="text-gray-300 mb-1">•</span>{' '}
                3:30 PM
              </span>
            </div>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex items-center space-x-4">
        <span className={`bg-[#F9EAC8] px-2 py-1 mt-3 rounded-md text-xs`}>
          Running Late by 30 mins
        </span>
        </div>
      </div>
  );
}

export default BusInfo;
