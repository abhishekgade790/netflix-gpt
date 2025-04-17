import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Error from './components/Error';
import Browse from './components/Browse';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import AppLayout from './components/AppLayout';
import MyList from './components/MyList';
import MovieDetail from './components/MovieDetail';
import Profile from './components/Profile';


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/browse",
        element: <Browse />
      },
      {
        path: "/mylist",
        element: <MyList />
      },
      {
        path: "/movie/:id", // <-- New route for detail page
        element: <MovieDetail />
      },
      {
        path:"/u/:displayName",
        element: <Profile/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
