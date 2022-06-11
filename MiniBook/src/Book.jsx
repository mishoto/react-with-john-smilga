import React from 'react';

const Book = (props) => {
  const { title, author } = props;
  return (
    <>
      <div>{title}</div>
      <div>{author}</div>
    </>
  );
};

export default Book;
