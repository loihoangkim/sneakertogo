import React, { Component } from "react";
import BrandManagement from './Brand/BrandManagement';
import CategoryManagement from './Category/CategoryManagement';
import OrderManagement from './OrderManagement';
import ModelManagement from './Model/ModelManagement';
import Dashboard from "./Dashboard";
import PageNotFound from "../PageNotFound";


class Content extends Component {
    render() {
        let navScreen = this.props.navScreen
        switch (navScreen) {
            case "trang chủ":
                return (
                    <Dashboard />
                );
            case "thương hiệu":
                return (
                    <BrandManagement />
                );
            case "danh mục":
                return (
                    <CategoryManagement />
                );
            case "sản phẩm":
                return (
                    <ModelManagement />
                );
            case "đơn hàng":
                return (
                    <OrderManagement />
                );
            default:
                return (
                    <PageNotFound/>
                )
        }
    }
}
export default Content;