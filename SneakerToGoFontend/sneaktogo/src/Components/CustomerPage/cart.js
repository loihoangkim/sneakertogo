import React, { Component } from "react";
import axios from "axios";



class Cart extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            userId: sessionStorage.getItem("UserId"),
            cartDetail: [],
        }
    }

    getConfigToken() {
        let config = {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("Token"),
                "Content-type": "application/json"
            }
        };
        return config;
    }


    renderItem = () => {
        return this.state.cartDetail.map((item, index) => {
            return (
                <div>
                    <hr className="my-4" />
                    <div className="row mb-4 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                                src={"./assets/Images/" + item.modelName + "(1).png"}
                                className="img-fluid rounded-3"
                                alt={item.modelName}
                            />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-black mb-0">{item.modelName}</h6>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                            <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                            >
                                <i className="fas fa-minus" />
                            </button>
                            <input
                                id="form1"
                                min={0}
                                name="quantity"
                                defaultValue={item.quantity}
                                type="number"
                                className="form-control form-control-sm"
                            />
                            <button
                                className="btn btn-link px-2"
                                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                            >
                                <i className="fas fa-plus" />
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{item.price}</h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                            <a href="#!" className="text-muted">
                                <i className="fas fa-times" />
                            </a>
                        </div>
                    </div>
                </div>
            );
        });
    }

    componentDidMount = () => {
        let config = this.getConfigToken();
        var url = 'https://localhost:7193/api/CartDetails/findByUserID?userID=' + this.state.userId;
        axios.get(url, config).then((response) => {
            this.setState({
                cartDetail: response.data,
            });
        });
        // console.log(this.state.cartDetail);
    }


    render() {
        return (
            <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div
                                className="card card-registration card-registration-2"
                                style={{ borderRadius: 15 }}
                            >
                                <div className="card-body p-0">
                                    <div className="row g-0">
                                        <div className="col-lg-8">
                                            <div className="p-5">
                                                <div className="d-flex justify-content-between align-items-center mb-5">
                                                    <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                    <h6 className="mb-0 text-muted">{this.state.cartDetail.length} sản phẩm</h6>
                                                </div>
                                                {this.renderItem()}
                                                <hr className="my-4" />
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-6">
                                                            <div className="pt-5">
                                                                <h6 className="mb-0">
                                                                    <a href="#!" className="text-body"
                                                                        onClick={() => this.props.changeNavPage('home')}
                                                                    >
                                                                        <i className="fas fa-long-arrow-alt-left me-2" />
                                                                        Trở về trang chủ
                                                                    </a>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="pt-5">
                                                                <h6 className="mb-0">
                                                                    <a href="#!" className="text-body"
                                                                        style={{ marginLeft: 330 }}
                                                                         onClick={() => this.props.changeNavPage('payment')}
                                                                    >
                                                                        <i className="fas fa-long-arrow-alt-right me-2" />
                                                                        Mua hàng
                                                                    </a>
                                                                </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default Cart;