import React, { Component } from "react";

class BannerGuest extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            "option": "trang chủ"
        }
    }
    render() {
        return (
            <div
                id="template-mo-zay-hero-carousel"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-bs-target="#template-mo-zay-hero-carousel"
                        data-bs-slide-to={0}
                        className="active"
                    />
                    <li
                        data-bs-target="#template-mo-zay-hero-carousel"
                        data-bs-slide-to={1}
                    />
                    <li
                        data-bs-target="#template-mo-zay-hero-carousel"
                        data-bs-slide-to={2}
                    />
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img
                                        className="img-fluid"
                                        src="./assets/img/banner_img_01.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left align-self-center">
                                        <h1 className="h1 text-success">
                                            <b>Sneaker</b> to go
                                        </h1>
                                        <h3 className="h2">Ở đây có bán giày chính hãng</h3>
                                        <p>
                                        Giày dép, trở thành một trong những phụ kiện hỗ trợ phong cách giúp thời trang trông bắt mắt hơn.
                                         Nhiều thương hiệu giày nổi tiếng được bán trên thị trường, nhưng thật không may, có những người bán giày giả, hay còn gọi là kw.
                                         Chúng tôi mang trong mình xứ mệnh đem những sản phẩm chính hãng tới tay người tiêu dùng Việt
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img
                                        className="img-fluid"
                                        src="./assets/img/banner_img_02.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Nike</h1>
                                        <h3 className="h2">Jordan 4 'Bred'</h3>
                                        <p>
                                        Mẫu giày này được làm từ chất liệu chính là da lộn thường tìm thấy ở những món đồ xa xỉ, đắt tiền. 
                                        Phần midsole được phủ nhung để tạo nên sự đồng bộ cho thân giày. Và khi sờ vào bạn sẽ có cảm giác nhám tay. 
                                        Phía đế thì được làm theo kiểu phát sáng. Đặc biệt, bên trong giày còn được lót bằng da thật mang lại cảm giác êm ái và mềm mại hơn khi mang.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="container">
                            <div className="row p-5">
                                <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                                    <img
                                        className="img-fluid"
                                        src="./assets/img/banner_img_03.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="col-lg-6 mb-0 d-flex align-items-center">
                                    <div className="text-align-left">
                                        <h1 className="h1">Adidas ULTRABOOST</h1>
                                        <h3 className="h2">Thiết kế mang đậm công nghệ </h3>
                                        <p>
                                        Ultraboost Light là mẫu giày nhẹ nhất từ trước đến nay của chúng tôi, với chất liệu BOOST nhẹ hơn 30%.
                                         Mỗi hạt xốp tí hon nén trong đế giữa kết hợp với nhau cung cấp năng lượng vượt trội trong từng sải bước.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev text-decoration-none w-auto ps-3"
                    href="#template-mo-zay-hero-carousel"
                    role="button"
                    data-bs-slide="prev"
                >
                    <i className="fas fa-chevron-left" />
                </a>
                <a
                    className="carousel-control-next text-decoration-none w-auto pe-3"
                    href="#template-mo-zay-hero-carousel"
                    role="button"
                    data-bs-slide="next"
                >
                    <i className="fas fa-chevron-right" />
                </a>
            </div>
        );
    }
}
export default BannerGuest;