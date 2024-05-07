import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from "../pages/LoginPage";
import ProfilePage from '../pages/ProfilePage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

//createBrowerRouter : FN
//RouterProvider : Component
const router = createBrowserRouter([
    { path:'/', element: <HomePage />},
    { path: '/login', element: <LoginPage />},
    { path: '/profile', element: <ProfilePage />}, 
    { path: '*', element: <NotFoundPage/>}
]); 

function Router(){
    return <RouterProvider router={router} />;
}

export default Router;