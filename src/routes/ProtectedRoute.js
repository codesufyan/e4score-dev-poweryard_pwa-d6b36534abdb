// import React, { useContext } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import AuthContext from './AuthContext';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const { isAuthenticated, loading } = useContext(AuthContext);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Route
//       {...rest}
//       render={props =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Redirect to="/" />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;



// import React, { useContext } from 'react';
// import { Route, Navigate } from 'react-router-dom';
// import AuthContext from '../AuthContext'; // Ensure the correct import path

// const ProtectedRoute = ({ element: Element, ...rest }) => {
//   const { isAuthenticated, loading } = useContext(AuthContext);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Route
//       {...rest}
//       element={
//         isAuthenticated ? (
//           <Element />
//         ) : (
//           <Navigate to="/" />
//         )
//       }
//     />
//   );
// };

// export default ProtectedRoute;






import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
