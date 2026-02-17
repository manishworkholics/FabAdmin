import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminUsers } from "../store/adminUsersSlice";

export default function Users() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((s) => s.adminUsers);

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAdminUsers({ page, limit: 10, search }));
  }, [dispatch, page, search]);

  const handleSearch = () => {
    setPage(1);
    dispatch(fetchAdminUsers({ page: 1, limit: 10, search }));
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Users Management</h1>

      {/* Search */}
      <div className="flex gap-3 mb-4">
        <input
          className="border p-2"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Created</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-t">
                <td className="p-3">{u.id}</td>
                <td className="p-3">{u.email}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3">{u.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          className="border px-3 py-1"
        >
          Prev
        </button>

        <button
          onClick={() => setPage((p) => p + 1)}
          className="border px-3 py-1"
        >
          Next
        </button>
      </div>
    </div>
  );
}
