import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api/api";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/login", form)
      .then((res) => {
        localStorage.setItem("user_id", res.data.user_id);
        localStorage.setItem("username", res.data.username);
        navigate("/dashboard");
      })
      .catch((err) => {
        alert("Invalid credentials");
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-gray-500 mt-2 font-medium">
            Please enter your details to sign in
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
        >
          <div className="space-y-5">
            <div>
              <label className="text-sm font-bold text-gray-700 mb-2 block">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="name@university.edu"
                onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold text-gray-700">
                  Password
                </label>
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-600 hover:underline"
                >
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                onChange={handleChange}
                className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all"
                required
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl mt-8 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
            Sign In
          </button>

          <p className="text-center text-gray-500 mt-8 text-sm font-medium">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-bold hover:underline"
            >
              Create account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};
console.log("User ID from localStorage:", localStorage.getItem("user_id"));

export default Login;
