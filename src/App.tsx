import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BlogPage from './BlogPage';
import { Home } from './components/Home';
import Main from './pages/main';
import { ErrorPage } from './pages/ErrorPage';
import { LoginPage } from './components/LoginPage';
import { AuthProvider } from './components/Auth';


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<ErrorPage/>,
        children:[
            { path:'/',element:<Home/> },
            { path:'/blogs',element:<BlogPage/>},
            { path:'/login',element:<LoginPage/>}
         ]}    
]);

 const App = () => { 
    return(
        <AuthProvider> <RouterProvider router={router}/> </AuthProvider>        
    ) 
}

export default App; 
