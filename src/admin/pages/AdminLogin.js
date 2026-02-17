import { useState } from "react";
import { useMutation } from "@apollo/client/react";
import { ADMIN_LOGIN } from "../graphql/mutations";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [adminLogin, { loading }] = useMutation(ADMIN_LOGIN);

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await adminLogin({
      variables: {
        data: {
          email,
          password,
        },
      },
    });

    localStorage.setItem("adminToken", res.data.adminLogin);

    window.location.href = "/admin/dashboard";
  };


  return (
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 shadow rounded w-96"
      >
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        <input
          className="border w-full mb-3 p-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="border w-full mb-4 p-2"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={loading}
          className="bg-blue-600 text-white w-full p-2 rounded"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}
