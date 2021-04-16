import React from 'react';
import PropTypes from 'prop-types';
import ReactTable from 'react-table';
// import 'react-table/react-table.css';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => {
  const data = books.map((book) => (<Book key={`book-${book.id}`} book={book} />));
  const columns = [{
    Header: 'Book ID',
    accessor: 'id',
  }, {
    Header: 'Title',
    accessor: 'title',
  }, {
    Header: 'Category',
    accessor: 'category',
  }];
  return (
    <div>
      <ReactTable
        data={data}
        columns={columns}
        defaultPageSize={2}
        pageSizeOptions={[2, 4, 6]}
      />
    </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

export default connect(mapStateToProps, null)(BooksList);
