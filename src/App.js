import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { MainPage } from "./components/MainPage";
import { Graph } from "./components/Graph";
import { Table } from "./components/Table";
import { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HCExporting from "highcharts/modules/exporting";
import HCExportData from "highcharts/modules/export-data";
import HCAccessibility from "highcharts/modules/accessibility";
import { tab } from "@testing-library/user-event/dist/tab";


// Initialize required Highcharts modules
HCExporting(Highcharts);
HCExportData(Highcharts);
HCAccessibility(Highcharts);

function App() {
  const [graphData, setGraphData] = useState(null);
  const [tableData, setTableData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://13.233.112.16:5000/mainvia");

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


    const fetchData1 = async () => {
      try {
        const response = await fetch("http://13.233.112.16:5000/seatinfo");

        const data1 = await response.text();
        // console.log("sachin",data);
        // alert("sachin",data);
        const gData1 = JSON.parse(data1);
        // console.log(gData.data[0]);
        setTableData(gData1);
        console.log("SachinTable", tableData);
      } catch (error) {
        console.error("Error fetching JSON data:", error);
      }
    };

    if (!graphData) {
      fetchData();
    }
    if(!tableData){
      fetchData1();
    }

    if(tableData){
      console.log("sachinInTable:",tableData)
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
        chart: {
          type: 'bar',
        },
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
  }, [graphData,tableData]);

  if (!graphData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header title={"Pricing App"} searchBar={true} />
      <MainPage />
      <Graph />
      <Table tableData={tableData}/>
    </>
  );
}

export default App;
