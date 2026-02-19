import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { ADMIN_LOGIN } from "../graphql/mutations";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [adminLogin, { loading }] = useMutation(ADMIN_LOGIN);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await adminLogin({
        variables: {
          data: { email, password },
        },
      });

      localStorage.setItem("adminToken", res.data.adminLogin);
      window.location.href = "/admin/dashboard";
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      
      <div className="bg-white/90 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-md p-8">
        
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            FabSpace Admin
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Secure Admin Access
          </p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-100 text-red-600 p-2 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="admin@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 transition duration-200"
          >
            {loading ? "Signing In..." : "Login"}
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} FabSpace. All rights reserved.
        </div>
      </div>
    </div>
  );
}
