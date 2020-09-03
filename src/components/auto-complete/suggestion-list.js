import React from 'react';
import Listing from '../blocks/list-items';

export default function SuggestionList({ addSelectedBook, list }) {
  return (
    <Listing
      list={list}
      onClickHandler={addSelectedBook}
      keyProp={'id'}
      label={'title'}
    />
  );
}
