import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100">
      <nav className="max-w-7xl mx-auto px-8 py-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
            S
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            StudentPortal
          </span>
        </div>
        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-6 py-2.5 font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="px-6 py-2.5 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-20 pb-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h1 className="text-7xl font-extrabold text-gray-900 leading-[1.1]">
              Manage your{" "}
              <span className="text-blue-600 underline decoration-blue-100 underline-offset-8">
                Academic
              </span>{" "}
              journey in one place.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
              A modern, intuitive platform for students to track courses,
              monitor performance, and stay updated with campus life.
            </p>
            <div className="flex gap-4 pt-4">
              <Link
                to="/signup"
                className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all"
              >
                Get Started for Free
              </Link>
              <Link
                to="/login"
                className="px-8 py-4 bg-gray-50 text-gray-900 font-bold rounded-2xl hover:bg-gray-100 transition-all"
              >
                Member Login
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-50 rounded-[3rem] -rotate-2"></div>
            <div className="relative bg-white border border-gray-100 rounded-[2.5rem] shadow-2xl p-8 aspect-square flex flex-col justify-center items-center text-center">
              <div className="w-24 h-24 bg-blue-100 rounded-3xl mb-6 flex items-center justify-center text-blue-600">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Centralized Dashboard
              </h3>
              <p className="mt-4 text-gray-500">
                All your marks, courses, and notices in a single,
                high-performance interface.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
