import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import App from './components/App';

const initialState = { 
  books: [
    {
      id: Math.random(),
      title: 'Book 1',
      category: 'Category 1'
    },
    {
      id: Math.random(),
      title: 'Book 2',
      category: 'Category 2'
    },
    {
      id: Math.random(),
      title: 'Book 3',
      category: 'Category 3'
    },
    {
      id: Math.random(),
      title: 'Book 4',
      category: 'Category 4'
    }
  ]
};

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
