import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminRFQs } from "../store/adminRfqSlice";

export default function RfqList() {
  const dispatch = useDispatch();
  const { rfqs, loading } = useSelector((s) => s.adminRFQ);

  useEffect(() => {
    dispatch(fetchAdminRFQs({ page: 1, limit: 10 }));
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">RFQ List</h1>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Quote Name</th>
              <th className="p-3 text-left">User ID</th>
              <th className="p-3 text-left">Created</th>
            </tr>
          </thead>

          <tbody>
            {rfqs.map((r) => (
              <tr key={r.id} className="border-t">
                <td className="p-3">{r.id}</td>
                <td className="p-3">{r.quoteName}</td>
                <td className="p-3">{r.userId}</td>
                <td className="p-3">{r.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
