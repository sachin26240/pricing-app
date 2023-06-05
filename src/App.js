import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { MainPage } from "./components/MainPage";
import { Graph } from "./components/Graph";
import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HCExporting from "highcharts/modules/exporting";
import HCExportData from "highcharts/modules/export-data";
import HCAccessibility from "highcharts/modules/accessibility";

// Initialize required Highcharts modules
HCExporting(Highcharts);
HCExportData(Highcharts);
HCAccessibility(Highcharts);

function App() {
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/mainvia");

        const data = await response.text();
        // console.log("sachin",data);
        // alert("sachin",data);
        const gData = JSON.parse(data);
        // console.log(gData.data[0]);
        setGraphData(gData);
        console.log("Sachin", graphData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };
    if (!graphData) {
      fetchData();
    }
    // ############################
    if (graphData) {
      console.log("SachinInChart", graphData);
      const formattedData = graphData.data.map((item) => ({
        x: new Date(item[0]).getTime(),
        y: item["1"],
      }));

      const formattedData1 = graphData.data.map((item) => ({
        x: new Date(item[0]).getTime(),
        y: item["2"],
      }));

      // Create the Highcharts chart
      Highcharts.chart("chartContainer", {
        title: {
          text: "Booking History",
        },
        xAxis: {
          type: "datetime",
        },
        yAxis: {
          title: {
            text: "Bookings",
          },
        },
        series: [
          {
            name: "Main Route",
            data: formattedData,
          },
          {
            name: "Via Route",
            data: formattedData1,
          },

        ],
      });
    }
    // console.log(jsonData.data)
  }, [graphData]);

  if (!graphData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header title={"Pricing App"} searchBar={true} />
      <MainPage />
      <Graph />
    </>
  );
}

export default App;
