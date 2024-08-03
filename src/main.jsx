import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { store } from './store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx';
import Home from './Home.jsx';
import Contact from './routes/contact.jsx';
import ErrorPage from './error-page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'contact/:id',
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
