import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Deletealert from './assets/common/DeleteAlert';
import UpdateProfile from './components/updateProfile/updateProfile';
ReactDOM.render(
  <Provider store={store}>

    <App />
  


  </Provider>,
  document.getElementById('root')
);
