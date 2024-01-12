import React, { useState } from "react";

function Login({ darkMode }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "Password should be at least 8 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div
        className={`container  shadow-lg rounded py-5 ${
          darkMode ? "border border-5 border-white  text-white " : ""
        }`}
        style={{ width: "500px" }}
      >
        <div className="flex justify-center">
          <h1 className="text-center  font-bold py-2 px-4  text-2xl text-info">
            Login
          </h1>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control "
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
                {errors.password && <span>{errors.password}</span>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fw-semibold"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                />
                {errors.confirmPassword && (
                  <span>{errors.confirmPassword}</span>
                )}
              </div>
              <button className="btn btn-info text-white fw-bold btn-lg w-100 mt-4">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
