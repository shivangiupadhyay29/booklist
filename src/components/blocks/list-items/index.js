import React from 'react';
import './index.css';

export default function Listing({ list, onClickHandler, keyProp, label }) {
  return (
    <ul className="list-bullets">
      {list?.map((item) => (
        <li
          key={item[keyProp]}
          onClick={onClickHandler(item)}
          className="item-content"
        >
          <span className="label-size">{item[label]}</span>
        </li>
      ))}
    </ul>
  );
}
