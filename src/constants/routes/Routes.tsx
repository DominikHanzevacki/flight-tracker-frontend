import {ErrorPage} from "@pages/error-page/ErrorPage";
import {createBrowserRouter} from "react-router";
import {Dashboard} from "@pages/dashboard/Dashboard";
import {Airlines} from "@pages/airlines/Airlines";
import {AirlineDetails} from "@pages/airlines/details/AirlineDetails";
import App from "../../App";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [{
      path: 'dashboard',
      element: <Dashboard/>
    },
    {
      path: 'airlines',
      element: <Airlines/>,
    },
    {
      path: 'airlines/:id',
      element: <AirlineDetails/>
    }
    ]
  },
]);
