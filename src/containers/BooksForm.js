import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreateBook } from '../actions/index';

const BooksForm = ({ createBook }) => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci - Fi'];
  const [state, setState] = useState({ title: '', category: '' });

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { title, category } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    createBook({
      id: Math.floor(Math.random() * 100) + 1,
      title,
      category,
    });
    setState({ title: '', category: '' });
  };

  return (
    <>
      <h1>Add a new book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book-title">
          <input type="text" id="title" name="title" onChange={handleChange} value={state.title || ''} />
        </label>
        <label htmlFor="book-category">
          Category:
          <select id="category" name="category" onChange={handleChange}>
            {
              CATEGORIES.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))
            }
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  { createBook: (book) => dispatch(actionCreateBook(book)) }
);

export default connect(null, mapDispatchToProps)(BooksForm);
