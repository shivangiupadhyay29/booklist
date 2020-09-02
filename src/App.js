import React from "react";
import SearchBox from "./components/search-box";
import List from "./components/list";
import "./App.css";

function App() {
  return (
    <div className="container">
      <SearchBox />
      <List />
    </div>
  );
}

export default App;
