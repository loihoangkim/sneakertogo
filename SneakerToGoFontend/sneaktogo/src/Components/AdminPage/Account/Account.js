import React, { Component } from "react";
import axios from "axios";
import FormAccount from "./FormAccount";
import AccountList from "./AccountList";
import Swal from "sweetalert2";
import AccountEditForm from "./AccountEditForm";


class Account extends Component {
    constructor() {
        super();
        this.state = {
            TaiKhoans: [],
            showFormAccount: false,
            showListAccount: true,
            // for post
            hoTen: '',
            soDienThoai: '',
            tenDangNhap: '',
            password: '',
            vaiTro: '',
            newCode: '',

            // for put
            showEditFormAccount: false,
            accountIdToEdit: '',

            // for delete
            accountIdToDelete: "",
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

    componentDidMount() {
        let config = this.getConfigToken();
        axios.get("https://localhost:7193/api/v1/Accounts", config)
            .then((response) => {
                this.setState({
                    TaiKhoans: response.data
                })
            });
    }

    // FOR POST

    clearInsertText = () => {
        this.setState({
            hoTen: "",
            soDienThoai: "",
            tenDangNhap: "",
            password: "",
            vaiTro: "",
        });
    };

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

    postData = () => {
        let config = this.getConfigToken();
        //let isInsertSuccess
        axios
            .post("https://localhost:7193/api/v1/Accounts", {
                accountId: this.state.newCode,
                name: this.state.hoTen,
                phoneNumber: this.state.soDienThoai,
                userName: this.state.tenDangNhap,
                password: this.state.password,
                email: '',
                role: 2,
            }, config)
            .then(response => {
                if (response.data) {
                    Swal.fire(
                        'Thêm thành công!',
                        'Thay đổi đã xảy ra',
                        'success'
                    )
                }
                else {
                    Swal.fire(
                        'Không thể thực hiện thêm!',
                        'Đã xảy ra một vấn đề nào đó',
                        'warning'
                    )
                }
            })
            .catch(error => {
                Swal.fire(
                    'Không thể thực hiện thêm!',
                    'Đã xảy ra một vấn đề nào đó',
                    'warning'
                )
            });
        this.clearInsertText();
        this.componentDidMount();
        this.renderFormAccount();
    };


    handleFormHoTenChange = (value) => {
        this.setState({
            hoTen: value,
        });
    };
    handleFormSoDienThoaiChange = (value) => {
        this.setState({
            soDienThoai: value,
        });
    };
    handleFormTenDangNhapChange = (value) => {
        this.setState({
            tenDangNhap: value,
        });
    };
    handleFormPasswordChange = (value) => {
        this.setState({
            password: value,
        });
    };
    handleFormVaiTroChange = (value) => {
        this.setState({
            vaiTro: value,
        });
    };


    renderFormAccount = () => {
        this.setState({
            showListAccount: !this.state.showListAccount,
            showFormAccount: !this.state.showFormAccount,
        })
        this.clearInsertText();
        this.getNewCode();
    }

    // FOR PUT
    openEditFormAccount = (data) => {
        this.setState({
            showListAccount: !this.state.showListAccount,
            showEditFormAccount: !this.state.showEditFormAccount,
            accountIdToEdit: data.accountId,
            hoTen: data.name,
            soDienThoai: data.phoneNumber,
            tenDangNhap: data.userName,
            password: data.password,
            vaiTro: data.role
        })
    }

    closeEditFormAccount = () => {
        this.setState({
            showListAccount: !this.state.showListAccount,
            showEditFormAccount: !this.state.showEditFormAccount,
        })
        this.clearInsertText();
    }

    putData = () => {
        var url = "https://localhost:7193/api/v1/Accounts/" + this.state.accountIdToEdit;
        let config = this.getConfigToken();
        //let isEditSuccess;
        axios
            .put(url, {
                accountId: this.state.accountIdToEdit,
                name: this.state.hoTen,
                phoneNumber: this.state.soDienThoai,
                userName: this.state.tenDangNhap,
                password: this.state.password,
                email: '',
                role: this.state.vaiTro,
            }, config)
            .then(response => {
                if (response.data) {
                    Swal.fire(
                        'Sửa tài khoản thành công!',
                        'Thay đổi đã xảy ra',
                        'success'
                    )
                }
                else {
                    Swal.fire(
                        'Không thể thực hiện sửa!',
                        'Đã xảy ra một vấn đề nào đó',
                        'warning'
                    )
                }
            })
            .catch(error => {
                Swal.fire(
                    'Không thể thực hiện sửa!!',
                    'Đã xảy ra một vấn đề nào đó',
                    'warning'
                )
                console.log(error)
            });
        //this.showUpdateResultAlert();
        this.componentDidMount();
        this.clearInsertText();
        this.closeEditFormAccount();
    };


    // FOR DELETE

    // HTTP DELETE
    deleteAccount = (accountId) => {
        var url = "https://localhost:7193/api/v1/Accounts/" + accountId;
        let config = this.getConfigToken();
        axios
            .delete(url, config)
            .then(response => {
                if (response.data) {
                    Swal.fire(
                        'Xóa thành công!',
                        'Thay đổi đã xảy ra',
                        'success'
                    )
                    this.componentDidMount();
                }
                else {
                    Swal.fire(
                        'Không thể thực hiện xóa!',
                        'Đã xảy ra một vấn đề nào đó',
                        'success'
                    )
                }
            })
            .catch(error => {
                Swal.fire(
                    'Không thể thực hiện xóa!',
                    'Đã xảy ra một vấn đề nào đó',
                    'success'
                )
            });
        this.componentDidMount();
    };


    showDeleteConfirmAlert = (data) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Bạn có chắc chắn?',
            text: "Thao tác này có thể không hoàn tác được!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Xoá!',
            cancelButtonText: 'Không!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                this.deleteAccount(data.accountId);
                // end comfirmed
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Không có gì xảy ra',
                    'success'
                )
            }
        })
    }


    // FOR DISPLAY LIST DATA
    renderAccount = () => {
        return this.state.TaiKhoans.map((data, index) => {
            return (
                <tr key={data.accountId}>
                    <td>{data.name}</td>
                    <td>{data.phoneNumber}</td>
                    <td>{data.userName}</td>
                    <td>{data.email}</td>
                    <td>{data.role}</td>
                    <td class="actions">
                        <button type="button" class="btn  btn-success btn-sm"
                            onClick={() => this.openEditFormAccount(data)}
                        >Chỉnh sửa
                        </button>
                        <button type="button" class="btn btn-danger btn-sm"
                            onClick={() => this.showDeleteConfirmAlert(data)}
                        >
                            Xóa
                        </button>
                    </td>
                </tr>
            );
        }
        );
    }
    render() {
        return (
            <div className="container">
                <AccountList
                    renderAccount={this.renderAccount}
                    showListAccount={this.state.showListAccount}
                    renderFormAccount={this.renderFormAccount}
                />
                <FormAccount
                    showFormAccount={this.state.showFormAccount}
                    renderFormAccount={this.renderFormAccount}
                    handleFormHoTenChange={this.handleFormHoTenChange}
                    handleFormSoDienThoaiChange={this.handleFormSoDienThoaiChange}
                    handleFormTenDangNhapChange={this.handleFormTenDangNhapChange}
                    handleFormPasswordChange={this.handleFormPasswordChange}
                    handleFormVaiTroChange={this.handleFormVaiTroChange}
                    hoTen={this.state.hoTen}
                    soDienThoai={this.state.soDienThoai}
                    tenDangNhap={this.state.tenDangNhap}
                    password={this.state.password}
                    vaiTro={this.state.vaiTro}
                    postData={this.postData}
                />
                <AccountEditForm
                    showEditFormAccount={this.state.showEditFormAccount}
                    closeEditFormAccount={this.closeEditFormAccount}
                    //accountIdToEdit={this.state.accountIdToEdit}
                    handleFormHoTenChange={this.handleFormHoTenChange}
                    handleFormSoDienThoaiChange={this.handleFormSoDienThoaiChange}
                    handleFormTenDangNhapChange={this.handleFormTenDangNhapChange}
                    handleFormPasswordChange={this.handleFormPasswordChange}
                    handleFormVaiTroChange={this.handleFormVaiTroChange}
                    hoTen={this.state.hoTen}
                    soDienThoai={this.state.soDienThoai}
                    tenDangNhap={this.state.tenDangNhap}
                    password={this.state.password}
                    vaiTro={this.state.vaiTro}
                    putData={this.putData}
                />
            </div>
        );
    }
}
export default Account;