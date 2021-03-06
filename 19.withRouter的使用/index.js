// 引入React核心库
import React from 'react';
// 引入ReactDOM
import ReactDOM from 'react-dom';
// 引入App组件
import App from './App';

import {BrowserRouter} from 'react-router-dom'

// 渲染组件
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
