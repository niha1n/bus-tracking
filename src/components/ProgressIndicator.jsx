import React, { useState } from 'react';
import { FaPlus, FaTimes } from 'react-icons/fa';

const ProgressIndicator = () => {
  // Define the bus stops with title, time, and current stop status
  const nodes = [
    { title: 'Vyttila', status: '10:00 am', isPast: false },
    { title: 'Kadavanthra', status: '9:30 am', isPast: false },
    { title: 'Willingdon Island', status: '9:00 am', isCurrent: true },
    { title: 'Fort Kochi', status: '8:45 am', isPast: true },
    { title: 'Mattancherry', status: '8:30 am', isPast: true },
  ];
  const [open, setOpen] = useState(false);

  return (
    <div className="timeline-wrapper ml-6  w-[14rem] h-[90%] flex flex-col justify-between fixed right-1 my-2  overflow-hidden">
      <div className="flex justify-between items-center px-4 border-b py-4 bg-white border-gray-200">
        <h1 className="text-lg font-bold text-gray-600">Route Details </h1>
        {open ? (
          <FaTimes
            className="text-gray-600 cursor-pointer"
            onClick={() => setOpen(false)}
          />
        ) : (
          <FaPlus
            className="text-gray-600 cursor-pointer"
            onClick={() => setOpen(true)}
          />
        )}
      </div>

      {/* Progress Part */}
      {open && (
        <>
        <div className="bg-white h-full flex flex-col justify-between pt-5">
          {nodes.map((node, index) => (
            <div
              key={index}
              className={`node relative pl-5 pb-8 left-14 ${
                node.isCurrent ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              <h3 className="m-0 text-sm">{node.title}</h3>
              <p className="m-0 text-lg font-semibold">{node.status}</p>
              <span
                className={`absolute z-20 w-3 h-3 rounded-full top-0 left-[-8px] ${
                  node.isPast
                    ? 'bg-white border-blue-600' // Current stop
                    : node.isCurrent
                    ? 'bg-white border-blue-600 w-7 h-7 left-[-1rem]' // Past stop
                    : 'bg-white border-gray-400' // Future stop
                } border-2`}
              >
                {' '}
                {node.isCurrent && (
                  <img
                    src="bus.svg"
                    alt="Current Stop"
                    className="w-4 relative left-1 top-[0.17rem]"
                  />
                )}
              </span>

              {index < nodes.length && (
                <span
                  className={`absolute  left-[-0.25rem] top-0 bottom-0 w-1 h-[10rem] p[5rem] ${
                    node.isPast || node.isCurrent
                      ? 'bg-blue-600 h-[15rem] z-[15]'
                      : 'bg-gray-300 h-[15rem] z-10'
                  }`}
                ></span>
              )}
            </div>
          ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProgressIndicator;
