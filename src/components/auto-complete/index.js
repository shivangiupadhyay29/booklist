import React, { useEffect, useState, useCallback } from 'react';
import { searchBooksByCharacters, autoSuggestion } from '../../utility';
import { useDebounce } from '../../custom-hooks';

import SuggestionList from './suggestion-list';
import Form from '../blocks/form';
import './index.css';

function AutoComplete({ addSelectedBook, limit }) {
  // State and setter for search term
  const [searchTerm, setSearchTerm] = useState('');

  // State and setter for search results
  const [results, setResults] = useState([]);

  //custom hooks to use the debounce effect every key down.
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  // We use useEffect since this is an asynchronous action
  useEffect(() => {
    // Make sure we have a value (user has entered something in input)
    if (debouncedSearchTerm?.length > 0) {
      const books = searchBooksByCharacters(debouncedSearchTerm);
      setResults(autoSuggestion(books, limit));
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm, limit]);

  const onFormChange = useCallback((value) => {
    setSearchTerm(value);
  }, []);
  return (
    <div className="autocomplete-container">
      <div className="autocomplete-height">
        <div className="form-box">
          <div className="form-size">
            <Form
              onChangeHandler={onFormChange}
              inputPlaceholder={'Search your books'}
            />
          </div>
        </div>
        <div className="list-box">
          <div className="list-size">
            <SuggestionList addSelectedBook={addSelectedBook} list={results} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AutoComplete;
