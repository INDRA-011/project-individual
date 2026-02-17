import { useEffect, useState } from "react";
import API from "../api/api";

const Dashboard = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [marksCount, setMarksCount] = useState(0);
  const [noticesCount, setNoticesCount] = useState(0);

  const userId = localStorage.getItem("user_id");
  const username = localStorage.getItem("username");

  useEffect(() => {
    API.get(`/courses/${userId}`).then((res) =>
      setCoursesCount(res.data.courses.length),
    );
    API.get(`/marks/${userId}`).then((res) =>
      setMarksCount(res.data.marks.length),
    );
    API.get("/notices").then((res) => setNoticesCount(res.data.notices.length));
  }, [userId]);

  const stats = [
    {
      label: "Enrolled Courses",
      value: coursesCount,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Total Marks Entries",
      value: marksCount,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
    },
    {
      label: "Active Notices",
      value: noticesCount,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
  ];

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
          Welcome back, {username}
        </h1>
        <p className="mt-2 text-lg text-gray-500">
          Here is what's happening with your academic progress today.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 ${stat.bg} rounded-xl mb-6 flex items-center justify-center`}
            >
              <div
                className={`w-2 h-2 rounded-full ${stat.color} bg-current`}
              />
            </div>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
              {stat.label}
            </p>
            <p className={`text-4xl font-bold mt-2 ${stat.color}`}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-blue-600 rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between shadow-xl shadow-blue-200">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-2">
            Ready to continue learning?
          </h3>
          <p className="text-blue-100">
            Check your course updates and upcoming deadlines.
          </p>
        </div>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
          View Courses
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
