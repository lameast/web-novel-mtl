import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from './pages/home/home';
import ErrorPage from './pages/error-pages/error-page';
import Root from './components/root/root';
import Search from './pages/novel-search/search';
import NovelPage from './pages/novel-page/NovelPage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "home/",
        element: <Home/>
      },
      {
        path: "novels/",
        element: <Search/>
      },
      {
        path: "novel/",
        element: <NovelPage/>
      }
    ]
  }
])

root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);


