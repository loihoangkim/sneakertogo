import React, { Component } from "react";

class HeaderCustomer extends Component {
    render() {
        return (
            <div className="container d-flex justify-content-between align-items-center">
                <button
                    className=" text-success logo h1 align-self-center"
                    onClick={() => this.props.changeNavPage('home')}
                >
                    <img
                        src="./assets/img/logo.png"
                        alt="logo"
                    />
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
                                <button className="nav-link" onClick={() => this.props.changeNavPage('home')}>
                                    Trang chủ
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => this.props.changeNavPage('about')}>
                                    Thông tin
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => this.props.changeNavPage('shop')}>
                                    Cửa hàng
                                </button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link" onClick={() => this.props.changeNavPage('contact')}>
                                    Liên hệ
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

                        <button
                            className="nav-icon position-relative text-decoration-none"
                            href="../../App.js"
                             onClick={() => this.props.changeNavPage('cart')}
                        >
                            <i className="fa fa-fw fa-cart-shopping text-dark mr-3" />
                            Giỏ hàng
                        </button>
                        <button
                            className="nav-icon position-relative text-decoration-none"
                            href="../../App.js"
                            onClick={() => this.props.changeNavPage('bill')}
                        >
                            <i className="fa fa-fw fa-wallet text-dark mr-3" />
                            Hóa đơn
                        </button>
                        <a className="btn btn-warning" href="../../App.js" style={{ marginRight: 10 }} onClick={localStorage.clear()}>
                            <i className="bi bi-box-arrow-right" />
                            <span>Đăng xuất</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderCustomer;