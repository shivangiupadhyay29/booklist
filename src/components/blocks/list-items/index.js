import React from 'react';
import './index.css';

export default function Listing({
  list,
  onClickHandler,
  keyProp,
  label,
  item
}) {
  if (item && Array.isArray(label)) {
    return (
      <li key={item[keyProp]} className="list-bullets" tabindex={item.id + 2}>
        <span className="label-size" title={item[label[0]]}>
          {item[label[0]]}
        </span>
        <span className="label-size" title={item[label[1]]}>
          {item[label[1]]}
        </span>
        <span className="label-size ellipsis" title={item[label[2]]}>
          {item[label[2]]}
        </span>
      </li>
    );
  }
  return (
    <ul className="list-bullets" tabindex="1">
      {list?.map((item, index) => (
        <li
          tabindex={index + 2}
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
