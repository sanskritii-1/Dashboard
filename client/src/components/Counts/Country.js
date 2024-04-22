import React,{useState, useEffect} from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { graphData, HeatOptions } from "../ChartOptions/options";
import { ChoroplethController, GeoFeature, ColorScale, ProjectionScale } from 'chartjs-chart-geo';
import { ChoroplethChart } from 'chartjs-chart-geo';
import * as Chartgeo from "chartjs-chart-geo"
// register controller in chart.js and ensure the defaults are set
Chart.register(ChoroplethController, GeoFeature, ColorScale, ProjectionScale);


export default function Country(){
    const [chartData, setChartData] = useState(graphData);
    
      useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://unpkg.com/world-atlas/countries-50m.json');
            const datacountr = await response.json();
            const countries = Chartgeo.topojson.feature(datacountr, datacountr.objects.countries).features;


            // const res = await axios.post("http://localhost:5000/graph/getVal", {
            //   field: "country"
            // });
            // const data = res.data;
            // data.sort((a,b)=>{
            //     if(a._id.toLowerCase()<=b._id.toLowerCase()) return -1;
            //     return 0;
            // })
            setChartData({
              ...chartData,
              labels: countries.map((d) => d.properties.name),
              datasets: [
                {
                  ...chartData.datasets[0],
                  label: "Frequency",
                  data: countries.map((d)=>({feature:d, value:Math.random()}))
                }
              ]
            });
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

      const chart = new Chart(document.getElementById('canvas').getContext('2d'), {
        type: 'choropleth',
        data: {chartData},
        options: {HeatOptions}
      });


    return(
      <div className="box country-count">
        <canvas id='canvas'></canvas>
      </div>
    )
}