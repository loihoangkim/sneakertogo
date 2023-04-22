import React, { Component } from "react";

class TopCategoryGuest extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            "option": "trang chủ"
        }
    }
    render() {
        return (
            <section className="container py-5">
                <div className="row text-center pt-3">
                    <div className="col-lg-6 m-auto">
                        <h1 className="h1">Danh mục sản phẩm</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#">
                            <img
                                src="./assets/img/category_img_01.jpg"
                                className="rounded-circle img-fluid border hoverzoom"
                            />
                        </a>
                        <h5 className="text-center mt-3 mb-3">Giày bóng rổ</h5>
                        <p className="text-center">
                            <a className="btn btn-success hoverzoom">Xem ngay</a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#">
                            <img
                                src="./assets/img/category_img_02.jpg"
                                className="rounded-circle img-fluid border hoverzoom"
                            />
                        </a>
                        <h2 className="h5 text-center mt-3 mb-3">Giày chạy bộ</h2>
                        <p className="text-center">
                            <a className="btn btn-success hoverzoom">Xem ngay</a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#">
                            <img
                                src="./assets/img/category_img_03.jpg"
                                className="rounded-circle img-fluid border hoverzoom"
                            />
                        </a>
                        <h2 className="h5 text-center mt-3 mb-3">Giày cho nữ giới</h2>
                        <p className="text-center">
                            <a className="btn btn-success hoverzoom">Xem ngay</a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#">
                            <img
                                src="./assets/img/category_img_04.jpg"
                                className="rounded-circle img-fluid border hoverzoom"
                            />
                        </a>
                        <h5 className="text-center mt-3 mb-3">Giày đá bóng</h5>
                        <p className="text-center">
                            <a className="btn btn-success hoverzoom">Xem ngay</a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#">
                            <img
                                src="./assets/img/category_img_05.jpg"
                                className="rounded-circle img-fluid border hoverzoom"
                            />
                        </a>
                        <h2 className="h5 text-center mt-3 mb-3">Giày trẻ em</h2>
                        <p className="text-center">
                            <a className="btn btn-success hoverzoom">Xem ngay</a>
                        </p>
                    </div>
                    <div className="col-12 col-md-4 p-5 mt-3">
                        <a href="#">
                            <img
                                src="./assets/img/category_img_06.jpg"
                                className="rounded-circle img-fluid border hoverzoom"
                            />
                        </a>
                        <h2 className="h5 text-center mt-3 mb-3">Phụ kiện chăm sóc giày</h2>
                        <p className="text-center">
                            <a className="btn btn-success hoverzoom">Xem ngay</a>
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}
export default TopCategoryGuest;