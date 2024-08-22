import { createBrowserRouter } from "react-router-dom";
import {lazy} from "react"
const Home = lazy
import Add from "../pages/Add.jsx";
import Home from "../pages/Home.jsx";
import Edit from "../pages/Edit.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Layout from "../components/Layout.jsx";
import ModOrAdminPage from "../pages/ModOrAdminPage.jsx";
import NotAllowed from "../pages/NotAllowed.jsx";
//import UserPage from "../pages/UserPage.jsx";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "add",
        element: <Add />,
      },
      {
        path: "edit/:id",
        element: (
          <ModOrAdminPage>
            <Edit />
          </ModOrAdminPage>
        ),
      },
      { path: "login", element: <Login /> },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "notAllowed",
        element: <NotAllowed />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <div>Adimin</div>,
    children: [
      {
        path: "Admin",
        element: <div>Dashboard User</div>,
      },
    ],
  },
]);
export default Router;
