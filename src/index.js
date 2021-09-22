import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// 默认配置1112
axios.defaults.baseURL = "http://httpbin.org/";
axios.defaults.timeout = '5000';
axios.defaults.headers.common["token"] = "dasdadasds"; 
// axios.defaults.headers.post["Content-Type"] = "application/text"; 

ReactDOM.render(
  // <React.StrictMode>
    <App />,
  // </React.StrictMode>,
  document.getElementById('root')
);
