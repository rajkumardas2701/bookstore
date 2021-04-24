import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book, deleteBook }) => (
  <section className="BookSection">
    <div className="BookDetails">
      <p className="bookCategory">{book.category}</p>
      <p className="bookTitle">{book.title}</p>
      <p className="bookAuthor">Suzanne Collins</p>
      <div className="BookControlSection">
        <span className="bookControl" id="comments">Comments</span>
        <button type="button" id="remove" className="bookControl" onClick={deleteBook}>Remove</button>
        <span className="bookControl" id="edit">Edit</span>
      </div>
    </div>
    {/* <div>

    </div>
    <div>

    </div> */}

  </section>

);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
