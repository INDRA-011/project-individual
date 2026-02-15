import { useEffect, useState } from "react";
import API from "../api/api";

const Dashboard = () => {
  const [coursesCount, setCoursesCount] = useState(0);
  const [marksCount, setMarksCount] = useState(0);
  const [noticesCount, setNoticesCount] = useState(0);

  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    API.get(`/courses/${userId}`).then((res) =>
      setCoursesCount(res.data.courses.length),
    );
    API.get(`/marks/${userId}`).then((res) =>
      setMarksCount(res.data.marks.length),
    );
    API.get("/notices").then((res) => setNoticesCount(res.data.notices.length));
  }, []);

  const username = localStorage.getItem("username");

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome, {username}</h1>
      <p className="text-gray-600 mb-6">
        This is your student dashboard overview.
      </p>
      <div className="flex gap-6">
        <div className="bg-white p-4 rounded shadow">
          Courses: {coursesCount}
        </div>
        <div className="bg-white p-4 rounded shadow">Marks: {marksCount}</div>
        <div className="bg-white p-4 rounded shadow">
          Notices: {noticesCount}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
