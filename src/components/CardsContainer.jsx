import React, { useState } from 'react';
import BusMap from './BusMap';
import ProgressIndicator from './ProgressIndicator';
import TopBar from './TopBar';
import BusInfo from './BusInfo';

const busData = [
  {
    busNumber: '101',
    status: 'On Time',
    statusColor: 'bg-green-200 text-green-800',
    startPoint: 'Vyttila',
    endPoint: 'Fort Kochi',
    waypoints: [
      { lat: 9.966254, lng: 76.297204, stop: 'Kadavanthra' },
      { lat: 9.941162, lng: 76.281414, stop: 'Willingdon Island' },
    ],
    startTime: '08:00 AM',
    endTime: '10:00 AM',
    driverName: 'John Doe',
    driverAvatar: 'https://via.placeholder.com/50',
    driverContact: '+91 9876543210',
  },
  {
    busNumber: '102',
    status: 'Running Late',
    statusColor: 'bg-yellow-200 text-yellow-800',
    startPoint: 'Vyttila',
    endPoint: 'Kakkanad',
    waypoints: [
      { lat: 9.989456, lng: 76.31558, stop: 'Chakkaraparamb' },
      { lat: 10.011035, lng: 76.321451, stop: 'Chembumukk' },
    ],
    startTime: '09:00 AM',
    endTime: '11:00 AM',
    driverName: 'Jane Smith',
    driverAvatar: 'https://via.placeholder.com/50',
    driverContact: '+91 9876543211',
  },
  {
    busNumber: '103',
    status: 'Unavailable',
    statusColor: 'bg-red-200 text-red-800',
    startPoint: 'Vyttila',
    endPoint: 'Edappally',
    waypoints: [{ lat: 10.014306, lng: 76.311578, stop: 'Oberon Mall' }],
    startTime: '07:00 AM',
    endTime: '09:00 AM',
    driverName: 'Alex Johnson',
    driverAvatar: 'https://via.placeholder.com/50',
    driverContact: '+91 9876543212',
  },
  {
    busNumber: '104',
    status: 'On Time',
    statusColor: 'bg-green-200 text-green-800',
    startPoint: 'Vyttila',
    endPoint: 'Amrita Hospital, Kochi',
    waypoints: [
      { lat: 10.002224, lng: 76.313411, stop: 'Palariavattom' },
      { lat: 9.989456, lng: 76.31558, stop: 'Chakkaraparamb' },
    ],
    startTime: '10:00 AM',
    endTime: '12:00 PM',
    driverName: 'Emily Davis',
    driverAvatar: 'https://via.placeholder.com/50',
    driverContact: '+91 9876543213',
  },
];

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
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleCardClick = (route) => {
    setSelectedRoute(route);
  };

  return (
    <div className="flex flex-col w-[85%]">
      <TopBar />
      <BusInfo/>
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
