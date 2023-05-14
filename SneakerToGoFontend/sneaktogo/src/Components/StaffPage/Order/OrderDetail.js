import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";



class OrderDetail extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            billDetail: [],
            statusBill: '',
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
        return this.props.billDetail.map((item, index) => {
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

    changeStatus = (value) => {
        if (value === 'Chờ xác nhận') {
            this.setState({
                statusBill: 'Ch%E1%BB%9D%20x%C3%A1c%20nh%E1%BA%ADn',
            })
        }
        else if (value === 'Đang vận chuyển') {
            this.setState({
                statusBill: '%C4%90ang%20v%E1%BA%ADn%20chuy%E1%BB%83n',
            })
        }
        else if (value === 'Xác nhận') {
            this.setState({
                statusBill: 'X%C3%A1c%20nh%E1%BA%ADn',
            })
        }
        else if (value === 'Đã hoàn thành') {
            this.setState({
                statusBill: '%C4%90%C3%A3%20ho%C3%A0n%20th%C3%A0nh',
            })
        }
    }

    updateBillStatus = () => {
        let config = this.getConfigToken();
        var url = 'https://localhost:7193/api/v1/Bills/updateStatus?billId=' + this.props.idToGet + '&newStatus=' + this.state.statusBill;
        axios.put(url, config).then((response) => {
            Swal.fire(
                'Sửa thành công!',
                'Thay đổi đã xảy ra',
                'success'
            )
        });
        // if( this.state.statusBill === '%C4%90%C3%A3%20ho%C3%A0n%20th%C3%A0nh' ) {
        //     var url = 'https://localhost:7193/api/Revenues/update-today?idProduct=13&number=1'
        //     axios.post(url, config).then((response) => {
        //     });
        // }
        if (this.state.statusBill === '%C4%90%C3%A3%20ho%C3%A0n%20th%C3%A0nh') {
            this.props.billDetail.forEach(item => {
                var url = 'https://localhost:7193/api/Revenues/update-today?idProduct=' + item.productId + '&number=' + item.quantity;
                //console.log(url)
                axios.post(url, config)
            })
        }
        return this.props.changeToDetailPage('');
    }

    render() {
        if (this.props.showDetailPage === true) {
            if (this.props.defaultStatus !== 'Đã hoàn thành') {
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
                                                            <h6 className="mb-0 text-muted">{this.props.billDetail.length} sản phẩm</h6>
                                                        </div>
                                                        {this.renderItem()}
                                                        <hr className="my-4" />
                                                        <div className="container">
                                                            <div className="row">
                                                                <div className="col-6">
                                                                    <div className="pt-5">
                                                                        <h6 className="mb-0">
                                                                            <a href="#!" className="text-body"
                                                                                onClick={() => this.props.changeToDetailPage()}
                                                                            >
                                                                                <i className="fas fa-long-arrow-alt-left me-2" />
                                                                                Trở về trang chủ
                                                                            </a>
                                                                        </h6>
                                                                    </div>
                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="pt-5">
                                                                        <select onChange={(event) => this.changeStatus(event.target.value)}>
                                                                            <option>Chờ xác nhận</option>
                                                                            <option>Xác nhận</option>
                                                                            <option>Đang vận chuyển</option>
                                                                            <option>Đã hoàn thành</option>
                                                                        </select>
                                                                    </div>
                                                                </div>
                                                                <div className="col-3">
                                                                    <div className="pt-5">
                                                                        <button type="button" className="btn btn-primary save-button"
                                                                            onClick={() => this.updateBillStatus()}
                                                                        >Lưu trạng thái mới</button>
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
            else return (
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
                                                        <h6 className="mb-0 text-muted">{this.props.billDetail.length} sản phẩm</h6>
                                                    </div>
                                                    {this.renderItem()}
                                                    <hr className="my-4" />
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="pt-5">
                                                                    <h6 className="mb-0">
                                                                        <a href="#!" className="text-body"
                                                                            onClick={() => this.props.changeToDetailPage()}
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
        else return null
    }
}
export default OrderDetail;