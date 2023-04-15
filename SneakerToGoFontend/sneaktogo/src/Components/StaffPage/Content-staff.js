import React, { Component } from "react";
import BrandManagement from './BrandManagement';
import CategoryManagement from './CategoryManagement';
import OrderManagement from './OrderManagement';
import ProductManagement from './ProductManagement';
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
                    <ProductManagement />
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