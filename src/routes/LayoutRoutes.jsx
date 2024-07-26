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





// import React, { Fragment } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import { routes } from './routes';
// import ProtectedRoute from './ProtectedRoute';

// const LayoutRoutes = () => {
//   return (
//     <Fragment>
//       <Routes>
//         {routes.map(({ path, Component, protected: isProtected }) => {
//           if (isProtected) {
//             return (
//               <Route key={path} path={path} element={<ProtectedRoute />}>
//                 <Route path={path} element={<Component />} />
//               </Route>
//             );
//           } else {
//             return <Route key={path} path={path} element={<Component />} />;
//           }
//         })}
//       </Routes>
//     </Fragment>
//   );
// };

// export default LayoutRoutes;






import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import ProtectedRoute from './ProtectedRoute';

const LayoutRoutes = () => {
  return (
    <Fragment>
      <Routes>
        {routes.map(({ path, Component, protected: isProtected }) => {
          if (isProtected) {
            return (
              <Route key={path} element={<ProtectedRoute />}>
                <Route path={path} element={<Component />} />
              </Route>
            );
          } else {
            return <Route key={path} path={path} element={<Component />} />;
          }
        })}
      </Routes>
    </Fragment>
  );
};

export default LayoutRoutes;
