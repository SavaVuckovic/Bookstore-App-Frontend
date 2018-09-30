import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ id, title, category, author, complete }) => (
  <div className="book">
    <div className="left">
      <div className="info">
        <h4 className="category">{category}</h4>
        <h3 className="title">{title}</h3>
        <span className="author">{author}</span>
      </div>
      <div className="controls">
        <span>Comments</span>
        <span>Remove</span>
        <span>Edit</span>
      </div>
    </div>
    <div className="right">
      <CircularProgressbar
        percentage={complete}
        className="spinner"
      />
      <div className="percent">
        <h1>{complete} %</h1>
        <span>Completed</span>
      </div>
    </div>
  </div>
);

export default Book;