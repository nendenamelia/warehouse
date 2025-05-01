import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: -6.9175, // Default center (Bandung)
  lng: 107.6191,
};

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ status: '', driver: '', city: '' });
  const [truckLocations, setTruckLocations] = useState([
    { doNumber: 'DO001', driver: 'Nenden', city: 'Surabaya', status: 'Delivered', lat: -7.2575, lng: 112.7521 },
    { doNumber: 'DO002', driver: 'Nenden', city: 'Bandung', status: 'On The Way', lat: -6.9175, lng: 107.6191 },
    { doNumber: 'DO003', driver: 'Nenden', city: 'Medan', status: 'Delayed', lat: 3.5952, lng: 98.6722 },
    { doNumber: 'DO004', driver: 'Nenden', city: 'Jakarta', status: 'Delayed', lat: -6.2088, lng: 106.8456 },
    { doNumber: 'DO005', driver: 'Nenden', city: 'Semarang', status: 'Delayed', lat: -6.9667, lng: 110.4167 },
  ]);

  useEffect(() => {
    // Simulate fetching real-time GPS data
    const interval = setInterval(() => {
      setTruckLocations((prevLocations) =>
        prevLocations.map((truck) => ({
          ...truck,
          lat: truck.lat + (Math.random() - 0.5) * 0.01,
          lng: truck.lng + (Math.random() - 0.5) * 0.01,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const data = [
    { doNumber: 'DO001', driver: 'Andi', city: 'Surabaya', status: 'Delivered' },
    { doNumber: 'DO002', driver: 'Bima', city: 'Bandung', status: 'On The Way' },
    { doNumber: 'DO003', driver: 'Citra', city: 'Medan', status: 'Delayed' },
    { doNumber: 'DO004', driver: 'Dina', city: 'Jakarta', status: 'Delayed' },
    { doNumber: 'DO005', driver: 'Raka', city: 'Semarang', status: 'Delayed' },
  ];

  const filteredData = data.filter((item) => {
    return (
      (filters.status === '' || item.status === filters.status) &&
      (filters.driver === '' || item.driver === filters.driver) &&
      (filters.city === '' || item.city === filters.city) &&
      (searchQuery === '' ||
        item.doNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.driver.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Live Map Section */}
      <div className="bg-gray-800 text-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Live Map</h2>
        <div className="relative w-full h-64 bg-gray-300 rounded-lg">
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center}
              zoom={5}
            >
              {truckLocations.map((truck, index) => (
                <Marker
                  key={index}
                  position={{ lat: truck.lat, lng: truck.lng }}
                  label={truck.driver}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search by DO Number or Driver"
          value={searchQuery}
          onChange={handleSearch}
          className="p-2 border border-gray-300 rounded-lg w-1/3"
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Status</option>
          <option value="Delivered">Delivered</option>
          <option value="On The Way">On The Way</option>
          <option value="Delayed">Delayed</option>
        </select>
        <select
          name="driver"
          value={filters.driver}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Drivers</option>
          <option value="Andi">Andi</option>
          <option value="Bima">Bima</option>
          <option value="Citra">Citra</option>
          <option value="Dina">Dina</option>
          <option value="Raka">Raka</option>
        </select>
        <select
          name="city"
          value={filters.city}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Cities</option>
          <option value="Surabaya">Surabaya</option>
          <option value="Bandung">Bandung</option>
          <option value="Medan">Medan</option>
          <option value="Jakarta">Jakarta</option>
          <option value="Semarang">Semarang</option>
        </select>
      </div>

      {/* Filtered Table */}
      <div className="bg-gray-800 text-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Filtered Data</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-4">#</th>
              <th className="border-b p-4">DO Number</th>
              <th className="border-b p-4">Sales</th>
              <th className="border-b p-4">Mobil In</th>
              <th className="border-b p-4">Start Loading</th>
              <th className="border-b p-4">Finish Loading</th>
              <th className="border-b p-4">Truck Out</th>
              <th className="border-b p-4">ETA Customer</th>
              <th className="border-b p-4">Tujuan</th>
              <th className="border-b p-4">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">1</td>
              <td className="p-4">DO001</td>
              <td className="p-4">Nenden</td>
              <td className="p-4">07:45</td>
              <td className="p-4">08:15</td>
              <td className="p-4">08:45</td>
              <td className="p-4">09:00</td>
              <td className="p-4">15:30</td>
              <td className="p-4">Surabaya</td>
              <td className="p-4">
                <a
                  href="https://www.google.com/maps?q=Surabaya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Delivered
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-4">2</td>
              <td className="p-4">DO002</td>
              <td className="p-4">Nenden</td>
              <td className="p-4">08:00</td>
              <td className="p-4">08:30</td>
              <td className="p-4">09:15</td>
              <td className="p-4">09:30</td>
              <td className="p-4">16:00</td>
              <td className="p-4">Bandung</td>
              <td className="p-4">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=Bandung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  On The Way
                </a>
              </td>
            </tr>
            <tr>
              <td className="p-4">3</td>
              <td className="p-4">DO003</td>
              <td className="p-4">Nenden</td>
              <td className="p-4">09:00</td>
              <td className="p-4">09:30</td>
              <td className="p-4">10:30</td>
              <td className="p-4">-</td>
              <td className="p-4">-</td>
              <td className="p-4">Medan</td>
              <td className="p-4 text-yellow-500">Delayed ⚠️</td>
            </tr>
            <tr>
              <td className="p-4">4</td>
              <td className="p-4">DO004</td>
              <td className="p-4">Nenden</td>
              <td className="p-4">08:15</td>
              <td className="p-4">08:45</td>
              <td className="p-4">09:45</td>
              <td className="p-4">-</td>
              <td className="p-4">-</td>
              <td className="p-4">Jakarta</td>
              <td className="p-4 text-yellow-500">Delayed ⚠️</td>
            </tr>
            <tr>
              <td className="p-4">5</td>
              <td className="p-4">DO005</td>
              <td className="p-4">Nenden</td>
              <td className="p-4">07:50</td>
              <td className="p-4">08:20</td>
              <td className="p-4">08:50</td>
              <td className="p-4">-</td>
              <td className="p-4">-</td>
              <td className="p-4">Semarang</td>
              <td className="p-4 text-yellow-500">Delayed ⚠️</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}