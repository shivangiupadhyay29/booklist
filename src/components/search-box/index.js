import React, { useState, useEffect } from "react";
import AutoComplete from "../auto-complete";

import "./index.css";

function SearchBox({ addSelectedBook }) {
  return (
    <div className="search-container">
      <AutoComplete addSelectedBook={addSelectedBook} />
    </div>
  );
}

export default SearchBox;
