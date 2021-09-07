import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Authentication from './components/Authentication';
import App from './App';
import App2 from './App2';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clinetID = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Authentication domain={domain} clinetID={clinetID} componentsToLoad={[<App/>,<App2/>]}>
  
  </Authentication>,
  document.getElementById('root')
);

