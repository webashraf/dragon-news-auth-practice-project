import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './ROUTES/Route';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
    </RouterProvider>
)
