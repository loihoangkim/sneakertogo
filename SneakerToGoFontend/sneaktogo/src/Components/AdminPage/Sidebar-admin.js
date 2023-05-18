import React, { Component } from "react";
import $, { get } from "jquery";

class AdminSidebar extends Component {

    render() {
        return (
            <div>
                {/* ======= Sidebar ======= */}
                <aside id="sidebar" className="sidebar">
                    <ul className="sidebar-nav" id="sidebar-nav">
                        <li className="nav-item">
                            <button className="nav-link " href="index.html"
                                onClick={ () => this.props.changeNavScreen('trang chủ')}
                            >
                                <i className="bi bi-grid" />
                                <span>Trang chủ</span>
                            </button>
                        </li>
                        {/* End Dashboard Nav */}
                        <li className="nav-item">
                            <button
                                className="nav-link collapsed"
                                onClick={ () => this.props.changeNavScreen('sản phẩm') }
                            >
                                <i className="bi bi-menu-button-wide" />
                                <span>Quản lý sản phẩm</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link collapsed"
                                onClick={ () => this.props.changeNavScreen('đơn hàng') }
                            >
                                <i className="bi bi-bar-chart" />
                                <span>Quản lý đơn hàng</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link collapsed"
                                onClick={ () => this.props.changeNavScreen('doanh thu') }
                            >
                                <i className="bi bi-gem" />
                                <span>Quản lý doanh thu</span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button
                                className="nav-link collapsed"
                                onClick={ () => this.props.changeNavScreen('tài khoản') }
                            >
                                <i className="bi bi-journal-text" />
                                <span>Quản lý tài khoản</span>
                            </button>
                        </li>
                    </ul>
                </aside>
                {/* End Sidebar*/}
            </div>
        );
    }
}
export default AdminSidebar;