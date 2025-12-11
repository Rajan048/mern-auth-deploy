import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandler = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setIsAuthenticated(true);

      if (
        location.pathname === "/login" ||
        location.pathname === "/signup" ||
        location.pathname === "/"
      ) {
        navigate("/home", { replace: true });
      }
    }
  }, [location]);

  return null;
};

export default RefreshHandler;

























// import React, { use, useEffect } from 'react'
// import { useLocation } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { setIsAuthenticated } from './App';
// const RefreshHandler = () => {
//     const location = useLocation();
//     const navigate = useNavigate();

//     useEffect(() => {
//         if (localStorage.getItem('token')) {
//             setIsAuthenticated(true);
//             if(location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/') {
//                 navigate('/home', { replace: false});
//             }
//         }
//     }, [location, navigate, setIsAuthenticated]);
//   return (
//     null
//   )
// }

// export default RefreshHandler
