import React, { useEffect, useState } from 'react';
import BusMap from './BusMap';
import ProgressIndicator from './ProgressIndicator';
import TopBar from './TopBar';
import BusInfo from './BusInfo';
import axios from 'axios';

const BusCard = ({ bus, onClick, isSelected }) => {
  return (
    <div
      className={`bg-white rounded-2xl border-2 p-4 mb-4 cursor-pointer ${
        isSelected ? 'border-blue-700' : 'border-[#F2F3F7]'
      }`}
      onClick={onClick}
    >
      {/* Bus number and status */}
      <div className="flex justify-between items-center mb-2 pb-1 border-b">
        <div>
          <span className="block text-xs text-gray-500">Bus Number</span>
          <span className="text-md ">{bus.busNumber}</span>
        </div>
        <span className={`${bus.statusColor} px-2 py-1 rounded-md text-xs`}>
          {bus.status}
        </span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <span className="block text-xs text-gray-500">{bus.startPoint}</span>
          <span className="block text-md font-semibold">{bus.startTime}</span>
        </div>
        <div className="text-right">
          <span className="block text-xs text-gray-500">{bus.endPoint}</span>
          <span className="block text-md font-semibold">{bus.endTime}</span>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <img
          className="w-8 h-8 rounded-full"
          src="/driver.png"
          alt="Driver Avatar"
        />
        <div>
          <span className="block text-xs text-gray-500">Driver</span>
          <div className="flex items-center space-x-2">
            <span className="block text-md font-semibold">
              {bus.driverName}
            </span>
            <span className="text-gray-300 text-2xl mb-1">•</span>{' '}
            {/* Grey dot */}
            <span className="block text-md font-normal">
              {bus.driverContact}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BusSidebar = () => {
  const [busData, setBusData] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);

  useEffect(() => {
    // Fetch bus data from the backend API
    const fetchBusData = async () => {
      try {
        const response = await axios.get('https://bus-backend-wyb2.onrender.com/api/buses');
        setBusData(response.data);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, []);

  const handleCardClick = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="flex flex-col w-[85%]">
      <TopBar />
      <BusInfo />
      <div className="flex  h-[90vh] items-center justify-center  w-full">
        {/* Sidebar */}
        <div className="flex flex-col h-full  pt-4 ">
          <div className="flex flex-col">
            <h1 className="font-semibold mb-3 ml-2 px-4">Bus List</h1>
          </div>
          <div className=" flex flex-col h-full  overflow-y-auto px-4 ">
            {busData.map((bus, index) => (
              <BusCard
                key={index}
                bus={bus}
                onClick={() => handleCardClick(bus)}
                isSelected={selectedRoute === bus}
              />
            ))}
          </div>
        </div>
        {/* Map Component */}
        <BusMap selectedRoute={selectedRoute} />
        <ProgressIndicator />
      </div>
    </div>
  );
};

export default BusSidebar;
