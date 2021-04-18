import { useState } from 'react';

const BooksForm = () => {
  const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [state, setState] = useState({ title: '', category: '' });

  const handleChange = ({ target: { name, value } }) => {
    setState({ [name]: value });
  };

  const { title, category } = state;
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <h1>Add a new book</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="book-title">
          Title:
          <input type="text" id="title" name="title" onChange={handleChange} />
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

export default BooksForm;
