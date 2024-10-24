import React from 'react';
const LeftSidebar = () => {
  return (
    <div className="flex flex-col w-[15%] h-screen bg-white text-[#A4B1C3] border-r border-gray-200 relative">
      {/* Logo Section */}
      <div className="flex items-center  justify-center h-20 m-2 mb-0">
        <img src="logo.png" className="w-[10rem]" alt="" />
      </div>

      {/* Navigation Links */}
      <nav className="p-4 pt-0">
        <ul className="space-y-4">
          <li>
            <div
              className="flex items-center p-2 pl-5 rounded bg-[#F6F7FD]"
            >
              <img src="/live.svg" alt="" />
              <span className="ml-2 text-[#7B8597]">Live Tracking</span>
            </div>
          </li>
          <li>
            <div
              className="flex items-center p-2 pl-5 rounded hover:bg-[#F6F7FD]"
            >
              <img src="/dashboard.svg" alt="" />
              <span className="ml-2">Dashboard</span>
            </div>
          </li>
          <li>
            <div
              className="flex items-center p-2 pl-5 rounded hover:bg-[#F6F7FD]"
            >
              <img src="/busSchedule.svg" alt="" />
              <span className="ml-2">Bus Schedule</span>
            </div>
          </li>
          <li>
            <div
              className="flex items-center p-2 pl-5 rounded hover:bg-[#F6F7FD]"
            >
              <img src="/expense.svg" alt="" />
              <span className="ml-2">Expense</span>
            </div>
          </li>
          <li>
            <div
              className="flex items-center p-2 pl-5 rounded hover:bg-[#F6F7FD]"
            >
              <img src="/employees.svg" alt="" />
              <span className="ml-2">Employees</span>
            </div>
          </li>
          <li>
            <div
              className="flex items-center p-2 pl-5 rounded hover:bg-[#F6F7FD]"
            >
              <img src="/profile.svg" alt="" />
              <span className="ml-2">Profile</span>
            </div>
          </li>
        </ul>
      </nav>
      <div className="absolute bottom-5 left-5">
        <div
          className="flex items-center p-2 pl-5 rounded text-[#334155] "
        >
          <img src="/logout.svg" alt="" />
          <span className="ml-2 font-semibold">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
