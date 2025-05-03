import { useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';

export default function Home() {
  useEffect(() => {
    console.log('Rendering Home page');
  }, []);

  console.log('Rendering Home Page');

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-50">
        <header className="bg-pastelBlue text-white py-6 px-6 flex items-center justify-between shadow-md">
          <div className="flex items-center space-x-4">
            <div className="bg-pastelPink rounded-full w-12 h-12 flex items-center justify-center">
              <span className="text-pastelBlue text-2xl font-bold">D</span>
            </div>
            <h1 className="text-3xl font-extrabold text-black">D O R A</h1>
            <p className="text-sm italic text-black">Delivery Order Realtime Assistant</p>
          </div>
        </header>
        <main className="p-10 bg-pastelGreen flex">
          <div className="flex-1">
            {console.log('Rendering Dashboard Component')}
            <Dashboard />
          </div>
          {/* Alert Feed / Activity Log */}
          <div className="w-1/3 bg-white shadow-lg rounded-lg p-4 ml-4">
            <h2 className="text-lg font-bold text-gray-800 mb-4">📝 Alert Feed / Activity Log</h2>
            <ul className="space-y-2">
              <li className="p-2 bg-pastelYellow rounded-lg shadow">
                <p className="text-gray-800">Mobil DO004 belum loading 15 menit setelah jadwal</p>
              </li>
              <li className="p-2 bg-pastelPink rounded-lg shadow">
                <p className="text-gray-800">ETA DO005 diprediksi terlambat 20 menit</p>
              </li>
            </ul>
          </div>
        </main>
        <footer className="bg-pastelPurple text-white py-4 text-center">
          <p className="text-sm">&copy; 2025 D O R A. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}