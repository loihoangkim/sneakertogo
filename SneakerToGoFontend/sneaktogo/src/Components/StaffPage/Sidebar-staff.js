import React, { Component } from "react";
import $, { get } from "jquery";

class StaffSidebar extends Component {

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
                                data-bs-target="#components-nav"
                                data-bs-toggle="collapse"
                                onClick={ () => this.props.changeNavScreen('sản phẩm') }
                            >
                                <i className="bi bi-menu-button-wide" />
                                <span>Quản lý sản phẩm</span>
                            </button>
                        </li>
                        {/* End Components Nav */}
                        <li className="nav-item">
                            <button
                                className="nav-link collapsed"
                                data-bs-target="#forms-nav"
                                data-bs-toggle="collapse"
                                onClick={ () => this.props.changeNavScreen('thương hiệu') }
                            >
                                <i className="bi bi-journal-text" />
                                <span>Quản lý thương hiệu</span>
                            </button>
                        </li>
                        {/* End Forms Nav */}
                        <li className="nav-item">
                            <button
                                className="nav-link collapsed"
                                data-bs-target="#tables-nav"
                                data-bs-toggle="collapse"
                                onClick={ () => this.props.changeNavScreen('danh mục') }
                            >
                                <i className="bi bi-layout-text-window-reverse" />
                                <span>Quản lý danh mục</span>
                            </button>
                        </li>
                        {/* End Tables Nav */}
                        <li className="nav-item">
                            <button
                                className="nav-link collapsed"
                                data-bs-target="#charts-nav"
                                data-bs-toggle="collapse"
                                onClick={ () => this.props.changeNavScreen('đơn hàng') }
                            >
                                <i className="bi bi-bar-chart" />
                                <span>Quản lý đơn hàng</span>
                            </button>
                        </li>
                        {/* End Charts Nav */}
                        <li className="nav-item">
                            <button
                                className="nav-link collapsed"
                                data-bs-target="#icons-nav"
                                data-bs-toggle="collapse"
                                onClick={ () => this.props.changeNavScreen('doanh thu') }
                            >
                                <i className="bi bi-gem" />
                                <span>Quản lý doanh thu</span>
                            </button>
                        </li>
                        {/* End Icons Nav */}
                        <li className="nav-heading">Pages</li>
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="users-profile.html">
                                <i className="bi bi-person" />
                                <span>Profile</span>
                            </a>
                        </li>
                        {/* End Profile Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-faq.html">
                                <i className="bi bi-question-circle" />
                                <span>F.A.Q</span>
                            </a>
                        </li>
                        {/* End F.A.Q Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-contact.html">
                                <i className="bi bi-envelope" />
                                <span>Contact</span>
                            </a>
                        </li>
                        {/* End Contact Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-register.html">
                                <i className="bi bi-card-list" />
                                <span>Register</span>
                            </a>
                        </li>
                        {/* End Register Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-login.html">
                                <i className="bi bi-box-arrow-in-right" />
                                <span>Login</span>
                            </a>
                        </li>
                        {/* End Login Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-error-404.html">
                                <i className="bi bi-dash-circle" />
                                <span>Error 404</span>
                            </a>
                        </li>
                        {/* End Error 404 Page Nav */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="pages-blank.html">
                                <i className="bi bi-file-earmark" />
                                <span>Blank</span>
                            </a>
                        </li>
                        {/* End Blank Page Nav */}
                    </ul>
                </aside>
                {/* End Sidebar*/}
            </div>
        );
    }
}
export default StaffSidebar;