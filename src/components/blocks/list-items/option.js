import React from 'react';

export default ({ content, classText }) => (
  <span className={classText} title={content}>
    {content}
  </span>
);
