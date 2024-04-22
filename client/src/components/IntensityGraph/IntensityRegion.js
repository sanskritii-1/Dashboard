import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { graphData, Baroptions } from "../ChartOptions/options"

Chart.register(CategoryScale);

export default function Intensity() {
  const [chartData, setChartData] = useState(graphData);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:5000/graph/getMean", {
          xaxis: "region",
          yaxis: "intensity"
        });
        const data = res.data;
        data.sort((a, b) => {
          if (a._id.toLowerCase() <= b._id.toLowerCase()) return -1;
          return 0;
        })
        console.log("fron side: ", data)

        setChartData({
          ...chartData,
          label: "Mean Intensity",
          labels: data.map((entry) => entry._id),
          datasets: [
            {
              ...chartData.datasets[0],
              data: data.map((entry) => entry.mean)
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const option = {
    ...Baroptions,
    plugins: {
      ...Baroptions.plugins,
      title: {
        ...Baroptions.plugins.title,
        text: "Mean Intensity per Region",
      },
    },
    scales: {
      ...Baroptions.scales,
      x: {
        ...Baroptions.scales.x,
        text: "Region",
      },
      y: {
        ...Baroptions.scales.y,
        text: "Mean Intensity",
      }
    }
  }

  return (
    <div className="box intensity-region">
      <Bar data={chartData} options={option} />

    </div>
  )
}