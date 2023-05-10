import React, { Component } from "react";
import StaffHeader from "./../StaffPage/Header-staff";
import Dashboard from "./../StaffPage/Dashboard";
import AdminSidebar from "./Sidebar-admin";
import ContentAdmin from "./ContentAdmin";

class Admin extends Component {
  constructor(pros) {
    super(pros)
    this.state = {
      "option": "trang chủ"
    }
  }

  changeNavScreen = (value) => {
    this.setState({
        navScreen: value,
    });
    //console.log(this.state.navScreen);
}

  render() {
    return (
      <div>
        <StaffHeader
        />
        <AdminSidebar
          changeNavScreen={this.changeNavScreen}
        />
        <main id="main" class="main">
          <ContentAdmin
            navScreen={this.state.navScreen}
            userName={this.state.userName}
            userId1={this.state.userId1}
          />
        </main>
      </div>
    );
  }
}
export default Admin;