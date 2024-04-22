import React,{useState, useEffect} from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale, Title } from "chart.js";
import { Bar } from "react-chartjs-2";
import {graphData, Baroptions} from "../ChartOptions/options"

Chart.register(CategoryScale);

export default function Intensity(){
    const [chartData, setChartData] = useState(graphData);
    

      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.post("http://localhost:5000/graph/getVal", {
              field: "intensity"
            });
            const data = res.data;
            data.sort((a,b) => a._id - b._id);
            console.log("fron side: ",data)
            
            setChartData({
              ...chartData,
              label: "Frequency",
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

      const option = {
        ...Baroptions,
        plugins: {
          ...Baroptions.plugins,
          title:{
            ...Baroptions.plugins.title,
            text: "Intensity Frequency",
          }
        },
        scales: {
          ...Baroptions.scales,
          x: {
            ...Baroptions.scales.x,
            title:{
              ...Baroptions.scales.x.title,
              text: "Intensity",
            }
          },
          y: {
            ...Baroptions.scales.y,
            title:{
              ...Baroptions.scales.y.title,
              text: "Frequency",
            }
          }
        }
      }

    return(
      <div className="box intensity-count">
        <Bar data={chartData} options={option} />

      </div>
    )
}