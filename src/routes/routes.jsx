import NotFound from "../pages/NotFound";
import AdminRoot from "../pages/admin/AdminRoot";
import Add from "../pages/admin/addProducts/Add";
import AdminDetails from "../pages/admin/adminDetails/AdminDetails";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import Edit from "../pages/admin/edit/Edit";
import Products from "../pages/admin/products/Products";
import UserRoot from "../pages/user/UserRoot";
import About from "../pages/user/about/About";
import Basket from "../pages/user/basket/Basket";
import Blog from "../pages/user/blog/Blog";
import Contact from "../pages/user/contact/Contact";
import Details from "../pages/user/details/Details";
import Favorites from "../pages/user/favorites/Favorites";
import Home from "../pages/user/home/Home";
import Services from "../pages/user/services/Services";

const ROUTES = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: ":id",
        element: <Details />,
      },
      {
        path: "favorites/:id",
        element: <Details />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "products/:id",
        element: <AdminDetails />,
      },
      {
        path: "products/editproducts/:id",
        element: <Edit />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

export default ROUTES;
