import React from "react";

const Planet = ({ planet }) => {
  return (
    <div className="card">
      <h3>
        {planet.name}
        <p>Population - {planet.population}</p>
        <p>Terrain - {planet.terrain}</p>
      </h3>
    </div>
  );
};

export default Planet;
