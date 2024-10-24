import React from 'react'

function TopBar() {
  return (
    <div className=' h-[10vh] w-full relative flex items-center gap-3 text-2xl font-semibold text-[#334155]  bg-white z-10 p-4 border-b border-gray-200'>
      <img src="/liveTrack.svg"   alt="" /> <h1>Live Tracking</h1>
    </div>
  )
}

export default TopBar