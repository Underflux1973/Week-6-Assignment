import { useEffect, useState } from "react";
import "./App.css";
import MainHeader from "./Components/MainHeader.jsx";
import Scooby_snack_clicker from "./Components/Scooby_snack_clicker.jsx";
import Scooby_Upgrades from "./Components/Scooby_Upgrades.jsx";

//this is the first state to control the scoobysnax 
export default function App() {
  return (
  const [scoobysnax, setScoobySnax] = useState(() => {
    const savedScoobySnax = localStorage.getItem("scoobysnax");
    return savedScoobySnax ? parseInt(savedScoobySnax, 10) : 0;
  });
//this is the state to control the scoobysnax per second
const [scoobySnaxPerSecond, setScoobySnaxPerSecond] = useState(()=> {
const savedScoobySnaxPerSecond = localStorage.getItem("scoobySnaxPerSecond");
return savedScoobySnaxPerSecond ? parseInt (savedScoobySnaxPerSecond, 10): 1;
  });
const [scoobyupgrades, setScoobyUpgrades]= useState([]);
  
};  

//need useEffect to fetch the Scooby Upgrade data  from the JSON file
useEffect (() => {
const fetchScoobyUpgradesData = async () => {

  const response = await fetch("./lib/scoobyUpgradesData.json");
  const data = await response.json();
  setScoobyUpgradesData(data);
}
fetchScoobyUpgradesData();
}, []);


const handleScoobyClick = () => {
  setScoobySnax((prevScoobySnax) => prevScoobySnax + 1);
};

// this is the useEffect used to manage the Interval - which i didn't manage to do on my last assignment
useEffect(() => {
  const scoobySnaxPerSecondInterval = setInterval(() => {
    setScoobySnax((prevScoobySnax) => prevCookies + cookiesPerSecond);
  }, 1000);

  return () => clearInterval(scoobySnaxPerSecondInterval);
}, [scoobySnaxPerSecond]);

// this is the code logic for the upgrades which handles the action when a user buys an upgrade that the scoobysnax go down whilst the scoobysnax per second goes up
const handleUpgradeBuy = (upgrade) => {
  if (scoobysnax >= upgrade.cost) {
    setScoobySnax(scoobysnax - upgrade.cost);
    setScoobySnaxPerSecond(
      (prevScoobySnaxPerSecond) => prevScoobySnaxPerSecond + upgrade.increasePerSecond
    );
  }
};

<div className="body">
<MainHeader />

<Scooby_snack_clicker
  scoobysnax={scoobysnax}
  scoobySnaxPerSecond={scoobySnaxPerSecond}
  onScoobySnaxClick={() => set(scoobysnax + scoobySnaxPerSecond)}
/>
<Scooby_Upgrades
  scoobyupgrades={scoobyupgrades}
  scoobysnax={scoobysnax}
  onUpgradeBuy={handleUpgradeBuy}
/>
{/* we  need an event to listen to the click on an image */}

{/* we need to render the cookies number and cookiesPerSecond here */}
{/* we need to render our upgrades shop in here using map */}
<button onClick={reset} className="reset">
  Reset Game
</button>
</div>

