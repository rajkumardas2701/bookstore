import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Book.css';

const Book = ({ book, deleteBook }) => (
  <tr className="book">
    <td>{book.id}</td>
    <td>{book.title}</td>
    <td>{book.category}</td>
    <td><button type="button" onClick={deleteBook}>Remove</button></td>
  </tr>
);

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
}.isRequired;

export default Book;
