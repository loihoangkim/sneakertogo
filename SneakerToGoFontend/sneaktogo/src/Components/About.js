import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                {/* Start Top Nav */}
                {/* Modal */}
                <div
                    className="modal fade bg-white"
                    id="templatemo_search"
                    tabIndex={-1}
                    role="dialog"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="w-100 pt-1 mb-5 text-right">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <form
                            action=""
                            method="get"
                            className="modal-content modal-body border-0 p-0"
                        >
                            <div className="input-group mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputModalSearch"
                                    name="q"
                                    placeholder="Search ..."
                                />
                                <button
                                    type="submit"
                                    className="input-group-text bg-success text-light"
                                >
                                    <i className="fa fa-fw fa-search text-white" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <section className="bg-success py-5">
                    <div className="container">
                        <div className="row text-center pt-5 pb-3">
                            <div className="col-md-12">
                                <img src="assets/img/nike-vs-adidas-0.jpg" alt="About Hero" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-5 bg-info">
                    <div className="row text-center pt-5 pb-3 text-body">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Chúng tôi là ai?</h1>
                            <p style={{ padding: 15 }}>
                            Sneaker đã trở thành một biểu tượng của xã hội, là một sản phẩm của thời đại với những thiết kế cổ điển và những điều đó đều nằm trong những đôi giày Sneaker . Không lỗi thời với thời gian, mang dấu ấn cá tính khác biệt và tạo mọi sự lôi cuốn từ chính đôi giày Sneaker. Tự tạo cuộc chơi, tự tạo phong cách, đó là Sneaker To Go.
                            </p>
                            <p>
                            Chúng tôi mang trong mình xứ mệnh đem những sản phẩm chính hãng tới tay người tiêu dùng Việt.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Close Banner */}
                {/* Start Section */}
                <section className="container py-5">
                    <div className="row text-center pt-5 pb-3">
                        <div className="col-lg-6 m-auto">
                            <h1 className="h1">Dịch vụ của chúng tôi</h1>
                            <p style={{ padding: 15 }}>
                                Chúng tôi luôn muốn đưa các sản phẩm chính hãng đến tay người dùng Viêt Nam một cách ưu đãi nhất, bằng trải những trải nghiệm mua hàng tốt nhất.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3 pb-5">
                            <div className="h-100 py-5 services-icon-wap shadow">
                                <div className="h1 text-success text-center">
                                    <i className="fa fa-truck fa-lg" />
                                </div>
                                <h2 className="h5 mt-4 text-center">Chính sách giao hàng</h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-5">
                            <div className="h-100 py-5 services-icon-wap shadow">
                                <div className="h1 text-success text-center">
                                    <i className="fas fa-exchange-alt" />
                                </div>
                                <h2 className="h5 mt-4 text-center">Đổi hàng &amp; Hoàn trả</h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-5">
                            <div className="h-100 py-5 services-icon-wap shadow">
                                <div className="h1 text-success text-center">
                                    <i className="fa fa-percent" />
                                </div>
                                <h2 className="h5 mt-4 text-center">Triết khấu</h2>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 pb-5">
                            <div className="h-100 py-5 services-icon-wap shadow">
                                <div className="h1 text-success text-center">
                                    <i className="fa fa-user" />
                                </div>
                                <h2 className="h5 mt-4 text-center">Dịch vụ tư vấn hỗ trợ</h2>
                            </div>
                        </div>
                    </div>
                </section>
                {/* End Section */}
                {/* Start Brands */}
                <section className="bg-light py-5">
                    <div className="container my-4">
                        <div className="row text-center py-3">
                            <div className="col-lg-6 m-auto">
                                <h1 className="h1">Đối tác của chúng tôi</h1>
                                <p style={{ padding: 15 }}>
                                    Các thương hiệu nổi tiếng trên toàn thế giới được người dùng đặt lòng tin, luôn luôn ưa chuộng và tin dùng.
                                </p>
                            </div>
                            <div className="col-lg-9 m-auto tempaltemo-carousel">
                                <div className="row d-flex flex-row">
                                    {/*Controls*/}
                                    <div className="col-1 align-self-center">
                                        <a
                                            className="h1"
                                            href="#templatemo-slide-brand"
                                            role="button"
                                            data-bs-slide="prev"
                                        >
                                            <i className="text-light fas fa-chevron-left" />
                                        </a>
                                    </div>
                                    {/*End Controls*/}
                                    {/*Carousel Wrapper*/}
                                    <div className="col">
                                        <div
                                            className="carousel slide carousel-multi-item pt-2 pt-md-0"
                                            id="templatemo-slide-brand"
                                            data-bs-ride="carousel"
                                        >
                                            {/*Slides*/}
                                            <div
                                                className="carousel-inner product-links-wap"
                                                role="listbox"
                                            >
                                                {/*First slide*/}
                                                <div className="carousel-item active">
                                                    <div className="row">
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_01.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_02.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_03.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_04.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End First slide*/}
                                                {/*Second slide*/}
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_01.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_02.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_03.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_04.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Second slide*/}
                                                {/*Third slide*/}
                                                <div className="carousel-item">
                                                    <div className="row">
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_01.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_02.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_03.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className="col-3 p-md-5">
                                                            <a href="#">
                                                                <img
                                                                    className="img-fluid brand-img"
                                                                    src="assets/img/brand_04.png"
                                                                    alt="Brand Logo"
                                                                />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*End Third slide*/}
                                            </div>
                                            {/*End Slides*/}
                                        </div>
                                    </div>
                                    {/*End Carousel Wrapper*/}
                                    {/*Controls*/}
                                    <div className="col-1 align-self-center">
                                        <a
                                            className="h1"
                                            href="#templatemo-slide-brand"
                                            role="button"
                                            data-bs-slide="next"
                                        >
                                            <i className="text-light fas fa-chevron-right" />
                                        </a>
                                    </div>
                                    {/*End Controls*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*End Brands*/}

            </div>
        );
    }
}
export default About;