import React, { useState } from "react";

export default function Sidebar() {
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
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-list-item">
                    <h2>Sidebar</h2>
                    <ul>
                        <li className="item">Dashboard</li>
                        <li className="item">Intensity</li>
                        <li className="item">Likelihood</li>
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