// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const checkLogin = async () => {
//       try {
//         const response = await axios.get('https://py-dev-api.e4score.com/authentication/v2/check-login');
//         setIsAuthenticated(response.data.isAuthenticated);
//       } catch (error) {
//         console.error('Error checking login status', error);
//         setIsAuthenticated(false);
//       } finally {
//         setLoading(false);
//       }
//     };

//     checkLogin();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ isAuthenticated, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;




import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axios.post('https://py-dev-api.e4score.com/authentication/v2/login', {
          withCredentials: true
        });

        if (response.data.code === '200') {
          setIsLoggedIn(response.data.isAuthenticated);
        } else {
          console.error('Unexpected response status', response.data);
          setIsLoggedIn(false);
        }
      } catch (error) {
        console.error('Error checking login status', error);
        setIsLoggedIn(false);
      } finally {
        setLoading(false);
      }
    };

    checkLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
