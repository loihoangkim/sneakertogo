import React, { Component } from "react";
import $, { get } from "jquery";
import axios from "axios";

class Payment extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            userId: sessionStorage.getItem("UserId"),
            cartDetail: []
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

    componentDidMount = () => {
        let config = this.getConfigToken();
        var url = 'https://localhost:7193/api/CartDetails/findByUserID?userID=' + this.state.userId;
        axios.get(url, config).then((response) => {
            this.setState({
                cartDetail: response.data,
            });
        });
        console.log(this.state.cartDetail);
    }


    renderListProduct = () => {
        return this.state.cartDetail.map((item, index) => {
            return (
                <div class="container card w-75" style={{marginTop:50}} >
                    <div class="row">
                        <div className="col-4"><img
                            src={"./assets/Images/" + item.modelName + "(1).png"}
                            className="img-fluid rounded-3"
                            style={{maxWidth: 150}}
                            alt={item.modelName}
                        /></div>
                        <div className="col-4">
                            <h5 class="card-title" style={{paddingTop:50}} >{item.modelName}</h5>
                        </div>
                        <div className="col-2">
                            <h5 class="card-title" style={{paddingTop:50}} >{item.quantity}</h5>
                        </div>
                        <div className="col-2">
                            <h5 class="card-title" style={{paddingTop:50}} >{item.price}</h5>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="container" >
                {this.renderListProduct()}
                <div className="row justify-content-center">
                    <div className="w-75">
                        <div className="card shadow-lg border-0 rounded-lg mt-5">
                            <div className="card-header">
                                <h3 className="text-center font-weight-light my-4 h3">Thông tin nhận hàng</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input
                                                    className="form-control"
                                                    id="inputFirstName"
                                                    type="text"
                                                    placeholder="Nhập thông tin"
                                                />
                                                <label htmlFor="inputFirstName">Tên người nhận</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            className="form-control"
                                            id="inputEmail"
                                            type="email"
                                            placeholder="name@example.com"
                                        />
                                        <label htmlFor="inputEmail">Địa chỉ nhận</label>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input
                                                    className="form-control"
                                                    id="inputPassword"
                                                    type="password"
                                                    placeholder="Create a password"
                                                />
                                                <label htmlFor="inputPassword">Số điện thoại</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-0">
                                        <div className="d-grid">
                                            <button type="button" className="btn btn-primary btn-block" onClick={() => this.payment()} >
                                                Đặt hàng
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-0">
                                        <div className="d-grid">
                                            <button type="button" className="btn btn-info btn-block"
                                                onClick={() => this.props.changeNavPage('cart')} >
                                                Trở lại
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Payment;