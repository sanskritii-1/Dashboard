import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Intensity from '../components/Counts/IntensityCount';
import Likelihood from '../components/Counts/LikelihoodCount';
import Relevance from '../components/Counts/RelevanceCount';
import Region from "../components/Counts/RegionCount"
// import Country from '../components/Counts/Country';

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
                <div className="box-container count-graphs">
                    {/* Example boxes */}
                    <Intensity />
                    <Region />
                    <Likelihood />
                    <Relevance />
                    {/* <Country /> */}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
