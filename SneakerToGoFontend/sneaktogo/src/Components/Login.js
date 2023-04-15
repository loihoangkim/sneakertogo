import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import Admin from "./Admin";
import Swal from "sweetalert2";
import Staff from './StaffPage/Staff'
import Customer from './Customer'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "isLogin": false,
        }
    }
    validateLogin(username, password) {
        let isValid = true;
        // Thêm validate username
        let errorOfUsername = "";
        if (username === "") {
            errorOfUsername = errorOfUsername + "Tên đăng nhập không được bỏ trống!\n";
        }
        // Thêm validate password
        let errorOfPass = "";
        if (password === "") {
            errorOfPass = errorOfPass + "Mật khẩu không được bỏ trống!\n";
        }
        // Thêm hiện các dòng validate
        if (errorOfUsername || errorOfPass) {
            Swal.fire(
                'Cảnh báo\n\n Dữ liệu không hợp lệ',
                '',
                'error'
            )
            document.getElementById("errorOfUsername").innerHTML = typeof errorOfUsername === "undefined" ? "" : errorOfUsername;
            document.getElementById("errorOfPass").innerHTML = typeof errorOfPass === "undefined" ? "" : errorOfPass;
            isValid = false;
        }
        return isValid;
    }
    handleLogin(username, password) {
        if (this.validateLogin(username, password)) {
            console.log(username)
            console.log(password)
            var acc = { userName: username, passWord: password }
            axios
                .post("https://localhost:7193/api/v1/Accounts/login", acc, { "Content-Type": "json" })
                .then((response) => {
                    localStorage.setItem("Token", response.data.token);
                    localStorage.setItem("Role", response.data.role);
                    localStorage.setItem("UserName", response.data.user_name);
                    this.setState({
                        isLogin: true,
                        userName: response.data.user_name
                    })
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        icon: 'error',
                        title: 'Đăng nhập thất bại',
                        text: 'Tài khoản hoặc mật khẩu không đúng!',
                    })
                });
        }

    }

    render() {
        const errorLabel = {
            color: "red",
            padding: "10px",
        }
        if (this.state.isLogin) {
            if (localStorage.getItem("Role") === "1") {
                return (
                    <Admin
                        HandleSelectOptions={this.props.selectOptionsEvent}
                        userName={this.state.userName} />
                );
            }
            else if (localStorage.getItem("Role") === "2") {
                return (
                    <Staff
                        HandleSelectOptions={this.props.selectOptionsEvent}
                        userName={this.state.userName} />
                );
            }
            else {
                return (
                    <Customer
                        HandleSelectOptions={this.props.selectOptionsEvent} />
                );
            }
        }
        else {
            return (
                <div className="login-container ">
                    <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                    <div className="card mb-3">
                                        <div className="card-body" style={{margin: 15}}>
                                            <div className="pt-4 pb-2">
                                                <h5 className="card-title text-center pb-0 fs-4">Tới đây rồi thì đăng nhập ngay thôi</h5>
                                            </div>
                                            {/* form */}
                                            <form className="row g-3 needs-validation" noValidate>
                                                <div className="col-12">
                                                    <label htmlFor="yourUsername" className="form-label">Tên đăng nhập</label>
                                                    <div className="input-group has-validation">
                                                        <input type="text" name="username" className="form-control" id="yourUsername"
                                                            onChange={(e) => $(e.target).removeClass("active")} />
                                                        {/* Thêm validate tên đăng nhập */}
                                                    </div>
                                                    <label style={errorLabel} id="errorOfUsername"></label>
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="yourPassword" className="form-label">Mật khẩu của bạn</label>
                                                    <input type="password" name="password" className="form-control" id="yourPassword"
                                                        onChange={(e) => $(e.target).removeClass("active")} />
                                                    {/* Thêm validate Mật khẩu */}
                                                    <label style={errorLabel} id="errorOfPass"></label>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100" type="button" onClick={() => this.handleLogin($("#yourUsername").val(), $("#yourPassword").val())}>Đăng nhập</button>
                                                </div>
                                                <div className="col-12">
                                                    <button className="btn btn-info w-100" type="button" onClick={() => this.props.closeLogin()}>Trở về</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            );
        }
    }
}
export default Login;