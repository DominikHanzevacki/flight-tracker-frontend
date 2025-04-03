import {ErrorPage} from "@pages/error-page/ErrorPage";
import {createBrowserRouter} from "react-router";
import {Dashboard} from "@pages/dashboard/Dashboard";
import App from "../../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [{
      path: 'dashboard',
      element: <Dashboard/>
    }]
  },
]);
