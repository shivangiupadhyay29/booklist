import React from 'react';

export default ({ onChangeHandler, inputPlaceholder }) => (
  <form
    onSubmit={(e) => {
      e.preventDefault();
    }}
  >
    <input
      placeholder={inputPlaceholder}
      onChange={(e) => onChangeHandler(e.target.value)}
      title={inputPlaceholder}
      aria-label={inputPlaceholder}
    />
  </form>
);
