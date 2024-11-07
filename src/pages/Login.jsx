import { useContext, useState } from "react";
import { useAuth } from "../store/auth";
import { NoticeContext } from "../store/noticeContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [admin, setAdmin] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const { serverUrl } = useContext(NoticeContext);
  const { storeToken} = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${serverUrl}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(admin),
    });

    const data = await response.json();
    if (response.ok) {
      storeToken(data.token);
      navigate("/");
      toast.success(data.message, {
        autoClose: 3000,
        theme: "dark",
      });
    } else {
      console.error("Failed to log in:", data.message);
      toast.error(data.message || "Login failed");
    }
  };

  return (
    <div className="px-4 py-6 flex flex-col w-full h-screen items-center justify-center">
      <h1 className="text-2xl font-semibold">Admin Login</h1>
      <form onSubmit={handleSubmit} className="w-full flex flex-col lg:w-1/3">
        <div>
          <h1 className="text-lg font-semibold text-zinc-300">Email</h1>
          <input
            type="email"
            className="w-full px-6 py-4 bg-zinc-700 mb-4 text-xl outline-none"
            placeholder="Enter your email...."
            required
            value={admin.email}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold text-zinc-300">Password</h1>
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full px-6 py-4 bg-zinc-700 mb-4 text-xl outline-none"
              placeholder="Enter password...."
              required
              value={admin.password}
              onChange={handleChange}
              name="password"
            />
            <button
              type="button" // Updated type to "button"
              className="absolute right-4 top-[40%] transform -translate-y-1/2 text-2xl text-zinc-300"
              onClick={togglePasswordVisibility}
            >
              <i
                className={showPassword ? "ri-eye-line" : "ri-eye-off-line"}
              ></i>
            </button>
          </div>
        </div>
        <button className="px-6 py-4 bg-primary-100 mt-6 text-xl font-semibold">
          Log in <i className="ri-login-box-line"></i>
        </button>
      </form>
    </div>
  );
};

export default Login;
