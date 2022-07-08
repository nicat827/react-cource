import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { publicRoutes, privateRoutes } from '../routes';
import { useContext } from 'react';
import { AuthContext } from '../context';
const AppRouter = () => {

    const {isAuth, isLoading} = useContext(AuthContext);
    
    
    if(isLoading) {
        return <h1>Подождите...</h1>
    }

    return (
        isAuth
        ?
        <Routes>
            <Route path='/' element={<Layout/>}>
                {privateRoutes.map(route => 
                    <Route 
                    path={route.path} 
                    element={route.element} 
                    key={route.path}
                />
                )}
            </Route>
        </Routes>

        : 
        <Routes>
            <Route path='/' element={<Layout/>}>
                {publicRoutes.map(route => 
                    <Route 
                    path={route.path} 
                    element={route.element} 
                    key={route.path} />
                )}
            </Route>
        </Routes>
        
      
    );
};

export default AppRouter;