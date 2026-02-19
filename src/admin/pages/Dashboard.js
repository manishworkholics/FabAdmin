import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminDashboard } from "../store/adminDashboardSlice";
import {
  Users,
  Building2,
  Briefcase,
  FileText,
  FolderKanban,
} from "lucide-react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((s) => s.adminDashboard);

  useEffect(() => {
    dispatch(fetchAdminDashboard());
  }, [dispatch]);

  const cards = [
    {
      title: "Total Users",
      value: data?.totalUsers,
      icon: <Users size={22} />,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Total EMS",
      value: data?.totalEMS,
      icon: <Building2 size={22} />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Total PM",
      value: data?.totalPM,
      icon: <Briefcase size={22} />,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Total RFQs",
      value: data?.totalRFQs,
      icon: <FileText size={22} />,
      gradient: "from-orange-500 to-amber-500",
    },
    {
      title: "Total Projects",
      value: data?.totalProjects,
      icon: <FolderKanban size={22} />,
      gradient: "from-rose-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Cards */}
      {loading ? (
        <div className="text-gray-500">Loading dashboard...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 relative overflow-hidden hover:shadow-xl transition duration-300"
            >
              {/* Background Gradient Circle */}
              <div
                className={`absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br ${card.gradient} opacity-20`}
              ></div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{card.title}</p>
                  <h2 className="text-3xl font-bold text-gray-800 mt-1">
                    {card.value || 0}
                  </h2>
                </div>

                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${card.gradient} text-white shadow-md`}
                >
                  {card.icon}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
