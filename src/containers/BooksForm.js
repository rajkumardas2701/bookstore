import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionCreateBook } from '../actions/index';
import { CATEGORIES } from '../components/CategoryFilter';
import '../styles/BookForm.css';

const BooksForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: '' });
  let error = false;

  const handleChange = ({ target: { name, value } }) => {
    setState({ ...state, [name]: value });
  };

  const { title, category } = state;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === '' || category === '') {
      error = true;
    } else {
      createBook({
        id: Math.floor(Math.random() * 100) + 1,
        title,
        category,
      });
      setState({ title: '', category: '' });
    }
    return error;
  };

  return (
    <div className="BookFormSection">
      <div className="addNewBook">ADD NEW BOOK</div>
      <form onSubmit={handleSubmit} className="formInput">
        <input type="text" className="input-title" name="title" onChange={handleChange} value={state.title || ''} placeholder="Book title" />
        <select className="category" name="category" onChange={handleChange} placeholder="Category">
          {
            CATEGORIES.map((category) => (
              <option key={category} value={category} className="categoryText">{category}</option>
            ))
          }
        </select>
        <button className="AddBookBtn" type="submit"><p className="addBooktext">ADD BOOK</p></button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => (
  { createBook: (book) => dispatch(actionCreateBook(book)) }
);

export default connect(null, mapDispatchToProps)(BooksForm);
