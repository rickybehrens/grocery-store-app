import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import App from './App.jsx'

const client = new ApolloClient({
    uri: '/graphql',
    cache: new InMemoryCache(),
});

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>
        ),
        errorElement: <h1 className='display-2'>Wrong page!</h1>,
        children: [
            {
                index: true,
                element: (
                    <ApolloProvider client={client}>
                    </ApolloProvider>
                ),
            }, {
                path: '/saved',
                element: (
                    <ApolloProvider client={client}>
                    </ApolloProvider>
                ),
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
