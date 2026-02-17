const Settings = () => {
  return (
    <div className="max-w-2xl space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Settings</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 divide-y divide-gray-50">
        <div className="p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Notification Preferences
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Control how you receive academic updates and alerts.
          </p>
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
            <span className="font-medium text-gray-700">
              Email Notifications
            </span>
            <div className="w-12 h-6 bg-blue-600 rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Security</h3>
          <p className="text-gray-500 text-sm mb-6">
            Manage your password and account protection settings.
          </p>
          <button className="px-6 py-2.5 bg-white border border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
