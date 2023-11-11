import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<App />
    ),
  },
  {
    path: "/CURRENT",
    element: (<App />
    ),
  },
  {
    path: "/UPCOMING",
    element: (<App />
    ),
  },
  {
    path: "/CLOSED",
    element: (<App />
    ),
  },
  {
    path: "/ALL",
    element: (<App />
    ),
  },
  {
    path: "/MAINLINE",
    element: (<App />
    ),
  },
  {
    path: "/SME",
    element: (<App />
    ),
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
