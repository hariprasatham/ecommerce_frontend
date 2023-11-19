import { createBrowserRouter} from 'react-router-dom'
import ErrorPage from '../Components/ErrorPage.jsx/ErrorPage';

import Home from '../Components/Home/Home';
import Products from '../Components/Products/Products';
import ProductDetailPage from '../Components/ProductDetailPage/ProductDetailPage';
import Cart from '../Components/Cart/Cart';
import Layout from '../Components/Layout/Layout';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                path: "/",
                element: <Home/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/products",
                element: <Products/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/products/:id",
                element: <ProductDetailPage/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/products/category/:category",
                element: <Products/>,
                errorElement: <ErrorPage/>
            },
            {
                path: "/cart",
                element: <Cart/>,
                errorElement: <ErrorPage/>
            }
        ]
    },
    
])

export default router;