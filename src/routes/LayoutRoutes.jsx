import React, {Fragment} from 'react'
import { Route, Routes} from 'react-router-dom'
import { routes } from './routes'

const LayoutRoutes = () => {
  return (
    <Fragment >
        <Routes>
            {
                routes.map(({path, Component}) => {
                    return  <>
                    <Route path={path} element={<Component />}>
                    </Route>
                    </>
                })
            }
        </Routes>
    </Fragment>
    )
};

export default LayoutRoutes;




