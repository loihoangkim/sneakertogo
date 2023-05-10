import React, { Component } from "react";
import $, { get } from "jquery";
import axios from "axios";

class Bill extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            userId: sessionStorage.getItem("UserId"),
            bills: []
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
        var url = 'https://localhost:7193/api/v1/Bills/findByUserID?userID=' + this.state.userId;
        axios.get(url, config).then((response) => {
            this.setState({
                bills: response.data,
            });
        });
    }


    renderListBill = () => {
        if (this.state.bills.length === 0) return (
            <div className="container text-center" style={{ marginTop: 100 }}>
                <h2 className="h2">Bạn chưa có hóa đơn nào cả!</h2>
                <button className="btn btn-primary btn-lg" style={{ marginBottom: 100 }}
                    onClick={() => this.props.changeNavPage('shop')}
                >Bắt đầu mua sắm tại đây</button>
            </div>
        )
        return this.state.bills.map((item, index) => {
            return (
                <div className="card mb-3" style={{ padding: 20 }}>
                    <div className="card-body">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="pb-3">
                                    <h6 className="text-black mb-0">Mã hóa đơn: {item.billId}</h6>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                    <h6 className="mb-0">
                                        Thanh toán:{item.paymentStatus}
                                    </h6>
                                    </div>
                                    <div class="col-md-6">
                                        Tổng tiền:{Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.totalPrice)}
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <h6 className="mb-0">
                                    Trạng thái:{item.orderStatus}
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>

            );
        });
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
                                {this.renderListBill()}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}
export default Bill;