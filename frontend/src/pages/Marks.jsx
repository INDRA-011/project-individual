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
  }, [userId]);

  return (
    <div className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Academic Performance
        </h1>
        <p className="text-gray-500 mt-1">
          Comprehensive breakdown of your assessment scores.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-8 py-5 border-b border-gray-50 bg-gray-50/30 flex justify-between text-sm font-bold text-gray-400 uppercase tracking-widest">
          <span>Course Name</span>
          <span>Final Score</span>
        </div>
        <div className="divide-y divide-gray-50">
          {marks.map((mark) => (
            <div
              key={mark.id}
              className="flex justify-between items-center px-8 py-6 hover:bg-gray-50/50 transition-colors"
            >
              <span className="font-semibold text-gray-800 text-lg">
                {mark.course_name}
              </span>
              <div className="flex items-center gap-4">
                <div className="w-32 bg-gray-100 h-2 rounded-full overflow-hidden hidden sm:block">
                  <div
                    className="bg-blue-600 h-full rounded-full"
                    style={{ width: `${mark.score}%` }}
                  />
                </div>
                <span className="font-bold text-xl text-blue-600 bg-blue-50 px-4 py-1.5 rounded-xl min-w-[4rem] text-center">
                  {mark.score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marks;
