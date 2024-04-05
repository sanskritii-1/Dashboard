import React, { useState } from 'react';
import Sidebar from './Sidebar';

function Dashboard() {

    return (
        <div className="dashboard-container">
            <Sidebar />

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
