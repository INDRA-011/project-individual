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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Courses</h1>

        {courses.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            No courses available.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.course_id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden"
              >
                {/* Header / Visual Placeholder */}
                <div className="h-40 bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold text-lg">
                    Course
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {course.course_name}
                  </h2>

                  <p className="text-sm text-gray-500 mb-3">
                    Instructor: {course.teacher_name}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
