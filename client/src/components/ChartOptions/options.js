const graphData = {
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
}

const Baroptions = {
    plugins: {
        title: {
            display: true,
            text: "",
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
    scales: {
        x: {
            beginAtZero: true,
            color: "white",
            stepSize: 10,
            grid: {
                display: false,
            },
            title: {
                display: true,
                text: "",
                color: "white"
            },
            ticks:{
                color: "white",
            }
        },
        // ticks:{
        //   beginAtZero: true,
        //   stepSize: 10
        // },
        y: {
            beginAtZero: true,
            color: "white",
            // stepSize: stepSize,
            title: {
                display: true,
                text: "",
                color: "white",
            },
            grid: {
                display: false,
            },
            ticks:{
                color: "white",
            }
        }
    },
    barThickness: 23,
    maintainAspectRatio: false
}


const pieOptions = {
    plugins: {
        title: {
            display: true,
            text: "",
            color: "white"
        },
        legend:{
            labels:{
                color: "white",
            }
        }
    }
}

const lineOptions = {
    plugins: {
      title: {
        display: true,
        text: "",
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
          text: "",
          color: "white"
        },
        grid:{
          display: false,
        },
        ticks:{
            color: "white",
        }
      },
      // ticks:{
      //   beginAtZero: true,
      //   stepSize: 10
      // },
      y:{
        beginAtZero: true,
        title:{
          display: true,
          text: "",
          color: "white",
        },
        grid: {
          display: false,
        },
        ticks:{
            color: "white",
        }
      }
    },
    maintainAspectRatio: false
  }

const HeatOptions = {
    showOutline: true,
    showGraticule: true,
    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
        projection: {
            axis: 'x',
            projection: 'equalEarth'
        }
    }

}


export { graphData, Baroptions, pieOptions, HeatOptions, lineOptions };