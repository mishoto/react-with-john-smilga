import React from 'react';

const BookWithButton = (props) => {
  const { title, author } = props;

  const clickHandler = (e) => {
    console.log(e);
    showAuthor(author);
  };

  return (
    <>
      <div>{title}</div>
      <div>{author}</div>
      <button type='button' onClick={() => showAuthor(author)}></button>
      <button type='button' onClick={clickHandler}>
        I'm a button
      </button>
    </>
  );
};

export const showAuthor = (author) => {
  console.log(author);
};

export default BookWithButton;
