import React, { Component } from "react";

class FooterGuest extends Component {
    render() {
        return (
            <footer className="bg-dark" id="tempaltemo_footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 pt-5">
                            <h2 className="h2 text-success border-bottom pb-3 border-light logo">
                                Sneaker To Go
                            </h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <i className="fas fa-map-marker-alt fa-fw" />
                                    123 Hoàng Quốc Việt, Cầu Giấy, Hà Nội
                                </li>
                                <li>
                                    <i className="fa fa-phone fa-fw" />
                                    <a className="text-decoration-none" href="tel:010-020-0340">
                                        010-020-0340
                                    </a>
                                </li>
                                <li>
                                    <i className="fa fa-envelope fa-fw" />
                                    <a
                                        className="text-decoration-none"
                                        href="mailto:contact@sneakertogo.com"
                                    >
                                        contact@sneakertogo.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 pt-5">
                            <h2 className="h2 text-light border-bottom pb-3 border-light">
                                Danh mục
                            </h2>
                            <ul className="list-unstyled text-light footer-link-list">
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Luxury
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Sport Wear
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Men's Sneaker
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Women's Sneaker
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Popular Sneaker
                                    </a>
                                </li>
                                <li>
                                    <a className="text-decoration-none" href="#">
                                        Sport Sneaker
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto">
                            <label className="sr-only" htmlFor="subscribeEmail">
                                Email address
                            </label>
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    className="form-control bg-dark border-light"
                                    id="subscribeEmail"
                                    placeholder="Email address"
                                />
                                <div className="input-group-text btn-success text-light">
                                    Subscribe
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default FooterGuest;