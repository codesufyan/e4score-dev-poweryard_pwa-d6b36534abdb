import React from 'react'
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutRoutes from './LayoutRoutes';


const AllRoutes = () => {
  return (
      <Suspense >
        <Routes>
          <Route path={`/*`} element={<LayoutRoutes />} />
        </Routes>
      </Suspense>
    
  );
};

export default AllRoutes;

