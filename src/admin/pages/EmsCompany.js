import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminEMS } from "../store/adminEmsSlice";

export default function EmsCompany() {
  const dispatch = useDispatch();
  const { companies, loading } = useSelector((s) => s.adminEMS);

  useEffect(() => {
    dispatch(fetchAdminEMS({ page: 1, limit: 10 }));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">EMS Companies</h1>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">State</th>
              <th className="p-3 text-left">Country</th>
              <th className="p-3 text-left">Created</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3">{c.id}</td>
                <td className="p-3">{c.name}</td>
                <td className="p-3">{c.state}</td>
                <td className="p-3">{c.country}</td>
                <td className="p-3">{c.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
