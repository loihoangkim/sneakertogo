import React, { Component } from "react";
import $, { get } from "jquery";
import axios from "axios";
import BillDetail from './billDetail'

class Bill extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            userId: sessionStorage.getItem("UserId"),
            bills: [],
            showDetailPage: false,
            billDetailData: []
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

    changeToDetailPage = () => {
        this.setState({
            showDetailPage: !this.state.showDetailPage,
        })
        console.log(this.state.showDetailPage)
    }

    getDetailBill = (id) => {
        var url = 'https://localhost:7193/api/BillDetails/?id=' + id;
        axios.get(url).then((response) => {
            this.setState({
                billDetailData: response.data,
            });
        });
        //console.log(this.state.billDetailData)
        return this.changeToDetailPage();
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
                                <button type="button" className="btn btn-primary" style={{ marginTop: 20 }}
                                     onClick={() => this.getDetailBill(item.billId)}
                                    //onClick={() => this.changeToDetailPage()}
                                >Chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderDetailBillList = () => {
        return this.state.billDetailData.map((item, index) => {
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
                            <p>
                                {item.quantity}
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                            </h6>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        if (this.state.showDetailPage !== true) return (
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
        else {
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
                                                        <h1 className="fw-bold mb-0 text-black">Chi tiết đơn hàng</h1>
                                                        <h6 className="mb-0 text-muted">{this.state.billDetailData.length} sản phẩm</h6>
                                                    </div>
                                                    {this.renderDetailBillList()}
                                                    <hr className="my-4" />
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="pt-5">
                                                                    <h6 className="mb-0">
                                                                        <a href="#!" className="text-body"
                                                                            onClick={() => this.changeToDetailPage()}
                                                                        >
                                                                            <i className="fas fa-long-arrow-alt-left me-2" />
                                                                            Trở về trang chủ
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
}
export default Bill;