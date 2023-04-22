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
            navScreen: "trang chủ",
            userId1: this.props.userId,
            userName: this.props.userName,
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
                    changeNavScreen={this.changeNavScreen}
                />
                <div style={{display:'none'}}>
                    <span id='userID'>{this.props.userId}</span>
                </div>
                <main id="main" class="main">
                    <ContentStaff
                        navScreen={this.state.navScreen}
                        userName = {this.state.userName}
                        userId1 = {this.state.userId1}
                    />
                </main>
            </div>
        );
    }
}
export default Staff;