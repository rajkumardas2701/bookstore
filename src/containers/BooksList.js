import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { actionChangeFilter, actionRemoveBook } from '../actions/index';
import { CategoryFilter } from '../components/CategoryFilter';
import '../styles/Booklist.css';

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
      <div className="navBar">
        <header-1 id="logo">Bookstore CMS</header-1>
        <p id="books">BOOKS</p>
        <CategoryFilter handleFilterChange={handleFilterChange} id="categoryDropdown" />
        <div className="logoSec">
          <img src="..\images\user.png" alt="logo" id="logo1" />
        </div>

      </div>
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
