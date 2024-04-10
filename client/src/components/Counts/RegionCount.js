import React,{useState, useEffect} from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Bar } from "react-chartjs-2";

Chart.register(CategoryScale);

export default function Country(){
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [
          {
            label: "Frequency",
            data: [],
            backgroundColor: [
              // "rgba(75,192,192,1)",
              // "#50AF95",
              // "#f3ba2f",
              // "#2a71d0",


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
            borderWidth: 1,
            // categoryPercentage: 0.2
          }
        ]
      });
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.post("http://localhost:5000/graph/getVal", {
              field: "region"
            });
            const data = res.data;
            data.sort((a,b)=>{
                if(a._id.toLowerCase()<=b._id.toLowerCase()) return -1;
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
        plugins: {
          title: {
            display: true,
            text: "Country Frequency",
            color: "white",
            font: {
              size: 16,
              family: "arial"
            }
          },
          legend: {
            display: false,
          }
        },
        scales:{
          x:{
            beginAtZero: true,
            stepSize: 10,
            title:{
              display:true,
              text: "Country",
              color: "white"
            },
            grid:{
              display: false,
            }
          },
          y:{
            beginAtZero: true,
            // stepSize: stepSize,
            title:{
              display: true,
              text: "Frequency",
              color: "white",
            },
            grid: {
                display: false,
            },
            ticks:{
                stepSize: 10
            },
          }
        },
        barThickness: 23,
        maintainAspectRatio: false
      }


    return(
      <div className="box region-count">
        <Bar data={chartData} options={options} />

      </div>
    )
}