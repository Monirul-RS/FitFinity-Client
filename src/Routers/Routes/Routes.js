import Main from "../../Layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Home from '../../Pages/Home/Home/Home';
import AddServices from "../../Pages/Home/Services/AddServices/AddServices";
import AllServices from "../../Pages/Home/Services/AllServices";
import ServiceDetails from "../../Pages/Home/Services/ServiceDetails";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import Review from "../../Pages/Review/Review";
import SignUp from "../../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allServices',
          element: <AllServices></AllServices>
        },
        {
          path: '/details/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/review/:id',
          element: <Review></Review>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/myReviews',
          element: <MyReviews></MyReviews>
        },
        {
          path: '/addServices',
          element: <AddServices></AddServices>,
          // loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        }
      ]
    }
  ]);


  export default router;