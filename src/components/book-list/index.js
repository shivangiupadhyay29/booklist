import React from 'react';
import Listing from '../blocks/list-items';
import './index.css';

function BookList({ books }) {
  return (
    <div className="list-container">
      {books?.map((book) => (
        <div className="booklist-card">
          <div className="booklist-box-width">
            <Listing
              keyProp={'id'}
              label={['title', 'author', 'summary']}
              item={book}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
