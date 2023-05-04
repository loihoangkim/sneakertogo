import React, { Component } from "react";

class TopNewProduct extends Component{
    constructor(pros){
      super(pros)
      this.state = {
        
      }
    }
    render(){
        return(
            <section className="bg-light">
                        <div className="container py-5">
                            <div className="row text-center py-3">
                                <div className="col-lg-6 m-auto">
                                    <h1 className="h1">Sản phẩm theo xu hướng</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-4 mb-4">
                                    <div className="card h-100">
                                        <a href="shop-single.html">
                                            <img
                                                src="./assets/img/feature_prod_01.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                        </a>
                                        <div className="card-body">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                </li>
                                            </ul>
                                            <a
                                                href="shop-single.html"
                                                className="h2 text-decoration-none text-dark"
                                            >
                                                Adidas ULTRABOOST
                                            </a>
                                            <p className="card-text">
                                            Trải nghiệm nguồn năng lượng vượt trội với giày Ultraboost Light mới, phiên bản Ultraboost nhẹ nhất của chúng tôi. Sự kỳ diệu nằm ở đế giữa Light BOOST, thế hệ mới của đệm adidas BOOST.
                                            Thiết kế phân tử độc đáo của mẫu giày này đạt đến chất liệu mút xốp BOOST nhẹ nhất từ trước đến nay.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <div className="card h-100">
                                        <a href="shop-single.html">
                                            <img
                                                src="./assets/img/feature_prod_02.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                        </a>
                                        <div className="card-body">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                </li>
                                            </ul>
                                            <a
                                                href="shop-single.html"
                                                className="h2 text-decoration-none text-dark"
                                            >
                                                Nike Air Force 1
                                            </a>
                                            <p className="card-text">
                                            Mang tình yêu của bạn cho trò chơi với bạn bất cứ nơi nào bạn đi. Vượt qua sự thoải mái của gỗ cứng với sự tinh tế ngoài sân đấu, 
                                            những cú đá này tạo ra một làn gió mới cho phong cách cổ điển của hoops với màu neon nhạt và họa tiết hoa văn cổ điển.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-4 mb-4">
                                    <div className="card h-100">
                                        <a href="shop-single.html">
                                            <img
                                                src="./assets/img/feature_prod_03.jpg"
                                                className="card-img-top"
                                                alt="..."
                                            />
                                        </a>
                                        <div className="card-body">
                                            <ul className="list-unstyled d-flex justify-content-between">
                                                <li>
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                    <i className="text-warning fa fa-star" />
                                                </li>
                                            </ul>
                                            <a
                                                href="shop-single.html"
                                                className="h2 text-decoration-none text-dark"
                                            >
                                                PUMA x LAMELO BALL MB.01
                                            </a>
                                            <p className="card-text">
                                            Truyền NITRO: Bọt được bơm nitơ kèm theo được thiết kế để mang lại khả năng đáp ứng và đệm trong một gói nhẹ
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        );
    }
}
export default TopNewProduct;