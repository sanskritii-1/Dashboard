import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Baroptions, graphData, } from "../ChartOptions/options";

Chart.register(CategoryScale);

export default function Region() {
  const [chartData, setChartData] = useState(graphData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post("http://localhost:5000/graph/getVal", {
          field: "region"
        });
        const data = res.data;
        data.sort((a, b) => {
          if (a._id.toLowerCase() <= b._id.toLowerCase()) return -1;
          return 0;
        })
        setChartData({
          ...chartData,
          labels: data.map((entry) => entry._id),
          datasets: [
            {
              ...chartData.datasets[0],
              data: data.map((entry) => entry.count)
            }
          ]
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  const options = {
    ...Baroptions,
    indexAxis: 'y',
    plugins: {
      ...Baroptions.plugins,
      title: {
        ...Baroptions.plugins.title,
        text: "Region Frequency",
      },
    },
    scales: {
      ...Baroptions.scales,
      x: {
        ...Baroptions.scales.x,
        title:{
          ...Baroptions.scales.x.title,
          text: "Region",
        }
      },
      y: {
        ...Baroptions.scales.y,
        title: {
          ...Baroptions.scales.y.title,
          text: "Frequency",
        }
      }
    }
  }


  return (
    <div className="box region-count">
      <Bar data={chartData} options={options} />

    </div>
  )
}