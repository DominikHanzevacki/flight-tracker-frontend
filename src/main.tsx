import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {Provider} from 'react-redux';
import {routes} from "./constants/routes/Routes";
import {store} from "@services/store/store";
import '@ant-design/v5-patch-for-react-19';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>,
)
