import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UsersDataService from "../../services/users.services";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = localStorage.getItem("userId");
    if (isUserLoggedIn) {
      navigate("/products");
    } else navigate("/login");
  }, []);

  const navigateBasedOnRole = (user) => {
    if (user.role === "Admin") {
      localStorage.setItem("userId", user._id);
      localStorage.setItem("user", user);
      console.log(user._id);
      navigate("/products");
    } else {
      navigate("/user-dashboard");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await UsersDataService.login({ username, password });

      navigateBasedOnRole(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        className="card shadow mx-auto"
        style={{ maxWidth: "380px", marginTop: "100px" }}
      >
        <img
          style={{ width: "100%", height: "50%", objectFit: "contain" }}
          src="/images/medford.svg"
          alt="Not-found"
        />
        <div className="card-body">
          <h4 className="card-title mb-4 text-center">Sign in</h4>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Email"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <button
                type="submit"
                className="btn btn-info w-100"
                disabled={isLoading}
                style={{ backgroundColor: "#2269ff", color: "white" }}
              >
                {isLoading ? (
                  <span
                    className="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
