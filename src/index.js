import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/reset.css'; // Import Ant Design CSS reset
import './index.css'; // Import custom global styles (optional)
import App from './App'; // Import the root component
import reportWebVitals from './reportWebVitals'; // Optional: for performance metrics

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Render the App component in the root div
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
