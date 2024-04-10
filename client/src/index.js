import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"
import App from "./components/App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import IntensityGraphs from "./pages/IntensityGraphs";
import LikelihoodGraphs from "./pages/LikelihoodGraphs";
import RelevanceGraphs from "./pages/RelevanceGraphs";
import NotFound from "./pages/NotFound";
import Sidebar from "./components/Sidebar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/intensityGraphs",
                element: <IntensityGraphs />
            },
            {
                path: "/likelihoodGraphs",
                element: <LikelihoodGraphs />
            },
            {
                path: "/relevanceGraphs",
                element:<RelevanceGraphs />
            }
        ]
    },
    
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);