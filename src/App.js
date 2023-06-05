import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { MainPage } from './components/MainPage';
import { Graph } from './components/Graph';
import { useState, useEffect } from 'react';

function App() {
  const [graphData, setGraphData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://13.233.112.16:5000/mainvia');
        
        const data = await response.text();
        // console.log("sachin",data);
        // alert("sachin",data);
        const gData = JSON.parse(data);
        setGraphData(gData);
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  if (!graphData) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header title={"Pricing App"} searchBar = {true} />
    <MainPage />
    <Graph graphData = {graphData}/>
    </>
  );
}

export default App;
