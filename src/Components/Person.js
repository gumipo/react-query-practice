import React from "react";

const Planet = ({ person }) => {
  return (
    <div className="card">
      <h3>
        {person.name}
        <p>Gender - {person.gender}</p>
        <p>Birth year - {person.birth_year}</p>
      </h3>
    </div>
  );
};

export default Planet;
