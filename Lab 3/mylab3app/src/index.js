import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TweetContainer from './components/TweetContainer';


ReactDOM.render(
  <>
    <h1 style={{backgroundColor:"Orange", color:"white"}}>Tweeter</h1>
    <hr />
    <TweetContainer title="At Home, binge watching Breaking Bad for Second Time" />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();