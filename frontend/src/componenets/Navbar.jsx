const Navbar = ({ title = "Student Portal" }) => {
  const username = localStorage.getItem("username");

  return (
    <nav className="h-20 bg-white border-b border-gray-100 px-8 flex items-center justify-between sticky top-0 z-10">
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-bold text-gray-900 leading-none">
            {username}
          </p>
          <p className="text-xs font-medium text-gray-500 mt-1">
            Undergraduate
          </p>
        </div>
        <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 font-bold border border-blue-200">
          {username?.charAt(0).toUpperCase()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
