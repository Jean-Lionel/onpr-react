import React from 'react';
import ReactDOM from 'react-dom';
import './Archive/index.css';
import App from './App';
/* import $ from 'jquery';
import Popper from 'popper.js'; */

import axios from 'axios';

<<<<<<< HEAD
axios.defaults.baseURL = 'https://onprapi.herokuapp.com/api/';
=======
axios.defaults.baseURL = 'http://localhost:8000/api';

//axios.defaults.baseURL = 'https://onprapi.herokuapp.com/api';
>>>>>>> 2410b56cfdd908f42be7544a295bd46e313ecb7c
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
    //console.log(request);
    // Edit request config
    return request;
}, error => {
   // console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
  //  console.log(response);
    // Edit response config
    return response;
}, error => {
   // console.log(error);
    return Promise.reject(error);
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

