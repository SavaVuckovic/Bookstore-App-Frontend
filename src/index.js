import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './components/App';
import './styles/css/index.css'; // compiled css

// root react component with redux store and react router
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/> 
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
