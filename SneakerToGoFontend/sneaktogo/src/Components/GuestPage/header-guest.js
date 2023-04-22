import React, { Component } from "react";

class HeaderGuest extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-between align-items-center">
                <button
                    className="navbar-brand text-success logo h1 align-self-center"
                    onClick={ () => this.props.changeNavPage('home')}
                >
                    Sneaker To Go
                </button>
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#templatemo_main_nav"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="align-self-center collapse navbar-collapse flex-fill  d-lg-flex justify-content-lg-between"
                    id="templatemo_main_nav"
                >
                    <div className="flex-fill">
                        <ul className="nav navbar-nav d-flex justify-content-between mx-lg-auto">
                            <li className="nav-item">
                                <button className="nav-link" onClick={ () => this.props.changeNavPage('home')}>
                                    Home
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={ () => this.props.changeNavPage('about')}>
                                    About
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={ () => this.props.changeNavPage('shop')}>
                                    Shop
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={ () => this.props.changeNavPage('contact')}>
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="navbar align-self-center d-flex">
                        <div className="d-lg-none flex-sm-fill mt-3 mb-4 col-7 col-sm-auto pr-3">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputMobileSearch"
                                    placeholder="Search ..."
                                />
                                <div className="input-group-text">
                                    <i className="fa fa-fw fa-search" />
                                </div>
                            </div>
                        </div>
                        <a
                            className="nav-icon d-none d-lg-inline"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#templatemo_search"
                        >
                            <i className="fa fa-fw fa-search text-dark mr-2" />
                        </a>
                        <button
                            className="nav-icon position-relative text-decoration-none"
                            href="../../App.js"
                            onClick={ () => this.props.openLogin() }
                        >
                            <i className="fa fa-fw fa-user text-dark mr-3" />
                            Đăng nhập
                        </button>
                        <button
                            className="nav-icon position-relative text-decoration-none"
                            href="../../App.js"
                            onClick={ () => this.props.openLogin() }
                        >
                            <i className="fa fa-fw fa-cart-shopping text-dark mr-3" />
                            Giỏ hàng
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderGuest;