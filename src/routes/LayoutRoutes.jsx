// import React, {Fragment} from 'react'
// import { Route, Routes} from 'react-router-dom'
// import { routes } from './routes'

// const LayoutRoutes = () => {
//   return (
//     <Fragment >
//         <Routes>
//             {
//                 routes.map(({path, Component}) => {
//                     return  <>
//                     <Route path={path} element={<Component />}>
//                     </Route>
//                     </>
//                 })
//             }
//         </Routes>
//     </Fragment>
//     )
// };

// export default LayoutRoutes;




import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from './routes';

const LayoutRoutes = () => {
  return (
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};

export default LayoutRoutes;
