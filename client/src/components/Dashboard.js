import React, { useState } from 'react';
import Sidebar from './Sidebar';

function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <div className="dashboard-container">
      {/* Button to toggle sidebar on small screens */}
      {/* <Sidebar /> */}
      
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
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <header>
          <h1>Dashboard</h1>
        </header>

        {/* Main Content Area */}
        <div className="box-container">
          {/* Example boxes */}
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
