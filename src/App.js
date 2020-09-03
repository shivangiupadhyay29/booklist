import React, { useState } from 'react';
import SearchBox from './components/search-box';
import BookList from './components/book-list';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const addSelectedBook = (book) => (event) =>
    setBooks((books) =>
      books.find((item) => item.id === book.id) ? books : [...books, book]
    );
  return (
    <div className="container">
      <SearchBox addSelectedBook={addSelectedBook} />
      <BookList books={books} />
    </div>
  );
}

export default App;
