import React from 'react';

const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci - Fi'];

const CategoryFilter = () => (
  <select name="category">
    <option value="ALL">ALL</option>
    {
      CATEGORIES.map((category) => (
        <option key={category} value={category}>{category}</option>
      ))
    }
  </select>
);

export { CATEGORIES, CategoryFilter };
