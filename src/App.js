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





import React from 'react';
import './App.css';
import '../src/assets/CSS/Custom.css'
import AllRoutes from './routes';
import Menu from './component/common/Menu';
import { useLocation } from 'react-router-dom';
import Footer from './component/common/Footer';

function App() {
  const location = useLocation();
  console.log("location", location.pathname);

  return (
    <div className="App">
      {location.pathname !== "/" && <Menu />}
      <AllRoutes />
      {location.pathname !== "/" && <Footer />}
    </div>
  );
}

export default App;