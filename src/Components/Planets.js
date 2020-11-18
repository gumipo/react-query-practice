import React, { useState } from "react";
import { usePaginatedQuery, useQuery } from "react-query";
import Planet from "./Planet";

const fetchPlanets = async (key, page) => {
  const res = await fetch(`http://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);

  // const { data, status } = useQuery(
  //   ["planets", page],
  //   fetchPlanets,
  //   {
  //     // staleTime: 0,
  //     // cacheTime: 10,
  //     // onSuccess: () => console.log("eeee"),
  //   }
  // );

  const { resolvedData, latestData, status } = usePaginatedQuery(
    ["planets", page],
    fetchPlanets
  );

  return (
    <div>
      <h2>Planets</h2>
      {/* <button onClick={() => setPage(1)}>page 1</button>
      <button onClick={() => setPage(2)}>page 2</button>
      <button onClick={() => setPage(3)}>page 3</button> */}
      {/* <p>{status}</p> */}

      {status === "loading" && <p>Loading...</p>}
      {status === "success" && (
        <>
          <div>
            <button
              onClick={() => setPage((old) => Math.max(old - 1, 1))}
              disabled={page === 1}
            >
              previous page
            </button>
            <span>{page}</span>
            <button
              onClick={() =>
                setPage((old) =>
                  !latestData || !latestData.next ? old : old + 1
                )
              }
              disabled={!latestData || !latestData.next}
            >
              Next page
            </button>
            {resolvedData.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}

      {status === "error" && <p>Error fetching Data</p>}
    </div>
  );
};

export default Planets;
