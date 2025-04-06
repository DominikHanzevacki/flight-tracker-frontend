import {createBrowserRouter} from "react-router";
import {Dashboard} from "@pages/dashboard/Dashboard";
import {Airlines} from "@pages/airlines/Airlines";
import {AirlineDetails} from "@pages/airlines/details/AirlineDetails";
import App from "../../App";
import {Airports} from "@pages/airports/Airports";
import {AirportsLiveLocations} from "@pages/airports/live-location/AirportsLiveLocations";
import {AirportDetails} from "@pages/airports/details/AirportDetails";
import {NotFound} from "@pages/not-found/NotFound";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
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
    },
    {
      path: 'airports',
      element: <Airports/>
    },
    {
      path: 'airports/:id',
      element: <AirportDetails/>
    },
    {
      path: 'airports-live-location',
      element: <AirportsLiveLocations/>

    },
    ]
  },
]);
