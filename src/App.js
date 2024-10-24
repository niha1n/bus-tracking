import { useState } from 'react';
import './index.css';
import BusMap from './components/BusMap';
import Intro from './components/BusMap';
import Sidebar from './components/Sidebar';
import LiveTracking from './pages/LiveTracking';

function App() {
  const [selectedBus, setSelectedBus] = useState(null);

  const busData = [
    {
      id: 1,
      name: 'Bus 1',
      route: [
        { lat: 40.748817, lng: -73.985428 }, // New York (Empire State Building)
        { lat: 40.748541, lng: -73.985757 },
        { lat: 40.749965, lng: -73.987228 }
      ],
      stops: [
        { id: 'stop1', name: 'Stop 1', lat: 40.748817, lng: -73.985428 },
        { id: 'stop2', name: 'Stop 2', lat: 40.748541, lng: -73.985757 },
        { id: 'stop3', name: 'Stop 3', lat: 40.749965, lng: -73.987228 }
      ]
    },
    {
      id: 2,
      name: 'Bus 2',
      route: [
        { lat: 34.052235, lng: -118.243683 }, // Los Angeles (Downtown)
        { lat: 34.052002, lng: -118.244999 },
        { lat: 34.053916, lng: -118.246576 }
      ],
      stops: [
        { id: 'stop1', name: 'Stop 1', lat: 34.052235, lng: -118.243683 },
        { id: 'stop2', name: 'Stop 2', lat: 34.052002, lng: -118.244999 },
        { id: 'stop3', name: 'Stop 3', lat: 34.053916, lng: -118.246576 }
      ]
    }
  ];
  
  return (
    <div>
     <LiveTracking/>
    </div>
  );
}

export default App;
