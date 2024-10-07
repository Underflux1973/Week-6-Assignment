import React from "react";
import "./Scooby_Upgrades.css";

const Scooby_Upgrades = ({ scoobyupgrades, scoobysnax, onUpgradeBuy })=> 
return (
<>
<div id="scooby_upgrade-container"></div>
<div id="scooby_upgrade_shop"></div>
<h2 id="scooby_shop_headline">Scooby Snax Upgrades</h2>
{scoobyupgrades.map((upgrade)=>(
  <div key={upgrade.id} className={`upgrade upgrade-${upgrade.id}`}>
              <h3>{upgrade.name}</h3>
              <p>Cost: {upgrade.cost} scooby snax</p>
              <p>{upgrade.description}</p>
              <button
                div id="buy_button"
                onClick={() => onUpgradeBuy(upgrade)}
                disabled={scoobysnax < upgrade.cost}
              >
                Buy Now
              </button>
            </div>
))}
</>
);


export default Scooby_Upgrades; 
