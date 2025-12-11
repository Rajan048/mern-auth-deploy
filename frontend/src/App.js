import './App.css';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RefreshHandler from './RefreshHandler';

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <RefreshHandler setIsAuthenticated={setIsAuthenticated} />

      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Protected Home Route */}
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} />}
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;



























// import './App.css';
// import React from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';

// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import RefreshHandler from './RefreshHandler';

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
//   const PrivateRoute = ({element}) => {
//     return isAuthenticated ? element : <Navigate to="/login" />;
//   }
//   return (
//     <div className="App">
//       <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
//       <Routes>

//         <Route path='/' element={<Navigate to='/login' />} />
//         <Route path='/home' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<PrivateRoute element={<Home/>} />} />

//       </Routes>
//     </div>
//   );
// }

// export default App;
