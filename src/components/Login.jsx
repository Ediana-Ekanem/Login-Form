import React, { useState } from "react";

function Login() {
  //Controlled input
  // 1. Combining our states into objects
  // 2. value --- Your react state is what drives

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, seterrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form Validation BElow

    const validationErrors = {};
    if (!formData.email.trim()) {
      validationErrors.email = "email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "email is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password = "password should be atleast 8 characters";
    }
    if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "password don't match";
    }

    seterrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");
    }
  };
  return (
    <div>
      <div
        className="container mt-5 shadow-lg rounded py-5"
        style={{ width: "500px" }}
      >
        <h1 className="text-center text-info">Login</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label fw-semibold"
                >
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control "
                  id="exampleFormControlInput1"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label fw-semibold"
                >
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput2"
                  placeholder="password"
                  onChange={handleChange}
                  name="password"
                  value={formData.password}
                />
                {errors.password && <span>{errors.password}</span>}
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label fw-semibold"
                >
                  Confrim Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                />
                {errors.confirmPassword && (
                  <span>{errors.confirmPassword}</span>
                )}
              </div>
              <button
                // onClick={handleSubmit}
                className="btn btn-info text-white fw-bold btn-lg w-100 mt-4"
              >
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
