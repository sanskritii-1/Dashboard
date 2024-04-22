import React, { useState } from 'react';
// import Sidebar from './Sidebar';
import IntensityYear from '../components/IntensityGraph/IntensityYear';
import IntensityRegion from '../components/IntensityGraph/IntensityRegion';
import IntensityTopic from '../components/IntensityGraph/IntensityTopic';

function IntensityGraphs() {

    return (
        <div className="dashboard-container">
            {/* <Sidebar /> */}

            {/* Main Content */}
            <div className="main-content">
                {/* Header */}
                <header>
                    <h1>Intensity Graphs</h1>
                </header>

                {/* Main Content Area */}
                <div className="box-container intensity-graphs">
                    {/* Example boxes */}
                    <IntensityYear />
                    <IntensityRegion />
                    <IntensityTopic />
                </div>
            </div>
        </div>
    );
}

export default IntensityGraphs;
