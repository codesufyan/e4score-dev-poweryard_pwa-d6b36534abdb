// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import '../src/assets/CSS/Custom.css'
// import AllRoutes from './routes';
// import Menu from './component/common/Menu';
// import { useLocation } from 'react-router-dom';
// import Footer from './component/common/Footer';

// function App() {
//   const location = useLocation();
//   console.log("location", location.pathname);

//   return (
//     <div className="App">
//       {location.pathname !== "/" && <Menu />}
//       <AllRoutes />
//       {location.pathname !== "/" && <Footer />}
//     </div>
//   );
// }

// export default App;






// import React from 'react';
// import './App.css';
// import '../src/assets/CSS/Custom.css';
// import AllRoutes from './routes';
// import Menu from './component/common/Menu';
// import { useLocation } from 'react-router-dom';
// import Footer from './component/common/Footer';
// import { AuthProvider } from './AuthContext'; // Ensure correct import path

// function App() {
//   const location = useLocation();
//   console.log("location", location.pathname);

//   return (
//     <AuthProvider>
//       <div className="App">
//         {location.pathname !== "/" && <Menu />}
//         <AllRoutes />
//         {location.pathname !== "/" && <Footer />}
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;



// import React from 'react';
// import './App.css';
// import '../src/assets/CSS/Custom.css';
// import AllRoutes from './routes';
// import Menu from './component/common/Menu';
// import { useLocation } from 'react-router-dom';
// import Footer from './component/common/Footer';
// import { AuthProvider } from './AuthContext';

// function App() {
//   const location = useLocation();
//   console.log("location", location.pathname);

//   return (
//     <AuthProvider>
//       <div className="App">
//         {location.pathname !== "/" && <Menu />}
//         <AllRoutes />
//         {location.pathname !== "/" && <Footer />}
//       </div>
//     </AuthProvider>
//   );
// }

// export default App;

import React, { useEffect } from 'react';
import './App.css';
import '../src/assets/CSS/Custom.css';
import AllRoutes from './routes';
import Menu from './component/common/Menu';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from './component/common/Footer';
import { AuthProvider, useAuth } from './AuthContext';

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (isLoggedIn && location.pathname === '/') {
        navigate('/dashboard'); // Navigate to dashboard if authenticated
      } else if (!isLoggedIn && location.pathname === '/dashboard') {
        navigate('/'); // Redirect to home if not authenticated
      }
    }
  }, [isLoggedIn, loading, location.pathname, navigate]);

  console.log('location', location.pathname);

  return (
    <div className="App">
      {!loading && location.pathname !== '/' && <Menu />}
      <AllRoutes />
      {!loading && location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;


