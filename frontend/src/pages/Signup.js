import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../utils";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [signupInfo, setSignupInfo] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;

    if (!name || !email || !password) {
      return handleError("All fields are required");
    }

    try {
      const url = "https://mern-auth-deploy-api.vercel.app/auth/signup"; // FIXED
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();
      const {success,message, error}=result;
      if(success){
        handleSuccess(message);
        setTimeout(()=>{
          navigate('/login');
        },2000);
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      } else if(!success){
        handleError(message);
      }
      console.log(result);

    //   if (result.error) return handleError(result.error);

    } catch (err) {
      handleError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
        
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            type="text"
            name="name"
            autoFocus
            placeholder="Enter your Name"
            value={signupInfo.name}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter your Email"
            value={signupInfo.email}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={signupInfo.password}
          />
        </div>

        <button type="submit">Signup</button>

        <span style={{ textDecoration: "none" }}>
          Already have an account?
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "blue", marginLeft: "5px" }}
          >
            Login
          </Link>
        </span>
      </form>

      <ToastContainer />
    </div>
  );
};

export default Signup;
