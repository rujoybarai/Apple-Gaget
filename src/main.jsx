import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Page/Home.jsx'
import Shop from './Page/Shop.jsx'
import ProductDetails from './Component/ProductDetails.jsx'
import Offers from './Page/Offers.jsx'
import PreOrder from './Page/PreOrder.jsx'


const router = createBrowserRouter([
{
  path:'/', element:<App/>, children:[
 {
    path:'/',element:<Home/>,
 },
 {
  path:'/shop',element:<Shop/>,
 },
 {
  path:'/productdetails',element:<ProductDetails/>,
 },
 {
  path:"/offers", element:<Offers/>,
 },
 {
  path:"/preorder",element:<PreOrder/>,
 }

  ],
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router}/>
  </StrictMode>,
)
