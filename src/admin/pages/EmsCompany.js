import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminEMS } from "../store/adminEmsSlice";
import { Search } from "lucide-react";

export default function EmsCompany() {
  const dispatch = useDispatch();
  const { companies, loading, total } = useSelector((s) => s.adminEMS);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchAdminEMS({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div className="space-y-6">
      
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            EMS Companies
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage all registered EMS companies
          </p>
        </div>

        <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-lg">
          Total: <span className="font-semibold">{total || 0}</span>
        </div>
      </div>

      {/* Search Bar (UI Ready) */}
      <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="relative w-full max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            Search
          </button>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-6 text-gray-500">Loading companies...</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-left font-medium text-gray-600">ID</th>
                <th className="p-4 text-left font-medium text-gray-600">Name</th>
                <th className="p-4 text-left font-medium text-gray-600">State</th>
                <th className="p-4 text-left font-medium text-gray-600">Country</th>
                <th className="p-4 text-left font-medium text-gray-600">Created</th>
                <th className="p-4 text-left font-medium text-gray-600">Status</th>
              </tr>
            </thead>

            <tbody>
              {companies.map((c) => (
                <tr
                  key={c.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-700">{c.id}</td>
                  <td className="p-4 text-gray-800">{c.name}</td>
                  <td className="p-4 text-gray-600">{c.state}</td>
                  <td className="p-4 text-gray-600">{c.country}</td>
                  <td className="p-4 text-gray-500">
                    {new Date(c.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Active
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
