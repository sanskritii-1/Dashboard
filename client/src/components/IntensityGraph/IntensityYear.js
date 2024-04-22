import React,{useState, useEffect} from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale, plugins, scales } from "chart.js";
import { Line } from "react-chartjs-2";
import { lineOptions,graphData } from "../ChartOptions/options";

Chart.register(CategoryScale);

export default function Intensity(){
    const [chartData, setChartData] = useState(graphData);
    

      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.post("http://localhost:5000/graph/getMean", {
              xaxis: "start_year",
              yaxis: "intensity",
            });
            const data = res.data;
            
            data.sort((a,b) => a._id - b._id);
            console.log("fron side: ",data)
            
            setChartData({
              ...chartData,
              labels: data.map((entry) => entry._id),
              datasets: [
                {
                  ...chartData.datasets[0],
                  label: "Mean intensity",
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


      const options = {
        ...lineOptions,
        plugins:{
          ...lineOptions.plugins,
          title: {
            ...lineOptions.plugins.title,
            text: "Mean Intensity per start year",
          }
        },
        scales:{
          ...lineOptions.scales,
          x: {
            ...lineOptions.scales.x,
            title:{
              ...lineOptions.scales.x.title,
              text: "Start year",
            }
          },
          y: {
            ...lineOptions.scales.y,
            title:{
              ...lineOptions.scales.y.title,
              text: "Mean Intensity",
            }
          }
        }
      }


    return(
      <div className="box intensity-year">
        <Line data={chartData} options={options} />

      </div>
    )
}