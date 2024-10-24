import React from 'react';
import LeftSidebar from '../components/Sidebar';
import BusSidebar from '../components/CardsContainer';

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
