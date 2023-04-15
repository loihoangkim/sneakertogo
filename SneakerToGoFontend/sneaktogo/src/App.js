import './App.css';
import React, { Component } from 'react';
import Login from './Components/Login';
import Admin from './Components/Admin';
import Customer from './Components/Customer'
import HomePage from './Components/HomePage'
import About from './Components/About';
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
    console.log("on");
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
          userName={localStorage.getItem("UserName")} />
      );
    }
    else if (localStorage.getItem("Role") === "2") {
      return (
        <Staff
          userName={localStorage.getItem("UserName")}
        />
      );
    }
    else if (localStorage.getItem("Role") === "4") {
      return (
        <Customer
          userName={localStorage.getItem("UserName")} />

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
