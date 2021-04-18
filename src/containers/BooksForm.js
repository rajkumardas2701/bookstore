import { useState } from 'react';

const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [state, setState] = useState({ title: '', category: '' });

  const { title, category } = state;

  return (
    <>
      <h1>Add a new book</h1>
      <form>
        <label htmlFor="book-title">
          Title:
          <input type="text" id="book-title" name="book-title" />
        </label>
        <label htmlFor="book-category">
          Category:
          <select id="book-category">
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

export default BooksForm;
