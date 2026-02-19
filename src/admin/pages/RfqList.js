import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminRFQs } from "../store/adminRfqSlice";
import { Search } from "lucide-react";

export default function RfqList() {
  const dispatch = useDispatch();
  const { rfqs, loading, total } = useSelector((s) => s.adminRFQ);

  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchAdminRFQs({ page: 1, limit: 10 }));
  }, [dispatch]);

  return (
    <div className="space-y-6">
      
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            RFQ Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Monitor and manage all submitted RFQs
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
              placeholder="Search RFQ..."
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

      {/* Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-6 text-gray-500">Loading RFQs...</div>
        ) : rfqs.length === 0 ? (
          <div className="p-6 text-gray-500">No RFQs found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-left font-medium text-gray-600">ID</th>
                <th className="p-4 text-left font-medium text-gray-600">Quote Name</th>
                <th className="p-4 text-left font-medium text-gray-600">User ID</th>
                <th className="p-4 text-left font-medium text-gray-600">Created</th>
                <th className="p-4 text-left font-medium text-gray-600">Action</th>
              </tr>
            </thead>

            <tbody>
              {rfqs.map((r) => (
                <tr
                  key={r.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-700">{r.id}</td>
                  <td className="p-4 text-gray-800">{r.quoteName}</td>
                  <td className="p-4 text-gray-600">{r.userId}</td>
                  <td className="p-4 text-gray-500">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <button className="px-3 py-1 text-sm rounded-md bg-indigo-100 text-indigo-600 hover:bg-indigo-200 transition">
                      View
                    </button>
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
