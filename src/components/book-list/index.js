import React from 'react';
import Listing from '../blocks/list-items';
import './index.css';

function BookList({ books }) {
  return (
    <div className="list-container">
      <div className="booklist-card">
        {/* <Listing
          list={books}
          keyProp={'id'}
          label={('title', 'author', 'summary')}
        /> */}
      </div>
    </div>
  );
}

export default BookList;
