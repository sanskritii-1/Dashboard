import React, { useState } from "react";

export default function Sidebar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>

            <button className="sidebar-toggle-button" onClick={toggleSidebar}>
                {isSidebarOpen ? '<' : '>'}
            </button>

            {/* Sidebar */}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <h2>Sidebar</h2>
                <ul>
                    <li>Dashboard</li>
                    <li>Analytics</li>
                    <li>Settings</li>
                    <li id="profile">Profile</li>
                    {/* Add more sidebar items as needed */}
                </ul>
            </div>
        </div>
    )
}