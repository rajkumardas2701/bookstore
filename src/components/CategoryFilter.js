import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci - Fi'];

const CategoryFilter = ({ handleFilterChange }) => (
  <select name="category" onChange={handleFilterChange}>
    <option value="ALL">ALL</option>
    {
      CATEGORIES.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))
    }
  </select>
);

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};

export { CATEGORIES, CategoryFilter };
