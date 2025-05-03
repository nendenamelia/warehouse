import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

export default function Dashboard() {
  useEffect(() => {
    console.log('Rendering Dashboard component');
  }, []);

  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ status: '', transporter: '', city: '' });
  const [selectedData, setSelectedData] = useState(null);
  const [realTimeData, setRealTimeData] = useState({});

  const transporters = [
    "BSA",
    "DUNEX",
    "ALEXINDO",
    "MIF",
    "SANITAS",
    "STS",
    "VTRANS",
    "WES",
    "JPM",
    "KAYANA",
    "MAS",
    "MELAWATI",
    "MKA",
    "PALEX",
    "PBS",
    "PD JUMBO",
    "RHEINO",
    "SAKURA",
    "SINDEX",
    "CMS",
    "DEJAVU",
    "GA",
    "HABIBI",
    "BIG",
    "BWI",
    "BTX",
    "BEN",
    "BBC",
    "BAHANA",
    "ASV",
    "B-LOG",
    "KAMADJAYA",
    "SBI",
    "DUNEX",
    "ALEXINDO",
    "MIF",
    "SANITAS",
    "STS",
    "VTRANS",
    "WES",
    "JPM",
    "KAYANA",
    "MAS",
    "MELAWATI",
    "MKA",
    "PALEX",
    "PBS",
    "PD JUMBO",
    "RHEINO",
    "SAKURA",
    "SINDEX"
  ];

  const routes = [
    "DSI Marunda - Jakarta Barat",
    "DSI Marunda - Jakarta Pusat",
    "DSI Marunda - Jakarta Selatan",
    "DSI Marunda - Jakarta Timur",
    "DSI Marunda - Jakarta Utara",
    "DSI Marunda - Bekasi",
    "DSI Marunda - Depok",
    "DSI Marunda - Tangerang",
    "DSI Marunda - Serang",
    "DSI Marunda - Rangkas Bitung",
    "DSI Marunda - Cilegon",
    "DSI Marunda - Balaraja",
    "DSI Marunda - Bogor",
    "DSI Marunda - Cikupa",
    "DSI Marunda - Cibinong",
    "DSI Marunda - Cikarang",
    "DSI Marunda - Cikampek",
    "DSI Marunda - Cibitung",
    "DSI Marunda - Bandung",
    "DSI Marunda - Sukabumi",
    "DSI Marunda - Karawang",
    "DSI Marunda - Purwakarta",
    "DSI Marunda - Garut",
    "DSI Marunda - Tasikmalaya",
    "DSI Marunda - Cirebon",
    "DSI Marunda - Sumedang",
    "DSI Marunda - Subang",
    "DSI Marunda - Ciamis",
    "DSI Marunda - Banjar",
    "DSI Marunda - Cianjur",
    "DSI Marunda - Cimahi",
    "DSI Marunda - Indramayu",
    "DSI Marunda - Majalengka",
    "DSI Marunda - Semarang",
    "DSI Marunda - Yogyakarta",
    "DSI Marunda - Bantul",
    "DSI Marunda - Kudus",
    "DSI Marunda - Majenang",
    "DSI Marunda - Magelang",
    "DSI Marunda - Tegal",
    "DSI Marunda - Pati",
    "DSI Marunda - Pekalongan",
    "DSI Marunda - Klaten",
    "DSI Marunda - Purwokerto",
    "DSI Marunda - Solo",
    "DSI Marunda - Sleman",
    "DSI Marunda - Surakarta",
    "DSI Marunda - Banyumas",
    "DSI Marunda - Rembang",
    "DSI Marunda - Blora",
    "DSI Marunda - Jember",
    "DSI Marunda - Surabaya",
    "DSI Marunda - Malang",
    "DSI Marunda - Gresik",
    "DSI Marunda - Kediri",
    "DSI Marunda - Banyuwangi",
    "DSI Marunda - Probolinggo",
    "DSI Marunda - Madiun",
    "DSI Marunda - Sidoarjo",
    "DSI Marunda - Mojokerto",
    "DSI Marunda - Pasuruan",
    "DSI Marunda - Jombang",
    "DSI Marunda - Lamongan",
    "DSI Marunda - Tuban",
    "DSI Marunda - Jambi",
    "DSI Marunda - Palembang",
    "DSI Marunda - Bengkulu",
    "DSI Marunda - Kotabumi",
    "DSI Marunda - Lampung",
    "DSI Marunda - Metro Lampung",
    "DSI Marunda - Muara Enim",
    "DSI Marunda - Baturaja",
    "DSI Marunda - Muara Bungo",
    "DSI Marunda - Bangko",
    "DSI Marunda - Sarolangun",
    "DSI Marunda - Pekan Baru",
    "DSI Marunda - Pelabuhan Sunda Kelapa",
    "DSI Marunda - Salatiga",
    "DSI Marunda - Pandaan",
    "DSI Marunda - Cicalengka",
    "DSI Marunda - Tulung Agung",
    "DSI Marunda - Sumenep",
    "DSI Marunda - Denpasar",
    "DSI Marunda - Banda Aceh",
    "DSI Marunda - Lhoksumawe",
    "DSI Marunda - Langsa",
    "DSI Marunda - Medan dan Sekitar",
    "DSI Marunda - Langkat",
    "DSI Marunda - Brahrang - Binjai",
    "DSI Marunda - Tandem",
    "DSI Marunda - Pematang Siantar",
    "DSI Marunda - Rantau Utara / Rantau Prap",
    "DSI Marunda - Padang Sidempuan",
    "DSI Marunda - Sibolga",
    "DSI Marunda - Bireun",
    "DSI Marunda - Padang",
    "DSI Marunda - Padang Panjang",
    "DSI Marunda - Dharmasraya",
    "DSI Marunda - Payakumbuh",
    "DSI Marunda - Solok",
    "DSI Marunda - Batam",
    "DSI Marunda - Pekanbaru",
    "DSI Marunda - Siak",
    "DSI Marunda - Bagan batu",
    "DSI Marunda - Ujung Batu",
    "DSI Marunda - Perawang",
    "DSI Marunda - Tanjung Pinang",
    "DSI Marunda - Kerinci",
    "DSI Marunda - Jambi",
    "DSI Marunda - Bengkulu",
    "DSI Marunda - Bangka",
    "DSI Marunda - Belitung / Tanjung Pandan",
    "DSI Marunda - Pontianak",
    "DSI Marunda - Banjarmasin",
    "DSI Marunda - Barabai",
    "DSI Marunda - Batulicin",
    "DSI Marunda - Palangkaraya",
    "DSI Marunda - Pangkalan Bun",
    "DSI Marunda - Sampit",
    "DSI Marunda - Balikpapan",
    "DSI Marunda - Samarinda",
    "DSI Marunda - Berau",
    "DSI Marunda - Tarakan",
    "DSI Marunda - Manado",
    "DSI Marunda - Makassar",
    "DSI Marunda - Kendari",
    "DSI Marunda - Palu",
    "DSI Marunda - Luwuk",
    "DSI Marunda - Pare - Pare",
    "DSI Marunda - Morowali",
    "DSI Marunda - Lombok",
    "DSI Marunda - Kupang",
    "DSI Marunda - Ambon",
    "DSI Marunda - Ternate",
    "DSI Marunda - Gorontalo",
    "DSI Marunda - Kota Jayapura",
    "DSI Marunda - Nabire",
    "DSI Marunda - Biak",
    "DSI Marunda - Timika",
    "DSI Marunda - Sorong",
    "DSI Marunda - Fak Fak",
    "DSI Marunda - Kaimana",
    "DSI Marunda - Manokwari",
    "DSI Marunda - Lombok Timur",
    "DSI Marunda - Merauke",
    "DSI Marunda - Palopo",
    "DSI Marunda - Duri",
    "DSI Marunda - Rungkut",
    "DSI Marunda - Tambak Langon",
    "DSI Marunda - Tanjung Priok",
  ];

  const sampleDataTracking = [
    { date: '28.04.2025', doNumber: '41019416', customer: 'PT. MERCOLADE INDONESIA', city: 'TANGERANG', qty: 400, vehicleNo: 'B 9665 TXV', weight: 15.0, ttKg: 6000.0, tonnage: 6.0, transporter: 'DUNEX', status: 'On The Way', lat: -6.2, lng: 106.8 },
    { date: '28.04.2025', doNumber: '41019037', customer: 'PT. MONDELEZ INDONESIA MANUFACTURIN', city: 'BEKASI', qty: 400, vehicleNo: 'B 9242 TXW', weight: 15.0, ttKg: 6000.0, tonnage: 6.0, transporter: 'ALEXINDO', status: 'On The Way', lat: -6.3, lng: 107.0 },
    { date: '28.04.2025', doNumber: '41020693', customer: 'PT. MONDELEZ INDONESIA MANUFACTURIN', city: 'BEKASI', qty: 400, vehicleNo: 'B 9699 TXR', weight: 15.0, ttKg: 6000.0, tonnage: 6.0, transporter: 'MIF', status: 'Delivered', lat: -6.4, lng: 107.1 },
    { date: '28.04.2025', doNumber: '41019808', customer: 'PT. PESTA PORA ABADI', city: 'BEKASI', qty: 200, vehicleNo: 'B 9692 TXR', weight: 16.3, ttKg: 3259.08, tonnage: 3.26, transporter: 'BSA', status: 'Loading', lat: -6.5, lng: 107.2 },
    { date: '28.04.2025', doNumber: '41020601', customer: 'PT. PESTA PORA ABADI', city: 'BEKASI', qty: 200, vehicleNo: 'B 9692 TXR', weight: 16.3, ttKg: 3259.08, tonnage: 3.26, transporter: 'BSA', status: 'Loading', lat: -6.6, lng: 107.3 },
    { date: '28.04.2025', doNumber: '41020171', customer: 'PT. SEKAR BUMI TBK', city: 'TANGERANG', qty: 1200, vehicleNo: 'B 9930 UEW', weight: 16.3, ttKg: 19554.48, tonnage: 19.55, transporter: 'DUNEX', status: 'Delivered', lat: -6.7, lng: 107.4 },
    { date: '28.04.2025', doNumber: '41020151', customer: 'PT. SINERGI PANGAN GEMILANG', city: 'BOGOR', qty: 100, vehicleNo: 'B 9236 TXW', weight: 16.3, ttKg: 1629.54, tonnage: 1.63, transporter: 'BSA', status: 'Loading', lat: -6.8, lng: 107.5 },
    { date: '28.04.2025', doNumber: '41013881', customer: 'PT. SUSHI-TEI INDONESIA', city: 'TANGERANG', qty: 400, vehicleNo: 'B 9551 SXU', weight: 16.3, ttKg: 6518.16, tonnage: 6.52, transporter: 'BSA', status: 'On The Way', lat: -6.9, lng: 107.6 },
    { date: '28.04.2025', doNumber: '41020286', customer: 'ALFAMIDI DC BITUNG', city: 'BANTEN', qty: 366, vehicleNo: 'B 9919 TXR', weight: 10.9, ttKg: 3976.08, tonnage: 3.98, transporter: 'BSA', status: 'Loading', lat: -7.0, lng: 107.7 },
    { date: '28.04.2025', doNumber: '41020813', customer: 'DC SAT CIKOKOL', city: 'TANGERANG', qty: 495, vehicleNo: 'B 9249 TXW', weight: 10.9, ttKg: 5377.48, tonnage: 5.38, transporter: 'BSA', status: 'On The Way', lat: -7.1, lng: 107.8 },
    { date: '28.04.2025', doNumber: '41020999', customer: 'PT. DELAYED EXAMPLE', city: 'JAKARTA', qty: 300, vehicleNo: 'B 1234 XYZ', weight: 12.5, ttKg: 3750.0, tonnage: 3.75, transporter: 'BSA', status: 'Delayed', lat: -6.2, lng: 106.9 },
    { date: '28.04.2025', doNumber: '41021000', customer: 'PT. DELAYED EXAMPLE 2', city: 'BANDUNG', qty: 250, vehicleNo: 'B 5678 ABC', weight: 10.0, ttKg: 2500.0, tonnage: 2.5, transporter: 'DUNEX', status: 'Delayed', lat: -6.9, lng: 107.6 },
    { date: '28.04.2025', doNumber: '41021001', customer: 'PT. DELAYED EXAMPLE 3', city: 'SURABAYA', qty: 500, vehicleNo: 'B 9101 DEF', weight: 20.0, ttKg: 5000.0, tonnage: 5.0, transporter: 'BSA', status: 'Delayed', lat: -7.2, lng: 112.7 },
    { date: '28.04.2025', doNumber: '41021002', customer: 'PT. EXAMPLE 4', city: 'MEDAN', qty: 450, vehicleNo: 'B 1122 GHI', weight: 18.0, ttKg: 4500.0, tonnage: 4.5, transporter: 'SANITAS', status: 'On The Way', lat: -7.3, lng: 108.0 },
    { date: '28.04.2025', doNumber: '41021003', customer: 'PT. EXAMPLE 5', city: 'PALEMBANG', qty: 350, vehicleNo: 'B 3344 JKL', weight: 14.0, ttKg: 3500.0, tonnage: 3.5, transporter: 'STS', status: 'Delivered', lat: -7.4, lng: 108.1 },
    { date: '28.04.2025', doNumber: '41021004', customer: 'PT. EXAMPLE 6', city: 'BANDUNG', qty: 500, vehicleNo: 'B 5566 MNO', weight: 20.0, ttKg: 5000.0, tonnage: 5.0, transporter: 'VTRANS', status: 'Loading', lat: -7.5, lng: 108.2 },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleStatusClick = (data) => {
    setSelectedData(data);
  };

  const calculateETA = (currentTime, travelDurationInHours) => {
    const eta = new Date(currentTime.getTime() + travelDurationInHours * 60 * 60 * 1000);
    return eta.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  useEffect(() => {
    if (selectedData) {
      const travelDurationInHours = 2; // Example: Assuming travel duration from Bekasi is 2 hours
      const currentTime = new Date();
      const etaCustomer = calculateETA(currentTime, travelDurationInHours);

      setRealTimeData((prevData) => ({
        ...prevData,
        etaCustomer: selectedData.status !== 'Loading' ? etaCustomer : null,
        truckOut: selectedData.status !== 'Loading' ? '10:00 AM' : null,
      }));
    }
    console.log('Rendering Dashboard component with selectedData:', selectedData);
    console.log('RealTimeData:', realTimeData);
  }, [selectedData]);

  console.time('Filter Time');
  const filteredData = sampleDataTracking.filter((item) => {
    const matchesStatus = filters.status === '' || item.status === filters.status;
    const matchesTransporter = filters.transporter === '' || item.transporter === filters.transporter;
    const matchesCity = filters.city === '' || item.city === filters.city;
    const matchesSearchQuery =
      searchQuery === '' ||
      item.doNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.customer.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesTransporter && matchesCity && matchesSearchQuery;
  });
  console.timeEnd('Filter Time');

  console.log('Filters Applied:', filters);
  console.log('Search Query:', searchQuery);
  console.log('Filtered Data:', filteredData);

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

      {/* Search and Filter Section */}
      <div className="flex space-x-4 mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search by DO Number, Transporter, or Route"
            value={searchQuery}
            onChange={handleSearch}
            className="p-2 border border-gray-300 rounded-lg w-full"
          />
        </div>
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
          <option value="Loading">Loading</option>
        </select>
        <select
          name="transporter"
          value={filters.transporter}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Transporters</option>
          {transporters.map((transporter, index) => (
            <option key={index} value={transporter}>{transporter}</option>
          ))}
        </select>
        <select
          name="city"
          value={filters.city}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-lg"
        >
          <option value="">All Cities</option>
          {routes.map((route, index) => (
            <option key={index} value={route}>{route}</option>
          ))}
        </select>
      </div>

      {/* Sample Data Tracking Table */}
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium mb-4">Sample Data Tracking</h2>
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th className="px-4 py-2">Tanggal</th>
              <th className="px-4 py-2">No DO</th>
              <th className="px-4 py-2">Pelanggan</th>
              <th className="px-4 py-2">Kota</th>
              <th className="px-4 py-2">Qty</th>
              <th className="px-4 py-2">Vehicle No</th>
              <th className="px-4 py-2">Berat/Kg</th>
              <th className="px-4 py-2">TT/Kg</th>
              <th className="px-4 py-2">Tonase</th>
              <th className="px-4 py-2">Transporter</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2">{data.date}</td>
                <td className="px-4 py-2">{data.doNumber}</td>
                <td className="px-4 py-2">{data.customer}</td>
                <td className="px-4 py-2">{data.city}</td>
                <td className="px-4 py-2">{data.qty}</td>
                <td className="px-4 py-2">{data.vehicleNo}</td>
                <td className="px-4 py-2">{data.weight}</td>
                <td className="px-4 py-2">{data.ttKg}</td>
                <td className="px-4 py-2">{data.tonnage}</td>
                <td className="px-4 py-2">{data.transporter}</td>
                <td
                  className="px-4 py-2 text-blue-500 cursor-pointer"
                  onClick={() => handleStatusClick(data)}
                >
                  {data.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Map Section */}
      {selectedData && (
        <div className="bg-gray-100 shadow rounded-lg p-6 mt-6">
          <h2 className="text-lg font-medium mb-4">Tracking Map for DO Number: {selectedData.doNumber}</h2>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={{ lat: selectedData.lat, lng: selectedData.lng }}
              zoom={13}
            >
              <Marker position={{ lat: selectedData.lat, lng: selectedData.lng }} />
            </GoogleMap>
          </LoadScript>
          <div className="mt-4">
            <p><strong>Truck In:</strong> {selectedData.status === 'Loading' || selectedData.status === 'On The Way' || selectedData.status === 'Delivered' ? '08:00 (Truk masuk untuk loading)' : '08:00 (Truk belum masuk)'}</p>
            <p><strong>Start Loading:</strong> {selectedData.status === 'Loading' || selectedData.status === 'On The Way' || selectedData.status === 'Delivered' ? '08:10 (Proses loading dimulai)' : '08:10 (Belum dimulai)'}</p>
            <p><strong>Finish Loading:</strong> {selectedData.status === 'Loading' ? 'N/A' : '09:00 (Proses loading selesai)'}</p>
            <p><strong>Truck Out:</strong> {selectedData.status === 'Loading' ? 'N/A' : '09:10 (Truk keluar dari warehouse)'}</p>
            <p><strong>ETA Customer:</strong> {selectedData.status === 'Loading' ? 'N/A' : selectedData.status === 'On The Way' ? '12:10 (Estimasi 3 jam perjalanan)' : 'Barang telah sampai di customer'}</p>
          </div>
        </div>
      )}
    </div>
  );
}