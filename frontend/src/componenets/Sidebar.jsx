import { Link } from "react-router-dom";

const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-6">Student Portal</h2>

      <ul className="space-y-4">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/dashboard/courses">Courses</Link>
        </li>

        <li>
          <Link to="/dashboard/marks">Marks</Link>
        </li>

        <li>
          <Link to="/dashboard/profile">Profile</Link>
        </li>
        <li>
          <Link to="/dashboard/notices" className="mb-3">
            Notices
          </Link>
        </li>

        <li>
          <Link to="/dashboard/settings">Settings</Link>
        </li>

        <li>
          <button onClick={handleLogout} className="text-red-600 mt-4">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
