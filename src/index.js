import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from './Form'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";


const HomePage = () => {
  return <App />;
}

ReactDOM.render(
    <BrowserRouter>
    <Routes>
    {/* <Route path="/" component={App} exact={true} /> */}
    <Route path="/" element={<App />} />
    <Route path="/form" element={<Form />} />
    </Routes>
    {/* <App /> */}
    
    </BrowserRouter>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//     <App />
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
