import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Intensity from '../components/Intensity';
import Likelihood from '../components/Likelihood';
import Country from '../components/Country';

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
