import React, { useEffect, useState } from "react";
import { searchCharacters, autoSuggestion } from "../../utility";
import { useDebounce } from "../../custom-hooks";
import "./index.css";

function AutoComplete({ addSelectedBook }) {
  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState("");
  // autoSuggestion limit number
  const limit = 3;
  // State and setter for search results
  const [results, setResults] = useState([]);

  //custom hooks to use the debounce effect every key down.
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  // We use useEffect since this is an asynchronous action
  useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedSearchTerm?.length > 0) {
      const books = searchCharacters(debouncedSearchTerm);
      setResults(autoSuggestion(books, limit));
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);
  return <div className="autocomplete-container">AutoComplete</div>;
}

export default AutoComplete;
