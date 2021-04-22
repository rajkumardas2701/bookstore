import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { actionRemoveBook } from '../actions/index';
import { CategoryFilter } from '../components/CategoryFilter';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  const data = books.map((book) => (<Book key={`book-${book.id}`} book={book} deleteBook={() => handleRemoveBook(book)} />));
  return (
    <>
      <CategoryFilter />
      <table className="books-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>
    </>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
});

const mapDispatchToProps = (dispatch) => (
  { removeBook: (book) => dispatch(actionRemoveBook(book)) }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
