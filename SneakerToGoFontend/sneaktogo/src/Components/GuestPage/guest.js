import React, { Component } from "react";
import $, { get } from "jquery";
import HeaderGuest from "./header-guest";
import SearchGuest from "./search-guest";
import BannerGuest from "./banner-guest";
import TopCategoryGuest from "./topcategory";
import TopNewProduct from "./top-best-product";
import FooterGuest from "./footer-guest";

class Guest extends Component {
    render() {
        return (
            <div>
                <div>
                    {/* Header */}
                    <nav className="navbar navbar-expand-lg navbar-light shadow">
                        <HeaderGuest/>
                    </nav>
                    <SearchGuest/>
                    <BannerGuest/>
                    <TopCategoryGuest/>
                    <TopNewProduct/>
                    <FooterGuest/>
                </div>
            </div>
        );
    }
}
export default Guest;