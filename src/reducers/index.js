import { combineReducers, createStore } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const initialState = {
  books: [
    { id: Math.floor(Math.random() * 100) + 1, title: 'Book 1', category: 'Horror' },
    { id: Math.floor(Math.random() * 100) + 1, title: 'Book 2', category: 'Kids' },
    { id: Math.floor(Math.random() * 100) + 1, title: 'Book 3', category: 'Sci - Fi' },
    { id: Math.floor(Math.random() * 100) + 1, title: 'Book 4', category: 'Learning' },
  ],
};

const rootReducer = combineReducers({
  books: booksReducer,
  filter: filterReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
