import React, { Component } from "react";
import $, { get } from "jquery";

class StaffHeader extends Component {
    render() {
        return (
            <div>
                <header id="header" className="header fixed-top d-flex align-items-center">
                    <div className="d-flex align-items-center justify-content-between">
                        <a href="index.html" className="logo d-flex align-items-center">
                            <img src="assets/img/logo.png" alt="" />
                            <span className="d-none d-lg-block">NiceAdmin</span>
                        </a>
                        <i className="bi bi-list toggle-sidebar-btn" />
                    </div>
                    {/* End Logo */}
                    <div className="search-bar">
                        <form
                            className="search-form d-flex align-items-center"
                            method="POST"
                            action="#"
                        >
                            <input
                                type="text"
                                name="query"
                                placeholder="Search"
                                title="Enter search keyword"
                            />
                            <button type="submit" title="Search">
                                <i className="bi bi-search" />
                            </button>
                        </form>
                    </div>
                    {/* End Search Bar */}
                    <nav className="header-nav ms-auto">
                        <ul className="d-flex align-items-center">
                            <li className="nav-item d-block d-lg-none">
                                <a className="nav-link nav-icon search-bar-toggle " href="#">
                                    <i className="bi bi-search" />
                                </a>
                            </li>
                            {/* End Search Icon*/}
                            <li className="nav-item  pe-3">
                                {/* End Profile Iamge Icon */}
                                <a className="btn btn-warning" href="../../App.js" style={{marginRight:50}} onClick={ localStorage.clear() }>
                                    <i className="bi bi-box-arrow-right" />
                                    <span>Sign Out</span>
                                </a>
                                {/* End Profile Dropdown Items */}
                            </li>
                            {/* End Profile Nav */}
                        </ul>
                    </nav>
                    {/* End Icons Navigation */}
                </header>
            </div>
        );
    }
}
export default StaffHeader;