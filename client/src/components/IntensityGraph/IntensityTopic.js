import React,{useState, useEffect} from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale, plugins, scales } from "chart.js";
import { Line } from "react-chartjs-2";
import { lineOptions,graphData } from "../ChartOptions/options";

Chart.register(CategoryScale);

export default function IntensityTopic(){
    const [chartData, setChartData] = useState(graphData);
    

      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.post("http://localhost:5000/graph/getMean", {
              xaxis: "topic",
              yaxis: "intensity",
            });
            const data = res.data;
            
            data.sort((a,b)=>{
                if(a._id.toLowerCase()<=b._id.toLowerCase()) return -1;
                return 0;
            })
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
            text: "Mean Intensity per Topic",
          }
        },
        scales:{
          ...lineOptions.scales,
          x: {
            ...lineOptions.scales.x,
            title:{
              ...lineOptions.scales.x.title,
              text: "Topic",
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
      <div className="box intensity-topic">
        <Line data={chartData} options={options} />

      </div>
    )
}