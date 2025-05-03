import { FaHome, FaClipboardList, FaUser, FaMapMarkerAlt, FaChartBar } from 'react-icons/fa';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-800 to-blue-600 text-white h-full shadow-lg">
      <div className="p-4">
        <h2 className="text-lg font-bold">Menu</h2>
        <ul className="mt-4 space-y-2">
          <li className="flex items-center space-x-2">
            <FaHome />
            <span>Home</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaClipboardList />
            <span>Orders</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaUser />
            <span>Profile</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaMapMarkerAlt />
            <span>Tracking</span>
          </li>
          <li className="flex items-center space-x-2">
            <FaChartBar />
            <span>Reports</span>
          </li>
        </ul>
      </div>
    </div>
  );
}