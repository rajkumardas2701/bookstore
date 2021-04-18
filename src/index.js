import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import finalReducer from './reducers/index';
import App from './components/App';

const initial = {
  books: [
    { id: Math.floor(Math.random() * 100) + 1, title: 'Book 1', category: 'Horror' },
    { id: Math.floor(Math.random() * 100) + 1, title: 'Book 2', category: 'kids' },
    { id: Math.floor(Math.random() * 100) + 1, title: 'Book 3', category: 'Sci-fi' },
    { id: Math.floor(Math.random() * 100) + 1, title: 'Book 4', category: 'Adventure' },
  ],
};

const store = createStore(finalReducer, initial);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
