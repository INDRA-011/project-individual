import { useEffect, useState } from "react";
import API from "../api/api";

const Notices = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    API.get("/notices")
      .then((res) => setNotices(res.data.notices))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Notice Board</h1>
        <p className="text-gray-500 mt-1">
          Stay updated with the latest campus announcements.
        </p>
      </div>

      <div className="space-y-4">
        {notices.map((n) => (
          <div
            key={n.id}
            className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-bold uppercase rounded-full tracking-wider">
                Announcement
              </div>
              <span className="text-xs text-gray-400 font-medium italic">
                Recent
              </span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {n.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-base">
              {n.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
