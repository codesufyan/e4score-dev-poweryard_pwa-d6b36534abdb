

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




import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const loginCheck = localStorage.getItem('loginCheck');
    return loginCheck === 'true' ? <Component {...rest} /> : <Navigate to="/" />;
};

export default ProtectedRoute;


