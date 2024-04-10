import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const items = ["Dashboard", "Intensity Graphs", "Likelihood Graphs", "Relevance Graphs"]
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="whole-sidebar">

            <button className="sidebar-toggle-button" onClick={toggleSidebar}>
                {isSidebarOpen ? '<' : '>'}
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : 'close'}`}>
                <div className="sidebar-list-item">
                    <h2>Sidebar</h2>
                    <ul>
                        <li className="item"><NavLink to="/" >Dashboard</NavLink></li>
                        <li className="item"><NavLink to="/intensityGraphs" >Intensity</NavLink></li>
                        <li className="item"><NavLink to="/likelihoodGraphs">Likelihood</NavLink></li>
                        <li className="item"><NavLink to="/relevanceGraphs">Relevance</NavLink></li>
                    </ul>
                </div>
                <div className="profile-list-item">
                    <ul>
                        <li className="item" id="profile">Profile</li>
                    </ul>
                </div>
                    {/* Add more sidebar items as needed */}
            </div>
        </div>
    )
}