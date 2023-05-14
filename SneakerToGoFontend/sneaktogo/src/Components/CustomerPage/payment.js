import React, { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";

class Payment extends Component {
    constructor(pros) {
        super(pros)
        this.state = {
            userId: sessionStorage.getItem("UserId"),
            cartDetail: [],
            newCode: 0,
            deliveryAddress: '',
            deliveryPhone: '',
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

        axios.get('https://localhost:7193/api/v1/Bills/new-code', config).then((response) => {
            this.setState({
                newCode: response.data,
            });
        });
        //console.log(this.state.cartDetail);
    }



    getTotal() {
        return this.state.cartDetail.reduce(function (a, b) { return a + (b.quantity * b.price) }, 0)
    }

    getTotal2() {
        return this.state.cartDetail.reduce(function (a, b) { return a + (b.quantity * b.price) }, 0) + 50000
    }



    payment = () => {
        let config = this.getConfigToken();
        axios
            .post("https://localhost:7193/api/v1/Bills", {
                billId: this.state.newCode,
                accountId: this.state.userId,
                totalPrice: this.getTotal2(),
                addressOfReceiver: this.state.deliveryAddress,
                phoneOfReceiver: this.state.deliveryPhone,
                paymentStatus: 'Thanh toán khi nhận hàng',
                orderStatus: 'Chờ xác nhận'
            }, config)
            .then(response => {
                this.state.cartDetail.forEach(item => {
                    axios
                        .post("https://localhost:7193/api/BillDetails", {
                            billId: this.state.newCode,
                            productId: item.productId,
                            modelId: item.modelId,
                            quantity: item.quantity,
                            price: item.price,
                            modelName: item.modelName
                        }, config)
                })
                this.ConfirmProduct();
                Swal.fire(
                    'Tạo thành công!',
                    'Thay đổi đã xảy ra',
                    'success'
                )
            })
            .catch(error => {
                Swal.fire(
                    'Không thể tạo hóa đơn!',
                    'Đã xảy ra một vấn đề nào đó',
                    'warning'
                )
                console.log(error);
            });
        //xóa giỏ hàng
        var deleteUrl = 'https://localhost:7193/api/CartDetails/clear?cartId=' + this.state.userId;
        axios.delete(deleteUrl, config)



        // chuyển về trang chủ
        return this.moveToHome();
    }

    ConfirmProduct = () => {
        let config = this.getConfigToken();
        this.state.cartDetail.forEach(item => {
            axios
                .post("https://localhost:7193/api/Products/confirm-order?number=" + item.quantity + "&id=+" + item.productId, {
                }, config)
        }
        )
    }


    moveToHome() {
        this.props.changeNavPage('home')
    }

    onHandleDeliveryAddressChange = (value) => {
        this.setState({
            deliveryAddress: value,
        })
    }

    onHandleDeliveryPhoneChange = (value) => {
        this.setState({
            deliveryPhone: value,
        })
    }


    renderListProduct = () => {
        return this.state.cartDetail.map((item, index) => {
            return (
                <div className="container card w-75" style={{ marginTop: 50 }} >
                    <div className="row">
                        <div className="col-4"><img
                            src={"./assets/Images/" + item.modelName + "(1).png"}
                            className="img-fluid rounded-3"
                            style={{ maxWidth: 150 }}
                            alt={item.modelName}
                        /></div>
                        <div className="col-4">
                            <h5 class="card-title" style={{ paddingTop: 50 }} >{item.modelName}</h5>
                        </div>
                        <div className="col-2">
                            <h5 class="card-title" style={{ paddingTop: 50 }} >{item.quantity}</h5>
                        </div>
                        <div className="col-2">
                            <h5 class="card-title" style={{ paddingTop: 50 }} >
                                {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}
                            </h5>
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
                <div className="container card w-75" style={{ marginTop: 50 }} >
                    <div className="row pt-3">
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            Tổng tiền hàng
                        </div>
                        <div className="col-4">
                            {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.getTotal())}
                        </div>
                    </div>
                    <div className="row pt-3">
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            Phí vận chuyển
                        </div>
                        <div className="col-4">
                            50.000đ
                        </div>
                    </div>
                    <hr></hr>
                    <div className="row pb-3">
                        <div className="col-4">
                        </div>
                        <div className="col-4">
                            Tổng chi phí
                        </div>
                        <div className="col-4">
                            {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.getTotal() + 50000)}
                        </div>
                    </div>
                </div>
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
                                            id="inputdeliveryAddress"
                                            type="text"
                                            placeholder="deliveryAddress"
                                            value={this.state.deliveryAddress}
                                            onChange={(event) => this.onHandleDeliveryAddressChange(event.target.value)}
                                        />
                                        <label htmlFor="inputEmail">Địa chỉ nhận</label>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-12">
                                            <div className="form-floating mb-3 mb-md-0">
                                                <input
                                                    className="form-control"
                                                    id="inputPhone"
                                                    type="text"
                                                    placeholder="Input phone"
                                                    value={this.state.deliveryPhone}
                                                    onChange={(event) => this.onHandleDeliveryPhoneChange(event.target.value)}
                                                />
                                                <label htmlFor="inputPhone">Số điện thoại</label>
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