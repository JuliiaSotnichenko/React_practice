import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import  App from './components/app/';


function WhoAmI (props){
  return (
    <React.Fragment>
          <h1>My name is {props.name} , surname - {props.surname} </h1>
           <a href={props.link}>My profile</a>
    </React.Fragment>
    
  )
}





ReactDOM.render(
  <React.StrictMode>
    <WhoAmI name= "Yulia" surname="Soty" link="facebook.com"/>
  </React.StrictMode>,
  document.getElementById('root')
);

