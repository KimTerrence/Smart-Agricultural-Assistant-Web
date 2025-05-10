import React, { useState } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Container from '../components/Container';
import { LayoutDashboard, Database, Users, LogOut, Wheat, Bug} from 'lucide-react';

ChartJS.register(
  ArcElement,
  BarElement,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

// Leaflet default icon fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Chart data
const detectionTrendData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr'],
  datasets: [
    {
      label: 'Pest Detections',
      data: [12, 19, 9, 15],
      fill: true,
      backgroundColor: 'rgba(59,130,246,0.2)',
      borderColor: '#3b82f6',
    },
  ],
};

const pestDataByMonth = {
  January: [5, 8, 4, 2],
  February: [6, 7, 9, 3],
  March: [8, 11, 5, 4],
  April: [10, 15, 7, 5],
};

const pestDetectionsByPlace = {
  labels: ['Gonzaga', 'Buguey', 'Santa Teresita', 'Ballesteros'],
  datasets: [
    {
      label: 'Detections by Place',
      data: [18, 12, 8, 9],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    },
  ],
};

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('April');

  const users = 128;
  const pestDetections = 47;
  const pestLocations = [
    { lat: 17.6024, lng: 121.7269, label: 'Gonzaga, Cagayan' },
    { lat: 17.6406, lng: 121.6781, label: 'Buguey, Cagayan' },
  ];

  const mostIdentifiedPestData = {
    labels: ['Rice Bug', 'Corn Borer', 'Aphids', 'Armyworm'],
    datasets: [
      {
        label: `Detections (${selectedMonth})`,
        data: pestDataByMonth[selectedMonth],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  };

  return (
    <Container>
      <div className='w-full flex justify-between gap-5'>
        <div className='w-1/5 min-h-screen bg-white shadow-md p-6 rounded-tr-2xl rounded-br-2xl fixed'>
            <h2 className='text-xl font-bold text-gray-700 mb-8'>Smart Agricultural Assistant</h2>
            <nav className='flex flex-col space-y-4'>
                <a href="#" className='flex items-center gap-3 text-gray-700 hover:bg-blue-100 px-4 py-2 rounded-lg transition'>
                <LayoutDashboard className='w-5 h-5' />
                Dashboard
                </a>
                <a href="#" className='flex items-center gap-3 text-gray-700 hover:bg-blue-100 px-4 py-2 rounded-lg transition'>
                <Database className='w-5 h-5' />
                Datasets
                </a>
                <a href="#" className='flex items-center gap-3 text-gray-700 hover:bg-blue-100 px-4 py-2 rounded-lg transition'>
                <Users className='w-5 h-5' />
                Users
                </a>
                <a href="#" className='flex items-center gap-3 text-gray-700 hover:bg-blue-100 px-4 py-2 rounded-lg transition'>
                <Bug />
                Rice Pest
                </a>
                <a href="#rice_pest" className='flex items-center gap-3 text-gray-700 hover:bg-blue-100 px-4 py-2 rounded-lg transition'>
                <Wheat />
                Rice Desease
                </a>
                <a href="#" className='flex items-center gap-3 text-gray-700 hover:bg-blue-100 px-4 py-2 rounded-lg transition'>
                <Bug />
                Corn Pest
                </a>
                <a href="#" className='flex items-center gap-3 text-gray-700 hover:bg-blue-100 px-4 py-2 rounded-lg transition'>
                <Wheat />
                Corn Desease
                </a>
                <a href="#" className='flex items-center gap-3 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg transition'>
                <LogOut className='w-5 h-5' />
                Logout
                </a>
            </nav>
        </div>


        <div className="p-6 mx-10 space-y-6 bg-white min-h-screen w-6/8 absolute shadow-md right-0">
          {/* Stats */}
          <div className="flex gap-5">
            <div className="bg-green-100 rounded-lg p-4 text-center w-1/4">
              <p className="text-sm text-gray-500">Registered Users</p>
              <p className="text-2xl font-bold text-blue-600">{users}</p>
            </div>
            <div className="bg-green-100 rounded-lg p-4 text-center w-1/4">
              <p className="text-sm text-gray-500">Pest Detections</p>
              <p className="text-2xl font-bold text-red-600">{pestDetections}</p>
            </div>
          </div>

          {/* Charts Row 1 */}
          <div className='flex gap-5'>
            <div className="bg-green-100 rounded-lg p-4 w-1/2">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Monthly Pest Detection Trend</h3>
              <Line key="detection-trend" data={detectionTrendData} />
            </div>

            <div className="bg-green-100 rounded-lg p-4 w-1/2">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-md font-semibold text-gray-700">Most Identified Pest ({selectedMonth})</h3>
                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="ml-4 p-1 border rounded text-sm"
                >
                  {Object.keys(pestDataByMonth).map((month) => (
                    <option key={month} value={month}>{month}</option>
                  ))}
                </select>
              </div>
              <Bar key={selectedMonth} data={mostIdentifiedPestData} />
            </div>
          </div>

          {/* Charts Row 2 */}
          <div className='flex gap-5'>
            <div className="bg-green-100 rounded-lg p-4 w-2/4 h-90">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Most Detected Places</h3>
              <Doughnut key="pest-places" data={pestDetectionsByPlace} />
            </div>

            <div className="bg-green-100 rounded-lg p-4 w-4/2 ">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Pest Detection Locations</h3>
              <MapContainer center={[17.6, 121.7]} zoom={10} className="h-96 w-full rounded-lg">
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {pestLocations.map((loc, idx) => (
                  <Marker key={idx} position={[loc.lat, loc.lng]}>
                    <Popup>{loc.label}</Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
