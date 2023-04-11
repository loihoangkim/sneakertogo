import './App.css';
import React, { Component } from 'react';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Staff from './Components/Staff'
import Customer from './Components/Customer'
import HomePage from './Components/HomePage'
import About from './Components/About';
import Guest from './Components/GuestPage/guest';

class App extends Component {
  constructor(pros){
    super(pros)
    this.state = {
      "target": ""
    }
  }
  render(){
    if(!localStorage.getItem("Token")){
      if(localStorage.getItem("Role") === "1"){
        return (
          <Admin
          userName = {localStorage.getItem("UserName")}/>
        );
      }
      else if(localStorage.getItem("Role") === "2"){
        return (
          <Staff
          userName = {localStorage.getItem("UserName")}/>
        );
      }
      else {
        return (
          <Customer
          userName = {localStorage.getItem("UserName")}/>
        );
      }
    }
    else{
      return(
        <Guest
        />
      );
    }
  }
}

export default App;
