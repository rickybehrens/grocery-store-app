import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Locations from './pages/Locations'
import Sustainability from './pages/Sustainability'
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
                path: '/locations',
                element: <Locations />
            }, {
                path: '/sustainability',
                element: <Sustainability />
            },
        ],
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
