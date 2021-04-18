const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <h1>Add a new book</h1>
      <label htmlFor="book-title">
        Title:
        <input type="text" id="book-title" name="book-title" />
      </label>
      <label htmlFor="book-category">
        Category:
        <select id="book-category">
          {
            categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
