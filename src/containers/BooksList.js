import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import { connect } from 'react-redux';

const BooksList = () => {
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

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps, null)(BooksList);
