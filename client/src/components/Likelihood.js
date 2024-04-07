import React,{useState, useEffect} from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Pie } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function Likelihood(){
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
          {
            label: "Frequency",
            data: [],
            backgroundColor: [
            //   "rgba(75,192,192,1)",
            //   "#50AF95",
            //   "#f3ba2f",
            //   "#2a71d0",

              "#FFADAD",
              "#FFD6A5",
              "#FDFFB6",
              "#7BD3EA",
              "#756AB6",
              "#E6A4B4",
              "#F9B572",
              "#A1EEBD",
              "#FA7070",
              "#FFC6AC",
              "#116A7B",
            ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.post("http://localhost:5000/graph/getVal", {
              field: "likelihood"
            });
            const data = res.data;
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


    return(
      <div className="box likelihood-count">
        <Pie data={chartData} options={{plugins: {
            title: {
              display: true,
              text: "Likelihood Frequency"
            }
          }}} />

      </div>
    )
}