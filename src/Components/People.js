import React from "react";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("http://swapi.dev/api/people/");
  return res.json();
};

const People = () => {
  const { data, status } = useQuery("people", fetchPeople);

  console.log(data);
  return (
    <div>
      <h2>People</h2>
      {/* <p>{status}</p> */}

      {status === "loading" && <p>Loading...</p>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person key={person.name} person={person} />
          ))}
          succses Data
        </div>
      )}

      {status === "error" && <p>Error fetching Data</p>}
    </div>
  );
};

export default People;
