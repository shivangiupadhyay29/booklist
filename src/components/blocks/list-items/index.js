import React from 'react';
import Option from './option';
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
      <li key={item[keyProp]} className="list-bullets" tabIndex={item.id + 2}>
        <Option classText={'label-size'} content={item[label[0]]} />
        <Option classText={'label-size'} content={item[label[1]]} />
        <Option classText={'label-size ellipsis'} content={item[label[2]]} />
      </li>
    );
  }
  return (
    <ul className="list-bullets" tabIndex="1">
      {list?.map((item, index) => (
        <li
          tabIndex={index + 2}
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
