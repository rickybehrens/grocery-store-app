import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.css';  // Import Font Awesome styles
import App from './App.jsx'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Locations from './pages/Locations';
import Shoppinglist from './pages/ShoppingList';
import Sustainability from './pages/Sustainability';
import Error from './pages/Error';

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
                path: '/shoppinglist',
                element: <Shoppinglist />
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
