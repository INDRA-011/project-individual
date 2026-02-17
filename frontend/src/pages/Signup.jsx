import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/register", form)
      .then((res) => {
        alert("Account created successfully!");
        navigate("/login");
      })
      .catch((err) => alert("Failed to register"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
          <p className="text-gray-500 mt-2 font-medium">
            Join the student portal today
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
        >
          <div className="space-y-5">
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 block">
                Username
              </label>
              <input
                type="text"
                name="username"
                placeholder="johndoe"
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@university.edu"
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
              />
            </div>
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 block">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
                required
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl mt-8 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            Get Started
          </button>

          <p className="text-center text-gray-500 mt-8 text-sm font-medium">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-bold hover:underline"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
