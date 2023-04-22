import React, { Component } from "react";
import BrandManagement from './Brand/BrandManagement';
import CategoryManagement from './Category/CategoryManagement';
import OrderManagement from './OrderManagement';
import ModelManagement from './Model/ModelManagement';
import Dashboard from "./Dashboard";
import PageNotFound from "../PageNotFound";


class Content extends Component {
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
            case "thương hiệu":
                return (
                    <BrandManagement
                        userName={this.state.userName}
                        userId2 = {this.state.userId2}
                    />
                );
            case "danh mục":
                return (
                    <CategoryManagement
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
            default:
                return (
                    <PageNotFound />
                )
        }
    }
}
export default Content;