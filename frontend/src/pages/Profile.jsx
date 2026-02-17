const Profile = () => {
  const username = localStorage.getItem("username");

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Personal Profile
      </h1>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-700" />
        <div className="px-8 pb-10">
          <div className="relative -mt-12 mb-6">
            <div className="w-24 h-24 bg-white rounded-2xl p-1 shadow-lg">
              <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center text-3xl font-bold text-gray-500">
                {username?.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                Display Name
              </label>
              <p className="text-xl font-semibold text-gray-800 mt-1">
                {username}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-50 grid grid-cols-2 gap-8">
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Account Type
                </label>
                <p className="font-medium text-gray-700 mt-1">Student</p>
              </div>
              <div>
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Status
                </label>
                <p className="flex items-center text-emerald-600 font-medium mt-1">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                  Active
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
