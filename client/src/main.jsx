import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Coupons from './pages/Coupons.jsx'
import Locations from './pages/Locations'
import Pharmacy from './pages/Pharmacy'
import Error from './pages/Error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            }, {
                path: '/login',
                element: <Login />
            }, {
                path: '/signup',
                element: <Signup />
            }, {
                path: '/coupons',
                element: <Coupons />
            }, {
                path: '/locations',
                element: <Locations />
            }, {
                path: '/pharmacy',
                element: <Pharmacy />
            },
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
