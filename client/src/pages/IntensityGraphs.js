import React, { useState } from 'react';
// import Sidebar from './Sidebar';
import IntensityYear from '../components/IntensityGraph/IntensityYear';

function IntensityGraphs() {

    return (
        <div className="dashboard-container">
            {/* <Sidebar /> */}

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <header>
                    <h1>Dashboard</h1>
                </header>

                {/* Main Content Area */}
                <div className="box-container">
                    {/* Example boxes */}
                    <IntensityYear />
                </div>
            </div>
        </div>
    );
}

export default IntensityGraphs;
