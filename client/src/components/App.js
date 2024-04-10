import React from "react";
// import Dashboard from "../pages/Dashboard";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function App(){
    
    return (
            
        <div className="App">
            <Sidebar />
            <Outlet />
        </div>
    )
    
}