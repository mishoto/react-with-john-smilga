import React from 'react';
import ReactDOM from 'react-dom';
import BookWithButton from './BookWithButton';

const booksInfo = [
  {
    id: 1,
    title: 'title3',
    author: 'author3',
  },
  {
    id: 2,
    title: 'title4',
    author: 'author4',
  },
];

const BookListEvents = () => {
  return (
    <section>
      <div>
        <b>----List return using Spread Operator with Events-----</b>
      </div>
      <div>
        {booksInfo.map((book) => {
          return <BookWithButton key={book.id} {...book}></BookWithButton>;
        })}
      </div>
    </section>
  );
};

ReactDOM.render(<BookListEvents />, document.getElementById('booklistevents'));
