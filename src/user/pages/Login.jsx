import { useState } from "react";
import { loginUser } from "../../auth/login";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FiLoader } from "react-icons/fi";
import { CiLogin } from "react-icons/ci";
import logo from "../../assets/imgs/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const result = await dispatch(loginUser(email, password));

      if (result.success) {
        if (result.role === "admin") {
          navigate("/dashboard");
        } else if (result.role === "superadmin") {
          navigate("/vendor-new");
        } else {
          alert("Unauthorized role");
        }
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <img src={logo} className="max-w-xs" alt="logo" />
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-[2.5rem] shadow-md">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Vendor Authentication
          </h1>
          <p className="mt-2 text-gray-600">Sign in to access your dashboard</p>
          <div className="italic">
            <div className="bg-red-50 border-l-4 border-red-500 p-2 mb-4">
              <p className="mt-2 text-gray-600 ">Demo Vendor Logins</p>
              <ul className="space-y-1 text-gray-700 text-xs ">
                <li>• Email : cafe@dostea.com</li>
                <li>
                  • Password : tushar537
                </li>
              </ul>
            </div>
          </div>
        </div>

        {error && (
          <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-xl shadow-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center gap-2 justify-center py-2 px-4 border border-transparent rounded-xl shadow-sm text-lg font-medium text-white bg-blackBg hover:bg-blackBg/20 focus:outline-none"
            >
              {loading ? (
                <FiLoader className="animate-spin text-xl" />
              ) : (
                <CiLogin className="text-xl" />
              )}{" "}
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
