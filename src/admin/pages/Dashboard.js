import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminDashboard } from "../store/adminDashboardSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.adminDashboard);

  useEffect(() => {
    dispatch(fetchAdminDashboard());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;

  const cards = [
    { title: "Total Users", value: data.totalUsers },
    { title: "Total EMS", value: data.totalEMS },
    { title: "Total PM", value: data.totalPM },
    { title: "Total RFQs", value: data.totalRFQs },
    { title: "Total Projects", value: data.totalProjects },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-5 gap-4">
        {cards.map((c, i) => (
          <div key={i} className="bg-white shadow rounded p-6">
            <p className="text-gray-500">{c.title}</p>
            <h2 className="text-3xl font-bold">{c.value || 0}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
