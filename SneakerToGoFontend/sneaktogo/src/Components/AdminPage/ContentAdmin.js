import React, { Component } from "react";
import OrderManagement from './../StaffPage/Order/OrderManagement';
import ModelManagement from './../StaffPage/Model/ModelManagement';
import Dashboard from "./../StaffPage/Dashboard";
import PageNotFound from "../PageNotFound";
import Account from "./Account/Account";


class ContentAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            userName2: this.props.userName1,
        };
    }
    render() {
        let navScreen = this.props.navScreen
        switch (navScreen) {
            case "trang chủ":
                return (
                    <Dashboard
                        userName={this.props.userName}
                        userId = {this.props.userId}
                    />
                );
            case "sản phẩm":
                return (
                    <ModelManagement
                        userName={this.props.userName}
                        userId = {this.props.userId}
                    />
                );
            case "đơn hàng":
                return (
                    <OrderManagement
                        userName={this.props.userName}
                        userId2 = {this.props.userId2}
                    />
                );
            case "tài khoản":
                return (
                    <Account
                    />
                )
            default:
                return (
                    <Dashboard
                        userName={this.props.userName}
                        userId = {this.props.userId}
                    />
                )
        }
    }
}
export default ContentAdmin;