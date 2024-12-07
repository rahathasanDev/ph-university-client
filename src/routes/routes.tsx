import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateStudent from "../pages/admin/CreateStudent";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
    ]
  },
  {
    path: "/admin",
    element: <App></App>,
    children: [
      // {
      //   index: true,
      //   element: <AdminDashboard/>,
      // },
      {
        path: "dashboard",
        element: <AdminDashboard/>,
      },
      {
        path: "create-student",
        element: <CreateStudent></CreateStudent>,
      },
      {
        path: "create-admin",
        element: <CreateAdmin></CreateAdmin>,
      },
      {
        path: "create-faculty",
        element: <CreateFaculty></CreateFaculty>,
      },
    ]
  },
  
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);
export default router;
