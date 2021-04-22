import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { actionChangeFilter, actionRemoveBook } from '../actions/index';
import { CategoryFilter } from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  const handleFilterChange = (event) => changeFilter(event.target.value);
  const filteredBooks = filter === 'ALL' ? books : books.filter((book) => book.category === filter);
  const data = filteredBooks.map((book) => (<Book key={`book-${book.id}`} book={book} deleteBook={() => handleRemoveBook(book)} />));
  return (
    <>
      <CategoryFilter handleFilterChange={handleFilterChange} />
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
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => (
  {
    removeBook: (book) => dispatch(actionRemoveBook(book)),
    changeFilter: (filter) => dispatch(actionChangeFilter(filter)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
