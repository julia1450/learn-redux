import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import './exercise';

// react-redux 패키지 install 후에
// store를 어디서든지 사용하기 위한 provider 추가
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './modules';

// store 생성
const store = createStore(rootReducer);

// App을 Provider로 감싼 후 store를 props로 전달
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
