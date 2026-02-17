import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h1 className="text-xl font-bold mb-8">Fab Admin</h1>

      <ul className="space-y-4">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/ems-company-list">EmsCompany</Link></li>
        <li><Link to="/admin/rfq">RFQ</Link></li>
      </ul>
    </div>
  );
}
