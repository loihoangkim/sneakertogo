import React, { Component } from "react";
import $ from "jquery";
import axios from "axios";
import Admin from "./AdminPage/Admin";
import Swal from "sweetalert2";
import Staff from './StaffPage/Staff'
import Customer from "./CustomerPage/customer";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "isLogin": false,
            "showLogin": true,
            hovaten: '',
            tendangnhap: '',
            matkhau: '',
            email: '',
            sodienthoai: '',
            newCode: '',
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
            document.getElementById("errorOfUsername1").innerHTML = typeof errorOfUsername === "undefined" ? "" : errorOfUsername;
            document.getElementById("errorOfPass1").innerHTML = typeof errorOfPass === "undefined" ? "" : errorOfPass;
            isValid = false;
        }
        return isValid;
    }

    handleFormHoVaTenChange = (value) => {
        this.setState({
            hovaten: value,
        });
    };

    handleFormTenDangNhapChange = (value) => {
        this.setState({
            tendangnhap: value,
        });
    };

    handleFormMatKhauChange = (value) => {
        this.setState({
            matkhau: value,
        });
    };

    handleFormEmailChange = (value) => {
        this.setState({
            email: value,
        });
    };

    handleFormSoDienThoaiChange = (value) => {
        this.setState({
            sodienthoai: value,
        });
    };

    vadidateFormRegister = () => {
        let hovaten = this.state.hovaten;
        console.log(hovaten);
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

    validateRegister() {
        let hovaten = this.state.hovaten;
        let errorOfHoVaTen;
        if (hovaten === "") {
            errorOfHoVaTen = "Tên người dùng không được bỏ trống!\n";
        }


        let tendangnhap = document.getElementById("tendangnhap").value;
        let errorOfTenDangNhap;
        if (tendangnhap === "") {
            errorOfTenDangNhap = "Tên đăng nhập không được bỏ trống!\n";
        }
        if (tendangnhap.length <= 8) {
            errorOfTenDangNhap = errorOfTenDangNhap + "Tên đăng nhập không được chứa nhỏ hơn 8 ký tự!\n";
        }

        let matkhau = document.getElementById("matkhau").value;
        let errorOfMatKhau;
        if (matkhau === "") {
            errorOfMatKhau = "Mật khẩu không được bỏ trống!\n";
        }
        if (matkhau.length <= 8) {
            errorOfMatKhau = errorOfMatKhau + "Mật khẩu không được chứa nhỏ hơn 8 ký tự!\n";
        }

        let matkhau2 = document.getElementById("matkhau2").value;
        let errorOfMatKhau2;
        if (matkhau !== matkhau2) {
            errorOfMatKhau2 = errorOfMatKhau2 + "Mật khẩu không trùng nhau!\n";
            console.log("koooooooooooo")
        }

        let email = document.getElementById("email").value;
        let errorOfEmail;
        if (email === "") {
            errorOfEmail = "Email không được bỏ trống!\n";
        }

        let sodienthoai = document.getElementById("sodienthoai").value;
        let errorOfSoDienThoai;
        if (sodienthoai.length < 10) {
            errorOfSoDienThoai = "Số điện thoại không được ít hơn 10 số!\n";
        }

        if (errorOfHoVaTen || errorOfTenDangNhap || errorOfMatKhau || errorOfEmail || errorOfSoDienThoai || errorOfMatKhau2) {
            Swal.fire({
                icon: 'error',
                title: 'Đăng ký thất bại',
            })
            document.getElementById("errorOfHoVaTen").innerHTML = typeof errorOfHoVaTen === "undefined" ? "" : errorOfHoVaTen;
            document.getElementById("errorOfTenDangNhap").innerHTML = typeof errorOfTenDangNhap === "undefined" ? "" : errorOfTenDangNhap;
            document.getElementById("errorOfMatKhau").innerHTML = typeof errorOfMatKhau === "undefined" ? "" : errorOfMatKhau;
            document.getElementById("errorOfMatKhau2").innerHTML = typeof errorOfMatKhau2 === "undefined" ? "" : errorOfMatKhau2;
            document.getElementById("errorOfEmail").innerHTML = typeof errorOfEmail === "undefined" ? "" : errorOfEmail;
            document.getElementById("errorOfSoDienThoai").innerHTML = typeof errorOfSoDienThoai === "undefined" ? "" : errorOfSoDienThoai;
        }
        else {
            this.resisterAccount();
        }
    }

    getNewCode = () => {
        let url = 'https://localhost:7193/api/v1/Accounts/new-code';
        let config = this.getConfigToken();
        axios.get(url, config).then((response) => {
            this.setState({
                newCode: response.data,
            });
        });
        //console.log(this.state.newCode)
    }

    clearState = () => {
        this.setState({
            hovaten: '',
            tendangnhap: '',
            matkhau: '',
            email: '',
            sodienthoai: '',
        })
    }

    resisterAccount = () => {
        let config = this.getConfigToken();
        console.log(this.state.newCode)
        axios
            .post("https://localhost:7193/api/v1/Accounts", {
                accountId: this.state.newCode,
                name: this.state.hovaten,
                userName: this.state.tendangnhap,
                passWord: this.state.matkhau,
                email: this.state.email,
                phoneNumber: this.state.sodienthoai,
                role: 3
            }, config)
            .then(response => {
                if (response.data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Đăng ký thành công',
                    })
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Đăng ký thất bại',
                    })
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Đăng ký thất bại',
                })
                console.log(error)
            });
        this.createCart();
    }

    createCart = () => {
        let config = this.getConfigToken();
        axios
            .post("https://localhost:7193/api/Carts", {
                cardId: this.state.newCode,
                totalPrice: 0,
                status: '',
                note: '',
                accountId: this.state.newCode
            }, config);
        this.clearState();
        this.onOffLogin();
    }

    onOffLogin = () => {
        this.setState({
            showLogin: !this.state.showLogin,
        })
        this.getNewCode();
        this.clearState();
    }
    handleLogin(username, password) {
        if (this.validateLogin(username, password)) {
            var acc = { userName: username, passWord: password }
            axios
                .post("https://localhost:7193/api/v1/Accounts/login", acc, { "Content-Type": "json" })
                .then((response) => {
                    localStorage.setItem("Token", response.data.token);
                    localStorage.setItem("Role", response.data.role);
                    localStorage.setItem("UserName", response.data.user_name);
                    localStorage.setItem("UserId", response.data.userId);
                    sessionStorage.setItem("UserId", response.data.userId)
                    this.setState({
                        isLogin: true,
                        userName: response.data.user_name,
                        userId: response.data.userId
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
                        userName={this.state.userName} 
                        />
                );
            }
            else {
                return (
                    <Customer
                        HandleSelectOptions={this.props.selectOptionsEvent}
                        userId = {this.state.userId} />
                );
            }
        }
        else {
            if (this.state.showLogin === true) {
                return (
                    <section className="vh-100 login-container">
                        <div className="container py-5 h-100">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-12 col-lg-9 col-xl-7">
                                    <div
                                        className="card shadow-2-strong card-registration"
                                        style={{ borderRadius: 15 }}
                                    >
                                        <div className="card-body p-4 p-md-5">
                                            <h3 className="h2 mb-4 pb-2 pb-md-0 mb-md-5">Đăng nhập</h3>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-12 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="firstName">
                                                                Tên đăng nhập
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="yourUsername"
                                                                onChange={(e) => $(e.target).removeClass("active")}
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label style={errorLabel} id="errorOfUsername1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="emailAddress">
                                                                Mật khẩu
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="yourPassword"
                                                                onChange={(e) => $(e.target).removeClass("active")}
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label style={errorLabel} id="errorOfPass1"></label>
                                                            <label onClick={() => this.onOffLogin()}
                                                                className="text-decoration-underline text-dark"
                                                                style={{ cursor: 'pointer' }}>
                                                                Đăng ký tài khoản</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-grid gap-2 col-6 mx-auto mt-4 pt-2">
                                                    <button
                                                        className="btn btn-primary btn-lg"
                                                        type="button" onClick={() => this.handleLogin($("#yourUsername").val(), $("#yourPassword").val())}
                                                    >Đăng Nhập
                                                    </button>
                                                    <button className="btn btn-info btn-lg"
                                                        type="button" onClick={() => this.props.closeLogin()} >
                                                        Trở về
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
            else {
                return (
                    <section className="vh-100 login-container">
                        <div className="container py-5 h-100">
                            <div className="row justify-content-center align-items-center h-100">
                                <div className="col-12 col-lg-9 col-xl-7">
                                    <div
                                        className="card shadow-2-strong card-registration"
                                        style={{ borderRadius: 15 }}
                                    >
                                        <div className="card-body p-4 p-md-5">
                                            <h3 className="h2 mb-4 pb-2 pb-md-0 mb-md-5">Đăng ký tài khoản</h3>
                                            <form>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" >
                                                                Họ và tên
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="hovaten"
                                                                value={this.state.hovaten}
                                                                className="form-control form-control-lg"
                                                                onChange={(event) => this.handleFormHoVaTenChange(event.target.value)}
                                                            />
                                                            <label style={errorLabel} id="errorOfHoVaTen"></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="tendangnhap">
                                                                Tên đăng nhập
                                                            </label>
                                                            <input
                                                                type="text"
                                                                id="tendangnhap"
                                                                value={this.state.tendangnhap}
                                                                className="form-control form-control-lg"
                                                                onChange={(event) => this.handleFormTenDangNhapChange(event.target.value)}
                                                            />
                                                            <label style={errorLabel} id="errorOfTenDangNhap"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-16 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="matkhau">
                                                                Mật khẩu
                                                            </label>
                                                            <input
                                                                value={this.state.matkhau}
                                                                type="password"
                                                                id="matkhau"
                                                                className="form-control form-control-lg"
                                                                onChange={(event) => this.handleFormMatKhauChange(event.target.value)}
                                                            />
                                                            <label style={errorLabel} id="errorOfMatKhau"></label>
                                                        </div>
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="matkhau">
                                                                Nhập lại mật khẩu
                                                            </label>
                                                            <input
                                                                type="password"
                                                                id="matkhau2"
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label style={errorLabel} id="errorOfMatKhau2"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="emailAddress">
                                                                Email
                                                            </label>
                                                            <input
                                                                value={this.state.email}
                                                                type="email"
                                                                id="email"
                                                                className="form-control form-control-lg"
                                                                onChange={(event) => this.handleFormEmailChange(event.target.value)}
                                                            />
                                                            <label style={errorLabel} id="errorOfEmail"></label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 mb-4 pb-2">
                                                        <div className="form-outline">
                                                            <label className="form-label" htmlFor="phoneNumber">
                                                                Số điện thoại
                                                            </label>
                                                            <input
                                                                type="tel"
                                                                value={this.state.sodienthoai}
                                                                id="sodienthoai"
                                                                className="form-control form-control-lg"
                                                                onChange={(event) => this.handleFormSoDienThoaiChange(event.target.value)}
                                                            />
                                                            <label style={errorLabel} id="errorOfSoDienThoai"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="d-grid gap-2 col-6 mx-auto mt-4 pt-2">
                                                    <button
                                                        className="btn btn-primary btn-lg"
                                                        type="button"
                                                        onClick={() => this.validateRegister()}
                                                    >Đăng ký
                                                    </button>
                                                    <button className="btn btn-info btn-lg"
                                                        type="button"
                                                        onClick={() => this.onOffLogin()} >
                                                        Trở về đăng nhập
                                                    </button>
                                                    {/* <button className="btn btn-info btn-lg"
                                                        type="button" onClick={() => this.props.closeLogin()} >
                                                        Trở về
                                                    </button> */}
                                                </div>
                                            </form>
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
}
export default Login;