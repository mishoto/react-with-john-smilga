import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

const booksInfo = [
  {
    id: 1,
    title: 'title1',
    author: 'author1',
  },
  {
    id: 2,
    title: 'title2',
    author: 'author2',
  },
];

const Booklist = () => {
  return (
    <section>
      Booklist
      <div>
        <b>----List Return as Html Tags-------</b>
      </div>
      <div>
        {booksInfo.map((book) => {
          return (
            <div key={book.id}>
              <h1>{book.title}</h1>
              <h1>{book.author}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <b>----List return using Spread Operator-----</b>
      </div>
      <div>
        {booksInfo.map((book) => {
          return <Book key={book.id} {...book}></Book>;
        })}
      </div>
      <div>
        <b>----End of Book List-----</b>
      </div>
    </section>
  );
};

ReactDOM.render(<Booklist />, document.getElementById('booklist'));
