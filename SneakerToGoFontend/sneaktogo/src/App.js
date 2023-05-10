import './App.css';
import React, { Component } from 'react';
import Login from './Components/Login';
import Admin from './Components/AdminPage/Admin';
import Customer from './Components/CustomerPage/customer'
import Guest from './Components/GuestPage/guest';
import Staff from './Components/StaffPage/Staff';


class App extends Component {
  constructor(pros) {
    super(pros)
    this.state = {
      "target": "",
      showLogin: false,
    }
  }


  openLogin = () => {
    this.setState({
      showLogin: true,
    });
  }

  closeLogin = () => {
    this.setState({
      showLogin: false,
    })
  }

  render() {
    var showLogin = this.state.showLogin;
    //if(!localStorage.getItem("Token")){
    if (localStorage.getItem("Role") === "1") {
      return (
        <Admin
          userName={localStorage.getItem("user_name")} 
          userId = {localStorage.getItem("userId")}/>
      );
    }
    else if (localStorage.getItem("Role") === "2") {
      return (
        <Staff
          userName={localStorage.getItem("user_name")}
          userId = {localStorage.getItem("userId")}
        />
      );
    }
    else if (localStorage.getItem("Role") === "3") {
      return (
        <Customer
          userName={localStorage.getItem("user_name")} 
          userId = {localStorage.getItem("userId")}
          />

      );
    }
    else if (showLogin === true) {
      return (
        <Login
          closeLogin={this.closeLogin}
        />
      );
    }
    //}
    else {
      return (
        <Guest
          openLogin={this.openLogin}
        />
      );
    }
  }
}

export default App;
