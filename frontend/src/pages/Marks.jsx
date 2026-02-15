import { useEffect, useState } from "react";
import API from "../api/api";

const Marks = () => {
  const [marks, setMarks] = useState([]);
  const userId = localStorage.getItem("user_id");

  useEffect(() => {
    API.get(`/marks/${userId}`)
      .then((res) => {
        setMarks(res.data.marks);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">My Marks</h1>

      <div className="bg-white rounded-xl shadow p-6">
        {marks.map((mark) => (
          <div key={mark.id} className="flex justify-between border-b py-3">
            <span>{mark.course_name}</span>
            <span className="font-semibold">{mark.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marks;
