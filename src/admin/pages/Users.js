import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminUsers } from "../store/adminUsersSlice";
import { Search } from "lucide-react";

export default function Users() {
  const dispatch = useDispatch();
  const { users, loading, total } = useSelector((s) => s.adminUsers);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdminUsers({ page, limit: 8, search }));
  }, [dispatch, page, search]);

  const handleSearch = () => {
    setPage(1);
    dispatch(fetchAdminUsers({ page: 1, limit: 8, search }));
  };

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Users Management
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Manage all registered platform users
          </p>
        </div>

        <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-lg">
          Total: <span className="font-semibold">{total || 0}</span>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative w-full max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search users..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            onClick={handleSearch}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg transition"
          >
            Search
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
        {loading ? (
          <div className="p-6 text-gray-500">Loading users...</div>
        ) : users.length === 0 ? (
          <div className="p-6 text-gray-500">No users found.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-left font-medium text-gray-600">ID</th>
                <th className="p-4 text-left font-medium text-gray-600">Email</th>
                <th className="p-4 text-left font-medium text-gray-600">Role</th>
                <th className="p-4 text-left font-medium text-gray-600">Created</th>
                <th className="p-4 text-left font-medium text-gray-600">Status</th>
                <th className="p-4 text-left font-medium text-gray-600">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="border-t hover:bg-gray-50 transition"
                >
                  <td className="p-4 font-medium text-gray-700">{u.id}</td>
                  <td className="p-4 text-gray-800">{u.email}</td>
                  <td className="p-4 text-gray-600">{u.role}</td>
                  <td className="p-4 text-gray-500">
                    {new Date(u.createdAt).toLocaleDateString()}
                  </td>

                  {/* Status Badge */}
                  <td className="p-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                      Active
                    </span>
                  </td>

                  {/* Action */}
                  <td className="p-4">
                    <button className="px-3 py-1 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition">
                      Disable
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-end gap-3">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Prev
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-100 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}
