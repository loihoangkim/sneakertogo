import React, { Component } from "react";
import axios from "axios";

class Dashboard extends Component {

    constructor(pros) {
        super(pros)
        var today = new Date();
        this.state = {
            date: today.getDate(),
            month: today.getMonth() + 1,
            year: today.getFullYear(),
            totalOrder: 0,
            totalSalesOfDay: 0,
            totalRevenueOfDay: 0,
            total: null,
            bestModel: [],
            lowModel: [],
        }
    }
    // componentDidMount = () => {
    //     // console.log(this.state.date)
    //     // console.log(this.state.month)
    //     // console.log(this.state.year)

    // }

    getConfigToken() {
        let config = {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("Token"),
                "Content-type": "application/json"
            }
        };
        return config;
    }

    componentDidMount = (
        url = "https://localhost:7193/api/Revenues/get-by-date?date=17&month=5&year=2023"
    ) => {
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                totalOrder: response.data.totalOrder,
                totalSalesOfDay: response.data.totalSalesOfDay,
                totalRevenueOfDay: response.data.totalRevenueOfDay

            });
        });

        var url2 = "https://localhost:7193/api/v1/Models/best";
        axios.get(url2, config).then((response) => {
            this.setState({
                bestModel: response.data
            });
        });

        var url3 = "https://localhost:7193/api/v1/Models/low";
        axios.get(url3, config).then((response) => {
            this.setState({
                lowModel: response.data
            });
        });
    };

    renderBestMode = () => {
        return this.state.bestModel.map((model, index) => {
            return (
                <tr>
                    <th scope="row">
                        <img src={"./assets/Images/" + model.name + "(1).png"} style={{ width: 160 }} alt="logo"></img>
                    </th>
                    <td>
                        {model.name}
                    </td>
                    <td>
                        {model.totalQuantity}
                    </td>
                    <td className="fw-bold">
                        {model.totalOrder}
                    </td>
                    <td>
                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(model.totalSales)}
                    </td>
                </tr>
            );
        });
    }

    renderLowMode = () => {
        return this.state.lowModel.map((model, index) => {
            return (
                <tr>
                    <th scope="row">
                        <img src={"./assets/Images/" + model.name + "(1).png"} style={{ width: 160 }} alt="logo"></img>
                    </th>
                    <td>
                        {model.name}
                    </td>
                    <td>
                        {model.totalQuantity}
                    </td>
                    <td className="fw-bold">
                        {model.totalOrder}
                    </td>
                    <td>
                        {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(model.totalSales)}
                    </td>
                </tr>
            );
        });
    }


    render() {
        return (
            // <main id="main" className="main">
            <div>
                {/* End Page Title */}
                <section className="section dashboard">
                    <h1>Doanh số hôm nay</h1>
                    <div className="row">
                        {/* Left side columns */}
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card sales-card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Số đơn hàng
                                            </h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-cart" />
                                                </div>
                                                <div className="ps-3">
                                                    <h6>{this.state.totalOrder}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Sales Card */}
                                {/* Revenue Card */}
                                <div className="col-xxl-4 col-md-6">
                                    <div className="card info-card revenue-card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Doanh số
                                            </h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-currency-dollar" />
                                                </div>
                                                <div className="ps-3">
                                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.state.totalSalesOfDay)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Revenue Card */}
                                <div className="col-xxl-4 col-xl-12">
                                    <div className="card info-card customers-card">
                                        <div className="card-body">
                                            <h5 className="card-title">
                                                Doanh thu
                                            </h5>
                                            <div className="d-flex align-items-center">
                                                <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                                    <i className="bi bi-people" />
                                                </div>
                                                <div className="ps-3">
                                                    {Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(this.state.totalRevenueOfDay)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card top-selling overflow-auto">
                                        <div className="card-body pb-0">
                                            <h5 className="card-title">
                                                Doanh số tốt nhất
                                            </h5>
                                            <table className="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Ảnh</th>
                                                        <th scope="col">Tên sản phẩm</th>
                                                        <th scope="col">Số lượng còn</th>
                                                        <th scope="col">Đã bán</th>
                                                        <th scope="col">Doanh thu</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.renderBestMode()
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card top-selling overflow-auto">
                                        <div className="card-body pb-0">
                                            <h5 className="card-title">
                                                Số lượng hàng thấp
                                            </h5>
                                            <table className="table table-borderless">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Ảnh</th>
                                                        <th scope="col">Tên sản phẩm</th>
                                                        <th scope="col">Số lượng còn</th>
                                                        <th scope="col">Đã bán</th>
                                                        <th scope="col">Doanh thu</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.renderLowMode()
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* </main> */}
            </div>
        );
    }
}
export default Dashboard;