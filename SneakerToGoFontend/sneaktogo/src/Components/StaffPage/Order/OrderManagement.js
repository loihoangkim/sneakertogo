import React, { Component } from "react";
import axios from "axios";
import OrderDetail from "./OrderDetail"


class OrderManagement extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            bills: [],
            page: 'donhangmoi',
            showDetailPage: false,
            idToGet: 0,
            billDetail: [],
            defaultStatus: ''
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
        var url = 'https://localhost:7193/api/v1/Bills/findByStatus?status=Ch%E1%BB%9D%20x%C3%A1c%20nh%E1%BA%ADn';
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
    }

    renderDetailBill = (id, status) => {
        var url = 'https://localhost:7193/api/BillDetails/?id=' + id;
        axios.get(url).then((response) => {
            this.setState({
                billDetail: response.data,
                idToGet: id, 
                defaultStatus: status
            });
        });
        return this.changeToDetailPage();
    }




    renderListBill = (page) => {
        let config = this.getConfigToken();
        var url;
        if (page === 'daxacnhan') {
            url = 'https://localhost:7193/api/v1/Bills/findByStatus?status=%C4%90%C3%A3%20x%C3%A1c%20nh%E1%BA%ADn';
        }
        else if (page === 'dangvanchuyen') {
            url = 'https://localhost:7193/api/v1/Bills/findByStatus?status=%C4%90ang%20v%E1%BA%ADn%20chuy%E1%BB%83n';
        }
        else if (page === 'dahoanthanh') {
            url = 'https://localhost:7193/api/v1/Bills/findByStatus?status=%C4%90%C3%A3%20ho%C3%A0n%20th%C3%A0nh';
        }
        else if( page === 'donhangoi') {
            url = 'https://localhost:7193/api/v1/Bills/findByStatus?status=Ch%E1%BB%9D%20x%C3%A1c%20nh%E1%BA%ADn';
        }
        axios.get(url, config).then((response) => {
            this.setState({
                bills: response.data,
            });
        });
        if (this.state.bills.length === 0) return (
            <div className="container text-center" style={{ marginTop: 100,marginBottom: 100 }}>
                <h2 className="h2">Chưa có đơn hàng mới nào cả!</h2>
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
                                <button type="button" className="btn btn-primary"  onClick={() => this.renderDetailBill(item.billId,item.orderStatus)} style={{marginTop: 20}} >
                                    Chi tiết</button>
                            </div>
                        </div>
                    </div>
                </div>

            );
        });
    }

    changeToPage = (page) => {
        this.setState({
            page: page,
        })
    }

    render() {
        if(this.state.showDetailPage === false)
        return (
            <section className="h-100 h-custom" style={{ backgroundColor: "#d2c9ff" }}>
                <div className="container py-5 h-100">
                    <div className="row">
                        <div className="col-3"><button type="button" className="btn btn-info" onClick={() => this.changeToPage('donhangoi')} >Đơn hàng mới</button></div>
                        <div className="col-3"><button type="button" className="btn btn-info" onClick={() => this.changeToPage('daxacnhan')} >Đã xác nhận</button></div>
                        <div className="col-3"><button type="button" className="btn btn-info" onClick={() => this.changeToPage('dangvanchuyen')} >Đang vận chuyển</button></div>
                        <div className="col-3"><button type="button" className="btn btn-info" onClick={() => this.changeToPage('dahoanthanh')} >Đã hoàn thành</button></div>
                    </div>
                </div>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12">
                            <div
                                className="card card-registration card-registration-2"
                                style={{ borderRadius: 15 }}
                            >
                                {this.renderListBill(this.state.page)}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
        else {
            return (
                <OrderDetail
                    showDetailPage = {this.state.showDetailPage}
                    changeToDetailPage = {this.changeToDetailPage}
                    idToGet = {this.state.idToGet}
                    billDetail = {this.state.billDetail}
                    defaultStatus = {this.state.defaultStatus}
                />
            )
        }
    }
}
export default OrderManagement;