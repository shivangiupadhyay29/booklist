import React from 'react';
import AutoComplete from '../auto-complete';

import './index.css';

function SearchBox({ addSelectedBook }) {
  const limit = 3;
  return (
    <div className="search-container">
      <AutoComplete addSelectedBook={addSelectedBook} limit={limit} />
    </div>
  );
}

export default SearchBox;
