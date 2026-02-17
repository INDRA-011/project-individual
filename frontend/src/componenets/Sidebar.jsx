import { Link, useLocation } from "react-router-dom";

const handleLogout = () => {
  localStorage.clear();
  window.location.href = "/login";
};

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard" },
    { path: "/dashboard/courses", label: "Courses" },
    { path: "/dashboard/marks", label: "Marks" },
    { path: "/dashboard/notices", label: "Notices" },
    { path: "/dashboard/profile", label: "Profile" },
    { path: "/dashboard/settings", label: "Settings" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="w-72 bg-gray-900 text-gray-300 flex flex-col sticky top-0 h-screen">
      <div className="p-8">
        <div className="flex items-center gap-3 px-2">
          <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <h2 className="text-xl font-semibold text-white tracking-tight">Student Portal</h2>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-1.5">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive(item.path)
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                    : "hover:bg-gray-800 hover:text-white"
                }`}
              >
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-6 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-xl transition-colors duration-200"
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;