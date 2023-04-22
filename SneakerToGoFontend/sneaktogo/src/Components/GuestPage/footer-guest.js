import React, { Component } from "react";

class FooterGuest extends Component {
    render() {
        return (
            <>
                {/* Remove the container if you want to extend the Footer to full width. */}
                <div className="container my-6">
                    {/* Footer */}
                    <footer
                        className="text-center text-lg-start text-dark"
                        style={{ backgroundColor: "#ECEFF1" }}
                    >
                        {/* Section: Social media */}
                        <section
                            className="d-flex justify-content-between p-4 text-white"
                            style={{ backgroundColor: "#21D192" }}
                        >
                            {/* Left */}
                            <div className="me-5">
                                <span><div className="h4">Liên hệ với chúng tôi theo tại:</div></span>
                            </div>
                            {/* Left */}
                            {/* Right */}
                            <div>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-twitter" />
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-google" />
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-linkedin" />
                                </a>
                                <a href="" className="text-white me-4">
                                    <i className="fab fa-github" />
                                </a>
                            </div>
                            {/* Right */}
                        </section>
                        {/* Section: Social media */}
                        {/* Section: Links  */}
                        <section className="">
                            <div className="container text-center text-md-start mt-5">
                                {/* Grid row */}
                                <div className="row mt-3">
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        {/* Content */}
                                        <h6 className="text-uppercase fw-bold">Sneaker to Go</h6>
                                        <hr
                                            className="mb-4 mt-0 d-inline-block mx-auto"
                                            style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                                        />
                                        <p>
                                        Chúng tôi mang trong mình xứ mệnh đem những sản phẩm chính hãng tới tay người tiêu dùng Việt.
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold">Danh mục sản phẩm</h6>
                                        <hr
                                            className="mb-4 mt-0 d-inline-block mx-auto"
                                            style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                                        />
                                        <p>
                                            <a href="#!" className="text-dark">
                                                MDBootstrap
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">
                                                MDWordPress
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">
                                                BrandFlow
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">
                                                Bootstrap Angular
                                            </a>
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold">Useful links</h6>
                                        <hr
                                            className="mb-4 mt-0 d-inline-block mx-auto"
                                            style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                                        />
                                        <p>
                                            <a href="#!" className="text-dark">
                                                Your Account
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">
                                                Become an Affiliate
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">
                                                Shipping Rates
                                            </a>
                                        </p>
                                        <p>
                                            <a href="#!" className="text-dark">
                                                Help
                                            </a>
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                    {/* Grid column */}
                                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        {/* Links */}
                                        <h6 className="text-uppercase fw-bold">Contact</h6>
                                        <hr
                                            className="mb-4 mt-0 d-inline-block mx-auto"
                                            style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                                        />
                                        <p>
                                            <i className="fas fa-home mr-3" /> New York, NY 10012, US
                                        </p>
                                        <p>
                                            <i className="fas fa-envelope mr-3" /> info@example.com
                                        </p>
                                        <p>
                                            <i className="fas fa-phone mr-3" /> + 01 234 567 88
                                        </p>
                                        <p>
                                            <i className="fas fa-print mr-3" /> + 01 234 567 89
                                        </p>
                                    </div>
                                    {/* Grid column */}
                                </div>
                                {/* Grid row */}
                            </div>
                        </section>
                        {/* Section: Links  */}
                        {/* Copyright */}
                        <div
                            className="text-center p-3"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                        >
                            © 2023 Copyright:
                            <a className="text-dark" href="https://sneakertogo.com/">
                                SneakerToGo.com
                            </a>
                        </div>
                        {/* Copyright */}
                    </footer>
                    {/* Footer */}
                </div>
                {/* End of .container */}
            </>

        );
    }
}
export default FooterGuest;