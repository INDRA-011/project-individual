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
    <div>
      <h1 className="text-2xl font-bold mb-6">Notices</h1>
      <div className="bg-white rounded-xl shadow p-6">
        {notices.map((n) => (
          <div key={n.id} className="border-b py-3">
            <h2 className="font-semibold">{n.title}</h2>
            <p className="text-gray-600">{n.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;
