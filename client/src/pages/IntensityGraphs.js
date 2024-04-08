import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Intensity from './Intensity';
import Likelihood from './Likelihood';
import Country from './Country';

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
                    <Intensity />
                    <Likelihood />
                    <Country />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
