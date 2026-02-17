import { useEffect, useState } from "react";
import API from "../api/api";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    API.get("/courses/1")
      .then((res) => {
        setCourses(res.data.courses);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          My Courses
        </h1>
        <p className="text-gray-500 mt-1">
          Manage and view your active academic enrollments.
        </p>
      </div>

      {courses.length === 0 ? (
        <div className="bg-white rounded-3xl p-20 text-center border-2 border-dashed border-gray-200">
          <p className="text-gray-400 text-lg">
            No courses available at the moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.course_id}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              <div className="h-32 bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center border-b border-gray-50">
                <div className="p-3 bg-white rounded-xl shadow-sm text-blue-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {course.course_name}
                </h2>
                <div className="flex items-center mt-2 text-sm text-gray-500 font-medium">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {course.teacher_name}
                </div>
                <p className="mt-4 text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {course.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-50">
                  <button className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-all">
                    View Course Details
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
