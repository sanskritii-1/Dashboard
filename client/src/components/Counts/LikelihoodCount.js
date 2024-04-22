import React,{useState, useEffect} from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";
import {graphData, pieOptions} from "../ChartOptions/options"

Chart.register(CategoryScale);

export default function Likelihood(){
    const [chartData, setChartData] = useState(graphData);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.post("http://localhost:5000/graph/getVal", {
              field: "likelihood"
            });
            const data = res.data;
            data.sort((a,b) => a._id - b._id);
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

    const option = {
      ...pieOptions,
      plugins: {
        ...pieOptions.plugins,
        title: {
          ...pieOptions.plugins.title,
          text: "Likelihood Frequency",
        }
      }
    }
    return(
      <div className="box likelihood-count">
        <Pie data={chartData} options={option} />

      </div>
    )
}