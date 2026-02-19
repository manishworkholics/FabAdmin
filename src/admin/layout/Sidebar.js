import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Building2,
  FileText,
} from "lucide-react";

export default function Sidebar() {
  const baseClass =
    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200";

  return (
    <aside className="w-64 h-screen bg-slate-900 text-gray-300 flex flex-col shadow-xl">

      {/* Logo / Brand */}
      <div className="px-6 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          Fab Admin
        </h1>
        <p className="text-xs text-gray-400 mt-1">Management Panel</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            `${baseClass} ${
              isActive
                ? "bg-slate-800 text-white shadow-inner"
                : "hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `${baseClass} ${
              isActive
                ? "bg-slate-800 text-white shadow-inner"
                : "hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Users size={18} />
          Users
        </NavLink>

        <NavLink
          to="/admin/ems-company-list"
          className={({ isActive }) =>
            `${baseClass} ${
              isActive
                ? "bg-slate-800 text-white shadow-inner"
                : "hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <Building2 size={18} />
          EMS Companies
        </NavLink>

        <NavLink
          to="/admin/rfq"
          className={({ isActive }) =>
            `${baseClass} ${
              isActive
                ? "bg-slate-800 text-white shadow-inner"
                : "hover:bg-slate-800 hover:text-white"
            }`
          }
        >
          <FileText size={18} />
          RFQs
        </NavLink>

      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-slate-800 text-xs text-gray-500">
        © {new Date().getFullYear()} FabSpace
      </div>

    </aside>
  );
}
