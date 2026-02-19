import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <header className="bg-white shadow-sm border-b px-6 py-4 flex items-center justify-between">
      
      {/* Left Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-800">
          Dashboard
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Admin Badge */}
        <div className="hidden md:flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
          <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
            A
          </div>
          <span className="text-sm font-medium text-gray-700">
            Admin
          </span>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition text-sm"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
