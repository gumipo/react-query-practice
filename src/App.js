import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Planets from "./Components/Planets";
import People from "./Components/People";
import "./index.css";
import { ReactQueryDevtools } from "react-query-devtools";

const App = () => {
  const [page, setPage] = useState("planets");
  return (
    <>
      <div className="App">
        <h1>Star Wars</h1>
        <Navbar setPage={setPage} />
        <div className="content">
          {page === "planets" ? <Planets /> : <People />}
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
