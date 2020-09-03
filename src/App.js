import React, { useState } from "react";
import SearchBox from "./components/search-box";
import List from "./components/list";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const addSelectedBook = (book) => (event) =>
    setBooks((books) =>
      books.find((item) => item.id === book.id) ? books : [...books, book]
    );
  return (
    <div className="container">
      <SearchBox addSelectedBook={addSelectedBook} />
      <List books={books} />
    </div>
  );
}

export default App;
