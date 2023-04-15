import React, { Component } from "react";
import $, { get } from "jquery";
import StaffHeader from "./Header-staff";
import StaffSidebar from "./Sidebar-staff";
import Dashboard from "./Dashboard";
import ContentStaff from './Content-staff';



class Staff extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navScreen : "trang chủ",
        };
      }
    changeNavScreen = (value) => {
        this.setState({
            navScreen: value,
          });
        console.log(this.state.navScreen);
      }
    render() {
        return (
            <div>
                <StaffHeader
                />
                <StaffSidebar
                    changeNavScreen = { this.changeNavScreen }
                />
                <ContentStaff
                    navScreen = { this.state.navScreen }
                />
            </div>
        );
    }
}
export default Staff;