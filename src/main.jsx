import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';
import Layout from './components/Layout';
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente';
import Index, {loader as clientesLoader} from './pages/Index';
import ErrorPage from './components/ErrorPage';
import EditarCliente, {loader as editarClienteLoader, action as actualizarClienteAction} from './pages/EditarCliente';
import {action as eliminarClienteAction} from './components/Cliente';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Index />,
                loader: clientesLoader,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes/nuevo',
                element: <NuevoCliente />,
                action: nuevoClienteAction,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes/:id/editar',
                element: <EditarCliente/>,
                loader: editarClienteLoader,
                action: actualizarClienteAction,
                errorElement: <ErrorPage/>
            },
            {
                path: '/clientes/:id/eliminar',
                action: eliminarClienteAction
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
