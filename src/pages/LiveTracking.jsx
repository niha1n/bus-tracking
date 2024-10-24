import React from 'react';
import LeftSidebar from '../components/Sidebar';
import BusMap from '../components/BusMap';
import BusSidebar from '../components/CardsContainer';
import TopBar from '../components/TopBar';

function LiveTracking() {
  return (
    <>
      <div className="flex items-center justify-center w-screen overflow-hidden">
        <LeftSidebar />
        <BusSidebar />
      </div>
    </>
  );
}

export default LiveTracking;
